from django.http import HttpResponse
from django.template import RequestContext, loader
from django.utils.encoding import smart_unicode
import json

from news.models import News

DEFAULT_LIMIT = 10
DEFAULT_OFFSET = 0

def posts_json(request):
    news = News.objects.all()
    json_template = loader.get_template('news/news.json')

    news_count = news.count()

    limit = DEFAULT_LIMIT
    try:
        limit = int(request.GET.get('limit', DEFAULT_LIMIT))

        if limit < 1 or limit == u'':
            raise ValueError
    except:
        return HttpResponse('wrong limit %s ' % limit, mimetype="text/plain", status=400)

    offset = DEFAULT_OFFSET
    try:
        offset = int(request.GET.get('offset', DEFAULT_OFFSET))

        if offset == u'':
            raise ValueError
    except:
        return HttpResponse('wrong offset', mimetype="text/plain", status=400)

    news = news[::-1]
    news = news[offset:limit + offset]

    context = RequestContext(request, {
        'news': news,
        'count': news_count,
    })

    posts = json_template.render(context)

    response = HttpResponse(posts, mimetype='application/json')
    return response
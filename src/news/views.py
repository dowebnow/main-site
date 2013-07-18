from django.http import HttpResponse
from django.template import RequestContext, loader
from django.utils.encoding import smart_unicode
import json

from news.models import News

def posts_json(request):
    news = News.objects.all()
    json_template = loader.get_template('news/news.json')

    context = RequestContext(request, {
        'news': news,
        'count': news.count(),
    })

    posts = json_template.render(context)

    response = HttpResponse(posts, mimetype='application/json')
    return response
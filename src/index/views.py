from django.http import HttpResponse
from django.template import RequestContext, loader
from django.core import serializers

from news.models import News

def index(request):
    template = loader.get_template('index/index.html')
    context = RequestContext(request, {
        
    })
    return HttpResponse(template.render(context))

def news(request):
    limit = request.GET.get('limit', 10)
    offset = request.GET.get('offset', 0)

    news = News.objects.all()
    news = news[offset:offset+limit]

    res = serializers.serialize("json", news)
    return HttpResponse(res, mimetype='application/json')
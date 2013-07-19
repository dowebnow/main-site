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
    news = News.objects.all()
#    data = [news, news.count()]
    res = serializers.serialize("json", news)
    return HttpResponse(res, mimetype='application/json')
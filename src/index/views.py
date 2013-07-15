from django.http import HttpResponse
from django.template import RequestContext, loader
import json

from news import News

def index(request):
    template = loader.get_template('index/index.html')
    context = RequestContext(request, {
        
    })
    return HttpResponse(template.render(context))

def test(request):
    news = News.objects.get()
    responce = json.dumps(news)
    return HttpResponse(responce, mimetype='application/json')
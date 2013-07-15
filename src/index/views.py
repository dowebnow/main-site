from django.http import HttpResponse
from django.template import RequestContext, loader
from django.core import serializers

from news.models import News

def index(request):
    template = loader.get_template('index/index.html')
    context = RequestContext(request, {
        
    })
    return HttpResponse(template.render(context))

def test(request):
    data = serializers.serialize("json", News.objects.all())
    return HttpResponse(data, mimetype='application/json')
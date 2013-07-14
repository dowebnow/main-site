from django.http import HttpResponse
from django.template import RequestContext, loader
import json

def index(request):
    template = loader.get_template('index/index.html')
    context = RequestContext(request, {
        
    })
    return HttpResponse(template.render(context))

def test(request):
    data = {
        'some_string': 'Hello World!',
    }
    responce = json.dumps(data)
    return HttpResponse(responce, mimetype='application/json')
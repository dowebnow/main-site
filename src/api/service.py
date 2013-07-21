from api.input import Input
from django.http import HttpResponse
#from api.output import Output
#from django.db.models.query import QuerySet, ValuesQuerySet
#from api.error import ServiceNotFoundError, ActionNotFoundError, ServiceError
#from django.views.decorators.csrf import csrf_exempt

def start(request):
    raw_input = Input(request)
    print raw_input
    return HttpResponse(request, mimetype="text/plain")
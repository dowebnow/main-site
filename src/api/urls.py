from django.conf.urls import *

from service import *

urlpatterns = patterns('',
    url(r'^', start),
)

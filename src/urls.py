from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'index.views.index', name='index'),
    url(r'^news.json$', 'news.views.posts_json', name='index_news'),
    url(r'^test.json$', 'news.views.posts_json', name='index_test'),
    # url(r'^dowebnow/', include('dowebnow.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    (r'^api/', include('api.urls')),
)

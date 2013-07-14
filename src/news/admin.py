from django.contrib import admin
from news.models import News

class NewsAdmin(admin.ModelAdmin):
    fields = ['title', 'published_date']

admin.site.register(News, NewsAdmin)
from django.contrib import admin
from news.models import News

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'full_text', 'published_date')

admin.site.register(News, NewsAdmin)
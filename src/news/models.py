from django.db import models

# Create your models here.
class News(models.Model):
    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'

    title = models.CharField(max_length=200)
    full_text = models.TextField()
    published_date = models.DateTimeField('date published')

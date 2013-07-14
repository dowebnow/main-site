from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=200)
    full_text = models.TextField()
    published_date = models.DateTimeField('date published')

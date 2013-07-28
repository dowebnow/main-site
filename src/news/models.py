from django.db import models

# Create your models here.
class News(models.Model):
    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'

    title = models.CharField(max_length=200)
    full_text = models.TextField()
    author = models.CharField(max_length=100)
    image = models.ImageField(upload_to='posts_images/')
    published_date = models.DateTimeField(auto_now_add=True, verbose_name='date published')

    def __unicode__(self):
        return str(self.pk) + self.title
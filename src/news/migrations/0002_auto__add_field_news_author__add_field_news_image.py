# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'News.author'
        db.add_column(u'news_news', 'author',
                      self.gf('django.db.models.fields.CharField')(default='Admin', max_length=100),
                      keep_default=False)

        # Adding field 'News.image'
        db.add_column(u'news_news', 'image',
                      self.gf('django.db.models.fields.files.ImageField')(default='/', max_length=100),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'News.author'
        db.delete_column(u'news_news', 'author')

        # Deleting field 'News.image'
        db.delete_column(u'news_news', 'image')


    models = {
        u'news.news': {
            'Meta': {'object_name': 'News'},
            'author': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'full_text': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'published_date': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['news']
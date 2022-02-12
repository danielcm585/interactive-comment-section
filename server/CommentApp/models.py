from django.db import models

# Create your models here.

class Comments(models.model):
  CommentID = models.AutoField(primary_key=True)
  ParentID = models.IntegerField()
  Content = models.CharField(max_length=255)
  Score = models.IntegerField(max_length=255)
  Username = models.CharField(max_length=100)
  CreatedAt = models.DateField()
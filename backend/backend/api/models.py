from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    github_url = models.URLField()

    def __str__(self):
        return self.name
from django.db import models

class ToDo(models.Model):
    text = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.text

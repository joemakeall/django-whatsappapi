from django.db import models

class Messages(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    request_type = models.CharField(max_length=50)
    message = models.TextField()

    def __str__(self):
        return f'{self.timestamp} - {self.request_type}'
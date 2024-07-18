from django.db import models

class Messages(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    request_type = models.CharField(max_length=50)
    message = models.TextField()

    def __str__(self):
        return f'{self.timestamp} - {self.request_type}'
    
class Company(models.Model):
    cnpj = models.CharField(max_length=18)
    company_name = models.CharField(max_length=255)
    trade_name = models.CharField(max_length=255)
    responsible_name = models.CharField(max_length=255)
    state_registration = models.CharField(max_length=20)
    instagram = models.CharField(max_length=100, blank=True, null=True)
    whatsapp = models.BooleanField(default=False)
    cell_phone = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField()
    confirm_email = models.EmailField()
    cep = models.CharField(max_length=9)
    number = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    neighborhood = models.CharField(max_length=100)
    complement = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True)

    def __str__(self):
        return self.company_name
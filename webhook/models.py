from django.db import models
from django.contrib.auth.hashers import make_password, check_password

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
    segment = models.CharField(max_length=100)
    password = models.CharField(max_length=128, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.password and not self.id:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.company_name

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

class Products(models.Model):
    codigo = models.CharField(max_length=255, unique=True)
    descricao = models.CharField(max_length=255)
    grupo = models.CharField(max_length=100)
    ean = models.CharField(max_length=13)
    status = models.CharField(max_length=50, choices=[('active', 'Active'), ('inactive', 'Inactive')])
    imagem = models.URLField()
    average_rating = models.FloatField(default=0)
    total_reviews = models.IntegerField(default=0)

    def __str__(self):
        return self.descricao

    def update_rating(self):
        reviews = Reviews.objects.filter(product=self)
        if reviews.exists():
            total_rating = sum(review.rating for review in reviews)
            self.average_rating = total_rating / reviews.count()
            self.total_reviews = reviews.count()
        else:
            self.average_rating = 0
            self.total_reviews = 0 
        self.save()

class Reviews(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    author = models.ForeignKey(Company, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review for {self.product}'

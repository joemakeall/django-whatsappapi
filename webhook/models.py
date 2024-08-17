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
    type_company = models.CharField(max_length=2)
    instagram = models.CharField(max_length=100, blank=True, null=True)
    whatsapp = models.BooleanField(default=False)
    ddd_cp = models.CharField(max_length=4, blank=True, null=True)
    cell_phone = models.CharField(max_length=20, blank=True, null=True)
    ddd_p = models.CharField(max_length=4, blank=True, null=True)    
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

    def get_prices(self):
        return self.prices.all()  # Acessa todos os preços associados a este produto

    def get_attributes(self):
        return self.attributes.all()  # Acessa todos os atributos associados a este produto

class Reviews(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    author = models.ForeignKey(Company, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review for {self.product}'

class PriceTable(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='prices')
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    discount_percentage = models.FloatField(default=0)

    def calculate_discount(self):
        if self.discount_price and self.original_price:
            self.discount_percentage = 100 * (1 - (self.discount_price / self.original_price))
        else:
            self.discount_percentage = 0
        self.save()

    def __str__(self):
        return f"{self.product.descricao} - {self.original_price} (Discount: {self.discount_percentage}%)"

class ProductAttribute(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='attributes')
    name = models.CharField(max_length=100)  # e.g., Size, Weight, Color, etc.
    value = models.CharField(max_length=255)  # e.g., "Large", "1.5 kg", "Red", etc.
    
    def __str__(self):
        return f"{self.product.descricao} - {self.name}: {self.value} {self.unit_of_measurement if self.unit_of_measurement else ''}"
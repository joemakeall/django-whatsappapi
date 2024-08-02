from django.contrib import admin
from .models import Products

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'descricao', 'grupo', 'ean', 'status')
    search_fields = ('descricao', 'codigo')

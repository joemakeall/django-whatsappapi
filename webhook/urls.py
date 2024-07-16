from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('whatsappapi/', views.index, name="index"),
    path('whatsappapi/webhook/verify/', views.verify, name='verify'),
    re_path(r'^whatsappapi/webhook/verify/?$', views.verify, name='verify'),  # regex para aceitar com ou sem barra no final
]

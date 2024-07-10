from django.urls import path, re_path
from . import views

urlpatterns = [
    path('',               views.index,  name="index"),
    path('whatsappapi/',   views.index,  name="index"),
    re_path(r'^verify/?$', views.verify, name='verify'),  # regex to match with or without trailing slash
]
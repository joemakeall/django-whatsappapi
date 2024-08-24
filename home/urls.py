from django.urls import path
from . import views

app_name = 'home'

urlpatterns = [
    path('',                    views.index,                 name='index'),
    path('service/',            views.service,               name='service'),
    path('gallery/',            views.gallery,               name='gallery'),
    path('team/',               views.team,                  name='team'),
    path('pricing/',            views.pricing,               name='pricing'),
    path('testimonial/',        views.testimonial,           name='testimonial'),
    path('faq/',                views.faq,                   name='faq'),
    path('contact/',            views.contact,               name='contact'),
    path('gallery/',            views.gallery,               name='gallery'),
    path('blog/',               views.blog,                  name='blog'), 
    path('about/',              views.about,                 name='about'), 
    path('detail/',             views.detail,                name='detail'),
]

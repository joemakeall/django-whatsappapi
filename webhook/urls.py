from django.urls import path, re_path
from . import views

urlpatterns = [
    path('',                                     views.index,          name="index"),
    path('chat/',                                views.chat,           name="chat"),
    path('login/',                               views.login,          name="login"),
    path('register/',                            views.register,       name='register'),  # Adicione esta linha
    path('dashboard/',                           views.dashboard,      name='dashboard'),
    path('products/',                            views.products,       name='products'),
    path('product/<str:codigo>/',                views.product,        name='product'),
    path('add_review/<int:product_id>/',         views.add_review,     name='add_review'),
    path('get_reviews/<int:product_id>/',        views.get_reviews,    name='get_reviews'),
    path('rate_product/',                        views.rate_product,   name='rate_product'),
    path('dashboard_a/',                         views.dashboard_a,    name='dashboard_a'),
    path('dashboard_b/',                         views.dashboard_b,    name='dashboard_b'),
    path('new_sidebar/',                         views.new_sidebar,    name='new_sidebar'),
    path('companies/',                           views.companies,      name='companies'),
    path('company/<int:id>/',                    views.company_detail, name='company_detail'),
    path('whatsappapi/',                         views.index,          name="index"),
    path('whatsappapi/webhook/verify/',          views.verify,         name='verify'),
    re_path(r'^whatsappapi/webhook/verify/?$',   views.verify,         name='verify'),  # regex para aceitar com ou sem barra no final
]

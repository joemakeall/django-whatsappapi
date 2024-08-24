import requests
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime

GOOGLE_API_KEY = settings.GOOGLE_API_KEY

def index(request):

    api_key = GOOGLE_API_KEY 
    place_id = 'ChIJ2bWl1eUxz5QRNh6ucqxFZX4'  # Substitua pelo ID do lugar desejado
    url = f'https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=reviews&key={api_key}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Verifica se ocorreu um erro na requisição
        data = response.json()
        reviews = data.get('result', {}).get('reviews', [])
        
        # Formatar as avaliações para o front-end
        formatted_reviews = [
            {
                "author_name": review.get("author_name", "Unknown"),
                "profile_photo_url": review.get("profile_photo_url", ""),
                "rating": review.get("rating", 0),
                "text": review.get("text", ""),
                "time": review.get("time", 0)
            }
            for review in reviews
        ]
        
        # Convertendo o timestamp para um formato legível
        for review in formatted_reviews:
            timestamp = review["time"]
            review["date"] = datetime.utcfromtimestamp(timestamp).strftime('%d %b %Y')


        return render(request, 'home/index.html', {"reviews": formatted_reviews})
    except requests.RequestException as e:
        print(f'Error fetching reviews: {e}')
        return JsonResponse({"reviews": []})

def service(request):
    return render(request, 'home/service.html')

def gallery(request):
    return render(request, 'home/gallery.html')

def team(request):
    return render(request, 'home/team.html')

def pricing(request):
    return render(request, 'home/pricing.html')

def testimonial(request):
    return render(request, 'home/testimonial.html')

def faq(request):
    return render(request, 'home/faq.html')

def contact(request):
    return render(request, 'home/contact.html')

def gallery(request):
    return render(request, 'home/gallery.html')

def blog(request):
    return render(request, 'home/blog.html')

def about(request):
    return render(request, 'home/about.html')

def detail(request):
    
    api_key = GOOGLE_API_KEY 
    place_id = 'ChIJ2bWl1eUxz5QRNh6ucqxFZX4'  # Substitua pelo ID do lugar desejado
    url = f'https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=reviews&key={api_key}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Verifica se ocorreu um erro na requisição
        data = response.json()
        reviews = data.get('result', {}).get('reviews', [])
        
        # Formatar as avaliações para o front-end
        formatted_reviews = [
            {
                "author_name": review.get("author_name", "Unknown"),
                "profile_photo_url": review.get("profile_photo_url", ""),
                "rating": review.get("rating", 0),
                "text": review.get("text", ""),
                "time": review.get("time", 0)
            }
            for review in reviews
        ]

        # Convertendo o timestamp para um formato legível
        for review in formatted_reviews:
            timestamp = review["time"]
            review["date"] = datetime.utcfromtimestamp(timestamp).strftime('%d %b %Y')
        
        return render(request, 'home/detail.html', {"reviews": formatted_reviews})
    except requests.RequestException as e:
        print(f'Error fetching reviews: {e}')
        return JsonResponse({"reviews": []})

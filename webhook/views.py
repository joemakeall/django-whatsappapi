import os
import json
import requests
from django.conf import settings
from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage
from .forms import RegisterForm
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Messages  # Importe seu modelo Message aqui
from django.utils import timezone

WEBHOOK_VERIFY_TOKEN = settings.WEBHOOK_VERIFY_TOKEN
GRAPH_API_TOKEN = settings.GRAPH_API_TOKEN

@csrf_exempt
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def login(request):
    return render(request, 'login.html')

@csrf_exempt
def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST, request.FILES)
        if form.is_valid():
            # Processar os dados do formulário e salvar no banco de dados
            form.save()
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

@csrf_exempt
def verify(request):
    if request.method == 'GET':
        mode = request.GET.get('hub.mode')
        token = request.GET.get('hub.verify_token')
        challenge = request.GET.get('hub.challenge')

        if mode == 'subscribe' and token == WEBHOOK_VERIFY_TOKEN:
            return HttpResponse(challenge, status=200)
        else:
            return HttpResponse('Forbidden', status=403)
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            # Salvar a mensagem no banco de dados
            message = Messages.objects.create(
                timestamp=timezone.now(),
                request_type='POST',
                message=json.dumps(data)
            )
            response_data = {'message': 'Message received and saved'}
            return HttpResponse(json.dumps(response_data), status=200, content_type="application/json")
        except json.JSONDecodeError:
            return HttpResponse('Invalid JSON', status=400)
        except Exception as e:
            return HttpResponse(f'Error: {str(e)}', status=500)
    
    else:
        return HttpResponse('Method Not Allowed', status=405)


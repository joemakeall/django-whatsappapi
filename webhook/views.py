import os
import json
import requests
from django.conf import settings
from django.shortcuts import render, redirect, get_object_or_404
from django.core.files.storage import FileSystemStorage
from .forms import RegisterForm
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.contrib.auth import authenticate, login as auth_login
from django.utils import timezone
from .models import Messages, Company

WEBHOOK_VERIFY_TOKEN = settings.WEBHOOK_VERIFY_TOKEN
GRAPH_API_TOKEN = settings.GRAPH_API_TOKEN

@csrf_exempt
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = Company.objects.get(email=email)
            if user.check_password(password):
                # Autenticação bem-sucedida
                request.session['user_id'] = user.id
                return redirect('dashboard')  # Redirecionar para a página do menu lateral
            else:
                messages.error(request, 'Senha incorreta.')
        except Company.DoesNotExist:
            messages.error(request, 'E-mail não encontrado.')

    return render(request, 'login.html')

def dashboard(request):
    return render(request, 'dashboard.html')

@csrf_exempt
def register(request):
    if request.method == 'POST':
        cnpj = request.POST['cnpj']
        company_name = request.POST['company_name']
        trade_name = request.POST['trade_name']
        responsible_name = request.POST['responsible_name']
        state_registration = request.POST['state_registration']
        instagram = request.POST['instagram']
        whatsapp = 'whatsapp' in request.POST
        cell_phone = request.POST['cell_phone']
        phone = request.POST['phone']
        email = request.POST['email']
        confirm_email = request.POST['confirm_email']
        cep = request.POST['cep']
        number = request.POST['number']
        address = request.POST['address']
        neighborhood = request.POST['neighborhood']
        complement = request.POST['complement']
        city = request.POST['city']
        state = request.POST['state']
        logo = request.FILES['logo'] if 'logo' in request.FILES else None
        password = request.POST['password']

        # Cria uma nova empresa (Company)
        company = Company(
            cnpj=cnpj,
            company_name=company_name,
            trade_name=trade_name,
            responsible_name=responsible_name,
            state_registration=state_registration,
            instagram=instagram,
            whatsapp=whatsapp,
            cell_phone=cell_phone,
            phone=phone,
            email=email,
            confirm_email=confirm_email,
            cep=cep,
            number=number,
            address=address,
            neighborhood=neighborhood,
            complement=complement,
            city=city,
            state=state,
            logo=logo,
            password=password
        )
        company.save()
        messages.success(request, 'Cadastro realizado com sucesso.')
        return redirect('login')
    return render(request, 'register.html')

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

def list_companies(request):
    companies = Company.objects.all()
    return render(request, 'list_companies.html', {'companies': companies})

def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    return render(request, 'company_detail.html', {'company': company})
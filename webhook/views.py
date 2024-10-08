import os
import json
import requests
from django.conf import settings
from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.contrib.auth import login as auth_login
from django.utils import timezone
from .models import Messages, Company, Products, Reviews, PriceTable, ProductAttribute
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .forms import AlterCompanyForm


WEBHOOK_VERIFY_TOKEN = settings.WEBHOOK_VERIFY_TOKEN
GRAPH_API_TOKEN = settings.GRAPH_API_TOKEN
GOOGLE_API_KEY = settings.GOOGLE_API_KEY

@csrf_exempt
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def chat(request):
    return render(request, 'chat.html')

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

def dashboard_a(request):
    return render(request, 'dashboard_a.html')

def dashboard_b(request):
    return render(request, 'dashboard_b.html')

def new_sidebar(request):
    return render(request, 'new_sidebar.html')

def products(request):
    products = Products.objects.all().order_by('codigo')  # Ordenando por 'codigo' ou outro campo relevante

    # Configurando a paginação
    paginator = Paginator(products, 10)  # 10 produtos por página
    page_number = request.GET.get('page', 1)  # Página padrão é 1 se não for fornecida

    # Garantindo que o número da página seja um inteiro válido
    try:
        page_number = int(page_number)
    except ValueError:
        page_number = 1

    # Garantindo que o número da página não seja menor que 1
    if page_number < 1:
        page_number = 1

    try:
        products = paginator.page(page_number)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    # Gerar a lista de números de página para o template
    current_page = products.number
    start_page = max(current_page - 4, 1)
    end_page = min(current_page + 5, paginator.num_pages)
    pages = list(range(start_page, end_page + 1))

    context = {
        'products': products, 
        'paginator': paginator, 
        'pages': pages, 
        'current_page': current_page
    }

    # Passando os produtos, o paginador e a lista de páginas para o template
    return render(request, 'products.html', context)

def products_list_detail(request):
    products = Products.objects.all()  # Recupera todos os produtos do banco de dados

    # Configurando a paginação
    paginator = Paginator(products, 10)  # 10 produtos por página
    page_number = request.GET.get('page', 1)  # Página padrão é 1 se não for fornecida

    # Garantindo que o número da página seja um inteiro válido
    try:
        page_number = int(page_number)
    except ValueError:
        page_number = 1

    # Garantindo que o número da página não seja menor que 1
    if page_number < 1:
        page_number = 1

    try:
        products = paginator.page(page_number)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    # Gerar a lista de números de página para o template
    current_page = products.number
    start_page = max(current_page - 4, 1)
    end_page = min(current_page + 5, paginator.num_pages)
    pages = list(range(start_page, end_page + 1))

    for product in products:
        price_info = product.prices.first()  # Assumindo que há um PriceTable por produto.
        if price_info:
            product.preco_original = price_info.original_price
            product.preco_desconto = price_info.discount_price
            product.desconto = price_info.discount_percentage
        else:
            product.preco_original = None
            product.preco_desconto = None
            product.desconto = None

    context = {
        'products': products, 
        'paginator': paginator, 
        'pages': pages, 
        'current_page': current_page
    }

    return render(request, 'products_list_detail.html', context)

def products_group_detail(request):
    products = Products.objects.all()  # Recupera todos os produtos do banco de dados

    # Configurando a paginação
    paginator = Paginator(products, 10)  # 10 produtos por página
    page_number = request.GET.get('page', 1)  # Página padrão é 1 se não for fornecida

    # Garantindo que o número da página seja um inteiro válido
    try:
        page_number = int(page_number)
    except ValueError:
        page_number = 1

    # Garantindo que o número da página não seja menor que 1
    if page_number < 1:
        page_number = 1

    try:
        products = paginator.page(page_number)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    # Gerar a lista de números de página para o template
    current_page = products.number
    start_page = max(current_page - 4, 1)
    end_page = min(current_page + 5, paginator.num_pages)
    pages = list(range(start_page, end_page + 1))

    for product in products:
        price_info = product.prices.first()  # Assumindo que há um PriceTable por produto.
        if price_info:
            product.preco_original = price_info.original_price
            product.preco_desconto = price_info.discount_price
            product.desconto = price_info.discount_percentage
        else:
            product.preco_original = None
            product.preco_desconto = None
            product.desconto = None

    context = {
        'products': products, 
        'paginator': paginator, 
        'pages': pages, 
        'current_page': current_page
    }

    return render(request, 'products_group_detail.html', context)

@csrf_exempt
def product(request, codigo):
    # Obtém o produto pelo código
    product = get_object_or_404(Products, codigo=codigo)
    
    # Obtém os reviews associados ao produto
    reviews = Reviews.objects.filter(product=product)
    
    # Obtém os preços associados ao produto
    prices = PriceTable.objects.filter(product=product)
    
    # Obtém os atributos associados ao produto
    attributes = ProductAttribute.objects.filter(product=product)
    
    # Calcula os preços
    discount_price = None
    original_price = None
    discount_percentage = None
    
    if prices.exists():
        # Usamos o primeiro preço para exibir
        price = prices.first()
        discount_price = price.discount_price
        original_price = price.original_price
        discount_percentage = price.discount_percentage
    
    # Renderiza o template com os dados necessários
    context = {
        'product': product,
        'reviews': reviews,
        'prices': prices,
        'attributes': attributes,
        'discount_price': discount_price,
        'original_price': original_price,
        'discount_percentage': discount_percentage,
    }
    
    return render(request, 'product.html', context)

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

@csrf_exempt
def rate_product(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            produto_id = data.get('produto_id')
            rating = data.get('rating')

            if not produto_id or not rating:
                return JsonResponse({'success': False, 'message': 'Dados insuficientes.'})

            produto = Products.objects.get(id=produto_id)
            user = request.user

            review = Reviews.objects.create(
                product=produto,
                author=user,
                rating=rating,
                comment=data.get('comment', '')
            )

            produto.update_rating()

            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})

    return JsonResponse({'success': False, 'message': 'Método não permitido.'})

@csrf_exempt
def add_review(request, product_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        rating = data.get('rating')
        comment = data.get('comment')

        try:
            product = Products.objects.get(id=product_id)
            
            # Usar a empresa autenticada
            user_id = request.session.get('user_id')
            user = Company.objects.get(id=user_id) if user_id else None

            Reviews.objects.create(
                product=product,
                rating=rating,
                comment=comment,
                author=user
            )
            
            # Atualizar rating do produto
            product.update_rating()
            
            return JsonResponse({'success': True})
        except Company.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Usuário não encontrado'})
        except Products.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Produto não encontrado'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})

    return JsonResponse({'success': False, 'message': 'Método inválido'})

def get_reviews(request, product_id):
    try:
        product = Products.objects.get(id=product_id)
        reviews = Reviews.objects.filter(product=product).values('rating', 'comment', 'author__username', 'created_at')
        return JsonResponse({'success': True, 'reviews': list(reviews)})
    except Products.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Produto não encontrado'})
    
def companies(request):
    # Obter filtros e número da página da requisição
    name_filter = request.GET.get('name', '')
    page_number = request.GET.get('page', 1)  # Página padrão é 1 se não for fornecida

    # Consultar as empresas, aplicando filtro se necessário
    companies = Company.objects.all()
    if name_filter:
        companies = companies.filter(company_name__icontains=name_filter)

    # Configurar a paginação
    paginator = Paginator(companies, 10)  # 10 empresas por página

    # Garantindo que o número da página seja um inteiro válido
    try:
        page_number = int(page_number)
    except ValueError:
        page_number = 1

    try:
        page = paginator.page(page_number)
    except PageNotAnInteger:
        page = paginator.page(1)
    except EmptyPage:
        page = paginator.page(paginator.num_pages)

    # Preparar dados das empresas para o contexto
    companies = []
    for company in page.object_list:
        company_data = {
            'id': company.id,
            'company_name': company.company_name,
            'cnpj': company.cnpj,
            'address': company.address,
            'phone': company.phone,
            'email': company.email,
            'logo': company.logo.url if company.logo and hasattr(company.logo, 'url') else '/static/img/placeholder.png'
        }
        companies.append(company_data)

    # Contexto para o template
    context = {
        'companies': companies,
        'paginator': paginator,
        'current_page': page.number,
        'totalPages': paginator.num_pages,
        'name_filter': name_filter,
    }

    return render(request, 'companies.html', context)

def company(request, id):
    company = get_object_or_404(Company, id=id)
    
    if request.method == 'POST':
        form = AlterCompanyForm(request.POST, request.FILES, instance=company)
        if form.is_valid():
            form.save()
            return redirect('companies')  # Redireciona para a lista de empresas após salvar
    else:
        form = AlterCompanyForm(instance=company)

    context = {
        'company': company,
        'states': [
                        ('AC', 'Acre'), 
                        ('AL', 'Alagoas'), 
                        ('AP', 'Amapá'), 
                        ('AM', 'Amazonas'),            
                        ('BA', 'Bahia'), 
                        ('CE', 'Ceará'), 
                        ('DF', 'Distrito Federal'), 
                        ('ES', 'Espírito Santo'),            
                        ('GO', 'Goiás'), 
                        ('MA', 'Maranhão'), 
                        ('MT', 'Mato Grosso'), 
                        ('MS', 'Mato Grosso do Sul'),            
                        ('MG', 'Minas Gerais'), 
                        ('PA', 'Pará'), 
                        ('PB', 'Paraíba'), 
                        ('PR', 'Paraná'),            
                        ('PE', 'Pernambuco'), 
                        ('PI', 'Piauí'), 
                        ('RJ', 'Rio de Janeiro'), 
                        ('RN', 'Rio Grande do Norte'),            
                        ('RS', 'Rio Grande do Sul'), 
                        ('RO', 'Rondônia'), 
                        ('RR', 'Roraima'), 
                        ('SC', 'Santa Catarina'),            
                        ('SP', 'São Paulo'), 
                        ('SE', 'Sergipe'), 
                        ('TO', 'Tocantins')
        ],
        'segments': [
                        ('automotivo', 'Automotivo'),
                        ('alimentos_bebidas', 'Alimentos e Bebidas'),
                        ('farmaceutico', 'Farmacêutico'),
                        ('quimico', 'Químico'),
                        ('textil', 'Têxtil'),
                        ('tecnologia', 'Tecnologia'),
                        ('energia', 'Energia'),
                        ('construcao', 'Construção Civil'),
                        ('metalurgico', 'Metalúrgico'),
                        ('papel_celulose', 'Papel e Celulose'),
                        ('mineracao', 'Mineração'),
                        ('agroindustria', 'Agroindústria'),
                        ('petroquimico', 'Petroquímico'),
                        ('embalagens', 'Embalagens'),
                        ('logistica', 'Logística'),
                        ('vestuario', 'Vestuário e Acessórios Esportivos')
                    ]

    }
    return render(request, 'company.html', context)

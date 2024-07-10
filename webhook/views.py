import os
import json
import requests
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

WEBHOOK_VERIFY_TOKEN = settings.WEBHOOK_VERIFY_TOKEN
GRAPH_API_TOKEN = settings.GRAPH_API_TOKEN

@csrf_exempt
def index(request):
    return render(request, 'index.html')

def verify(request):
    data = json.loads(request.body)

    mode = data.get('hub_mode')
    token = data.get('hub_verify_token')
    challenge = data.get('hub_challenge')
    
    if mode == 'subscribe' and token == WEBHOOK_VERIFY_TOKEN:
        return HttpResponse(challenge, status=200)
    else:
        return HttpResponse('Forbidden', status=403)

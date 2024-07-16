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

@csrf_exempt
def verify(request):
    if request.method == 'GET':
        mode = request.GET.get('hub.mode')
        token = request.GET.get('hub.verify_token')
        challenge = request.GET.get('hub.challenge')

        print(mode)
        if challenge is not None:
            try:
                challenge = int(challenge)
            except ValueError:
                return HttpResponse('Invalid challenge value', status=400)

        if mode == 'subscribe' and token == WEBHOOK_VERIFY_TOKEN:
            return HttpResponse(str(challenge), status=200)
        else:
            return HttpResponse('Forbidden', status=403)
    else:
        return HttpResponse('Method Not Allowed', status=405)

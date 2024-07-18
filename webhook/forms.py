from django import forms
from .models import Company

class RegisterForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['cnpj', 'company_name', 'trade_name', 'responsible_name', 'state_registration', 'instagram',
                  'whatsapp', 'cell_phone', 'phone', 'email', 'confirm_email', 'cep', 'number', 'address',
                  'neighborhood', 'complement', 'city', 'state', 'logo']

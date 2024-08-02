from django import forms
from .models import Company, Review

class RegisterForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['cnpj', 'company_name', 'trade_name', 'responsible_name', 'state_registration', 'instagram',
                  'whatsapp', 'cell_phone', 'phone', 'email', 'confirm_email', 'cep', 'number', 'address',
                  'neighborhood', 'complement', 'city', 'state', 'logo', 'password']


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'comment']
        widgets = {
            'rating': forms.RadioSelect(choices=[(i, i) for i in range(1, 6)]),
            'comment': forms.Textarea(attrs={'rows': 4}),
        }
        labels = {
            'rating': 'Rating',
            'comment': 'Comment',
        }
from django import forms
from .models import Company, Reviews

class AlterCompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['cnpj', 'company_name', 'trade_name', 'responsible_name', 'state_registration', 'instagram',
                  'whatsapp', 'cell_phone', 'phone', 'email', 'confirm_email', 'cep', 'number', 'address',
                  'neighborhood', 'complement', 'city', 'state', 'logo', 'segment']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Customizing form field attributes, if necessary
        self.fields['cnpj'].widget.attrs.update({'placeholder': 'CNPJ'})
        self.fields['company_name'].widget.attrs.update({'placeholder': 'Razão Social'})
        self.fields['trade_name'].widget.attrs.update({'placeholder': 'Nome Fantasia'})
        self.fields['responsible_name'].widget.attrs.update({'placeholder': 'Nome Responsável'})
        self.fields['state_registration'].widget.attrs.update({'placeholder': 'Inscrição Estadual'})
        self.fields['instagram'].widget.attrs.update({'placeholder': '@Instagram'})
        self.fields['cell_phone'].widget.attrs.update({'placeholder': 'Celular'})
        self.fields['phone'].widget.attrs.update({'placeholder': 'Telefone Fixo'})
        self.fields['email'].widget.attrs.update({'placeholder': 'Email'})
        self.fields['confirm_email'].widget.attrs.update({'placeholder': 'Confirme o Email'})
        self.fields['cep'].widget.attrs.update({'placeholder': 'CEP'})
        self.fields['number'].widget.attrs.update({'placeholder': 'Número'})
        self.fields['address'].widget.attrs.update({'placeholder': 'Endereço'})
        self.fields['neighborhood'].widget.attrs.update({'placeholder': 'Bairro'})
        self.fields['complement'].widget.attrs.update({'placeholder': 'Complemento'})
        self.fields['city'].widget.attrs.update({'placeholder': 'Cidade'})
        self.fields['state'].widget.attrs.update({'placeholder': 'Estado'})
        self.fields['segment'].widget.attrs.update({'placeholder': 'Seguimento'})

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        confirm_email = cleaned_data.get('confirm_email')

        if email and confirm_email and email != confirm_email:
            self.add_error('confirm_email', 'Os e-mails não correspondem.')

        password = cleaned_data.get('password')
        if password and len(password) < 8:
            self.add_error('password', 'A senha deve ter pelo menos 8 caracteres.')

        return cleaned_data

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Reviews
        fields = ['rating', 'comment']
        widgets = {
            'rating': forms.RadioSelect(choices=[(i, i) for i in range(1, 6)]),
            'comment': forms.Textarea(attrs={'rows': 4}),
        }
        labels = {
            'rating': 'Rating',
            'comment': 'Comment',
        }

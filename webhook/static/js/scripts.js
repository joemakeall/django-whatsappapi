function openWhatsApp() {
    window.location.href = 'https://wa.me/11985379061';
}
document.addEventListener('DOMContentLoaded', function() {

    function buscarCep() {
        var cep = document.getElementById('cep').value.replace(/\D+/g, ''); // Remove caracteres não numéricos
        
        if (cep.length !== 8) {
            alert('O CEP deve ter 8 dígitos numéricos.');
            return;
        }
    
        var url = `https://viacep.com.br/ws/${cep}/json/`;
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar o CEP. Por favor, verifique o CEP digitado.');
                }
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    throw new Error('CEP não encontrado. Por favor, verifique o CEP digitado.');
                }
                preencherCamposEndereco(data);
            })
            .catch(error => {
                alert(error.message);
                limparCamposEndereco();
            });
    }
    
    function preencherCamposEndereco(data) {
        document.getElementById('address').value = data.logradouro || '';
        document.getElementById('neighborhood').value = data.bairro || '';
        document.getElementById('city').value = data.localidade || '';
        document.getElementById('state').value = data.uf || '';
    }
    
    function limparCamposEndereco() {
        document.getElementById('address').value = '';
        document.getElementById('neighborhood').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
    }

    function validateEmail() {
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirm_email').value;

        if (email !== confirmEmail) {
            alert('Os e-mails não coincidem.');
        }
    }

    function maskPhone(event) {
        var input = event.target;
        var value = input.value.replace(/\D+/g, ''); // Remove caracteres não numéricos
        var masked = '';

        if (value.length > 0) {
            masked += '(' + value.substring(0, 2); // Adiciona o parênteses e DDD
        }
        if (value.length > 2) {
            masked += ') ' + value.substring(2, 6); // Adiciona os primeiros 4 dígitos
        }
        if (value.length > 6) {
            masked += '-' + value.substring(6, 10); // Adiciona os últimos 4 dígitos
        }

        input.value = masked;
    }

    function maskCellPhone(event) {
        var input = event.target;
        var value = input.value.replace(/\D+/g, ''); // Remove caracteres não numéricos
        var masked = '';

        if (value.length > 0) {
            masked += '(' + value.substring(0, 2); // Adiciona o parênteses e DDD
        }
        if (value.length > 2) {
            masked += ') ' + value.substring(2, 7); // Adiciona os primeiros 5 dígitos
        }
        if (value.length > 7) {
            masked += '-' + value.substring(7, 11); // Adiciona os últimos 4 dígitos
        }

        input.value = masked;
    }

    function maskCep(event) {
        var input = event.target;
        var value = input.value.replace(/\D+/g, ''); // Remove caracteres não numéricos
        var masked = '';

        if (value.length > 0) {
            masked += value.substring(0, 5); // Adiciona os primeiros 5 dígitos
        }
        if (value.length > 5) {
            masked += '-' + value.substring(5, 8); // Adiciona os últimos 3 dígitos
        }

        input.value = masked;
    }

    function maskCnpj(event) {
        var input = event.target;
        var value = input.value.replace(/\D+/g, ''); // Remove caracteres não numéricos
        var masked = '';

        if (value.length > 0) {
            masked += value.substring(0, 2); // Adiciona os primeiros 2 dígitos
        }
        if (value.length > 2) {
            masked += '.' + value.substring(2, 5); // Adiciona os 3 próximos dígitos
        }
        if (value.length > 5) {
            masked += '.' + value.substring(5, 8); // Adiciona os 3 próximos dígitos
        }
        if (value.length > 8) {
            masked += '/' + value.substring(8, 12); // Adiciona os 4 próximos dígitos
        }
        if (value.length > 12) {
            masked += '-' + value.substring(12, 14); // Adiciona os 2 últimos dígitos
        }

        input.value = masked;
    }
    
    document.getElementById('cep').addEventListener('input', maskCep);
    document.getElementById('cep').addEventListener('blur', buscarCep);
    document.getElementById('confirm_email').addEventListener('blur', validateEmail);
    document.getElementById('cell_phone').addEventListener('input', maskCellPhone);
    document.getElementById('phone').addEventListener('input', maskPhone);
    document.getElementById('cnpj').addEventListener('input', maskCnpj);

    // Adiciona event listener para o ícone do WhatsApp
    var whatsappIcon = document.querySelector('.whatsapp-icon');
    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', openWhatsApp);
    }
});

function openWhatsApp() {
    window.location.href = 'https://wa.me/SeuNumeroDeWhatsApp';
}

document.addEventListener('DOMContentLoaded', function () {
    const cepInput = document.getElementById('cep');

    cepInput.addEventListener('blur', function () {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!('erro' in data)) {
                        document.getElementById('address').value = data.logradouro;
                        document.getElementById('neighborhood').value = data.bairro;
                        document.getElementById('city').value = data.localidade;
                        document.getElementById('state').value = data.uf;
                    } else {
                        alert('CEP não encontrado.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar o CEP:', error);
                });
        } else {
            alert('CEP inválido.');
        }
    });
});

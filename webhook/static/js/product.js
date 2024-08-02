document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabs = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and tab panes
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to the clicked tab and corresponding pane
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            if (tabId) {
                const activePane = document.getElementById(tabId);
                if (activePane) {
                    activePane.classList.add('active');
                    if (tabId === 'reviews') {
                        loadReviews();  // Carregar avaliações quando a aba for ativada
                    }
                }
            }
        });
    });

    // Função para carregar as avaliações
    function loadReviews() {
        const productId = document.querySelector('input[name="product_id"]').value;  // Supondo que você tem um campo oculto com o ID do produto
        fetch(`/get-reviews/${productId}/`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const reviewsList = document.getElementById('reviews-list');
                    reviewsList.innerHTML = '';  // Limpar avaliações existentes
                    data.reviews.forEach(review => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `
                            <strong>${review.author_username || 'Anônimo'}</strong> (${review.created_at}):<br>
                            Rating: ${'⭐'.repeat(review.rating)}<br>
                            ${review.comment}
                        `;
                        reviewsList.appendChild(listItem);
                    });
                } else {
                    console.error('Erro ao carregar avaliações:', data.message);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar avaliações:', error);
            });
    }

    // Thumbnail click to change main image
    const thumbnails = document.querySelectorAll('.carousel-image');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = thumbnail.src;
        });
    });

    // Função para atualizar as estrelas selecionadas
    const stars = document.querySelectorAll('.rating .fa-star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });

        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            stars.forEach(s => {
                s.classList.remove('hover');
            });
        });
    });

    // Funções para incrementar e decrementar a quantidade
    const incrementButton = document.querySelector('.btn-increment');
    const decrementButton = document.querySelector('.btn-decrement');
    const quantityInput = document.querySelector('.quantity-input');

    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    decrementButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Função para adicionar ao carrinho (placeholder)
    const addToCartButton = document.querySelector('.btn-primary');
    addToCartButton.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
        // Aqui você pode adicionar a lógica para adicionar ao carrinho
    });

    // Função para enviar a avaliação
    const reviewForm = document.querySelector('form');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productId = reviewForm.action.split('/').slice(-2, -1)[0];
        const selectedStars = document.querySelectorAll('.rating .fa-star.selected').length;
        const comment = document.querySelector('textarea[name="comment"]').value;

        fetch(`/add_review/${productId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: JSON.stringify({
                rating: selectedStars,
                comment: comment
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Avaliação enviada com sucesso!');
                window.location.reload();
            } else {
                alert('Erro ao enviar avaliação: ' + data.message);
            }
        })
        .catch(error => {
            alert('Erro ao enviar avaliação: ' + error);
        });
    });
});

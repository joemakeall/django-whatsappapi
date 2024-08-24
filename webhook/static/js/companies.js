document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const nameFilterInput = document.getElementById('nameFilter');

    filterButton.addEventListener('click', function() {
        const nameFilter = nameFilterInput.value.trim();

        if (nameFilter) {
            // Se o campo de filtro não estiver vazio, adicione o filtro à URL
            let url = `?name=${encodeURIComponent(nameFilter)}`;
            window.location.href = url;
        } else {
            // Se o campo de filtro estiver vazio, recarregue a página sem o filtro
            window.location.href = window.location.pathname; // Recarrega a página na URL base, sem parâmetros
        }
    });

    // Opção extra: Permitir recarregar sem filtro ao pressionar Enter no campo de input
    nameFilterInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previne o comportamento padrão do Enter (se necessário)
            filterButton.click(); // Dispara o clique no botão de filtro
        }
    });
});

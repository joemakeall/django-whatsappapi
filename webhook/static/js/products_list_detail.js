document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filterButton').addEventListener('click', function() {
        const nameFilter = document.getElementById('nameFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const itemsPerPage = document.getElementById('itemsPerPage').value;
        const queryString = `?name=${nameFilter}&status=${statusFilter}&items_per_page=${itemsPerPage}`;

        window.location.href = queryString;
    });

    // Manter o estado do filtro ao recarregar a página
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('name')) {
        document.getElementById('nameFilter').value = urlParams.get('name');
    }
    if (urlParams.get('status')) {
        document.getElementById('statusFilter').value = urlParams.get('status');
    }
    if (urlParams.get('items_per_page')) {
        document.getElementById('itemsPerPage').value = urlParams.get('items_per_page');
    }
});

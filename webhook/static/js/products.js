document.addEventListener('DOMContentLoaded', function () {
    const nameFilter = document.getElementById('nameFilter');
    const statusFilter = document.getElementById('statusFilter');
    const filterButton = document.getElementById('filterButton');
    const tableRows = document.querySelectorAll('#productTable tbody tr');

    function filterProducts() {
        const nameValue = nameFilter.value.toLowerCase();
        const statusValue = statusFilter.value;

        tableRows.forEach(row => {
            const productName = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
            const productStatus = row.querySelector('td:nth-child(7)').textContent.toLowerCase();

            const matchesName = productName.includes(nameValue);
            const matchesStatus = (statusValue === 'all') || (productStatus === statusValue.toLowerCase());

            if (matchesName && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    filterButton.addEventListener('click', filterProducts);

    // Opcional: aplicar filtro enquanto o usuário digita
    //nameFilter.addEventListener('input', filterProducts);
    //statusFilter.addEventListener('change', filterProducts);
});

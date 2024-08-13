document.addEventListener('DOMContentLoaded', function() {
    const nameFilter = document.getElementById('nameFilter');
    const filterButton = document.getElementById('filterButton');
    const companyTableBody = document.querySelector('#companyTable tbody');
    const prevPageButton = document.getElementById('prevPage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const nextPageButton = document.getElementById('nextPage');
    const paginationNumbers = document.getElementById('paginationNumbers');
    let currentPage = 1;
    let totalPages = 1;
    const itemsPerPage = 10;

    function fetchCompanies(page = 1) {
        fetch(`/companies?page=${page}&name=${nameFilter.value}`)
            .then(response => response.json())
            .then(data => {
                totalPages = data.totalPages;
                renderTable(data.companies);
                renderPagination(data.totalPages, page);
            });
    }

    function fetchCompanyDetails(companyId) {
        fetch(`/company/${companyId}`)
            .then(response => response.json())
            .then(data => {
                // Exemplo de como você pode usar os dados da empresa
                // Aqui você pode mostrar os detalhes da empresa em um modal ou outra página
                console.log(data);
            });
    }

    function renderTable(companies) {
        companyTableBody.innerHTML = '';
        companies.forEach(company => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox"></td>
                <td><a href="#" onclick="fetchCompanyDetails(${company.id})"><img src="${company.logo}" alt="${company.company_name}" onerror="this.onerror=null;this.src='/static/img/placeholder.png';"></a></td>
                <td>${company.company_name}</td>
                <td>${company.cnpj}</td>
                <td>${company.address}</td>
                <td>${company.phone}</td>
                <td>${company.email}</td>
                <td class="actions">
                    <a href="#" onclick="fetchCompanyDetails(${company.id})"><i class="fas fa-eye" title="Visualizar"></i></a>
                    <a href="/company/${company.id}/edit"><i class="fas fa-pencil-alt" title="Alterar"></i></a>
                    <i class="fas fa-trash-alt" title="Excluir" onclick="confirmDeletion(${company.id})"></i>
                </td>
            `;
            companyTableBody.appendChild(row);
        });
    }

    function renderPagination(totalPages, currentPage) {
        paginationNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('pagination-button');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => fetchCompanies(i));
            paginationNumbers.appendChild(button);
        }
    }

    function confirmDeletion(companyId) {
        if (confirm('Tem certeza de que deseja excluir esta empresa?')) {
            fetch(`/companies/${companyId}/delete`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        alert('Empresa excluída com sucesso.');
                        fetchCompanies(currentPage); // Atualiza a lista
                    } else {
                        alert('Erro ao excluir a empresa.');
                    }
                });
        }
    }

    filterButton.addEventListener('click', () => fetchCompanies(1));
    prevPageButton.addEventListener('click', () => fetchCompanies(1));
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            fetchCompanies(currentPage - 1);
        }
    });
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            fetchCompanies(currentPage + 1);
        }
    });
    nextPageButton.addEventListener('click', () => fetchCompanies(totalPages));

    fetchCompanies(); // Carrega a página inicial
});

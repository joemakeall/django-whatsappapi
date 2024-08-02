document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade da barra lateral
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle i');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            toggleButton.classList.replace('fa-chevron-right', 'fa-chevron-left');
        } else {
            toggleButton.classList.replace('fa-chevron-left', 'fa-chevron-right');
        }
    });
});

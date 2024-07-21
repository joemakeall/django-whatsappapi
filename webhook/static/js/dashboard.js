document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    openBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        content.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        content.classList.remove('active');
    });
});

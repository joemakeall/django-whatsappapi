document.addEventListener('DOMContentLoaded', function() {
    var openBtn = document.querySelector('.open-btn');
    var closeBtn = document.querySelector('.close-btn');
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    openBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        content.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        content.classList.remove('active');
    });
});

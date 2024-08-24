document.addEventListener('DOMContentLoaded', function() {

    // Fixed Menu
    var secondaryNav = document.querySelector('.cd-secondary-nav');
    var secondaryNavTopPosition = secondaryNav.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > secondaryNavTopPosition) {
            secondaryNav.classList.add('is-fixed');
        } else {
            secondaryNav.classList.remove('is-fixed');
        }
    });

    // Simple Lightbox
    var galleryLinks = document.querySelectorAll('.gallery a');
    var lightbox = new SimpleLightbox('.gallery a');

    lightbox.on('show.simplelightbox', function() {
        console.log('Requested for showing');
    }).on('shown.simplelightbox', function() {
        console.log('Shown');
    }).on('close.simplelightbox', function() {
        console.log('Requested for closing');
    }).on('closed.simplelightbox', function() {
        console.log('Closed');
    }).on('change.simplelightbox', function() {
        console.log('Requested for change');
    }).on('next.simplelightbox', function() {
        console.log('Requested for next');
    }).on('prev.simplelightbox', function() {
        console.log('Requested for prev');
    }).on('nextImageLoaded.simplelightbox', function() {
        console.log('Next image loaded');
    }).on('prevImageLoaded.simplelightbox', function() {
        console.log('Prev image loaded');
    }).on('changed.simplelightbox', function() {
        console.log('Image changed');
    }).on('nextDone.simplelightbox', function() {
        console.log('Image changed to next');
    }).on('prevDone.simplelightbox', function() {
        console.log('Image changed to prev');
    }).on('error.simplelightbox', function(e) {
        console.log('No image found, go to the next/prev');
        console.log(e);
    });
});

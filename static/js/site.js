document.addEventListener("DOMContentLoaded", function () {
    // import SimpleLightbox js and initialize if a gallery exists on page
    if (document.querySelector('.gallery') !== null) {
        import('./modules/simple-lightbox.mjs')
            .then((Lightbox) => {
                new Lightbox.SimpleLightbox(document.querySelectorAll(".gallery-item a"));
            });
    }
});
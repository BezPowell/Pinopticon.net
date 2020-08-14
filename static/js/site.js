document.addEventListener("DOMContentLoaded", function () {
    // import SimpleLightbox js and initialize if a gallery exists on page
    if (document.querySelector('.image-gallery') !== null) {
        import('./modules/lightbox.mjs')
            .then((Module) => {
               Module.initializeLightbox(".image-gallery", ".gallery-item a");
            });
    }
});
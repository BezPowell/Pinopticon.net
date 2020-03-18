import * as Navigation from './modules/navigation.mjs';

document.addEventListener("DOMContentLoaded", function () {
    Navigation.init('site-navigation');

    // import SimpleLightbox js and initialize if a gallery exists on page
    if (document.querySelector('.gallery') !== null) {
        import('./modules/simple-lightbox.mjs')
            .then((Lightbox) => {
                new Lightbox.SimpleLightbox(document.querySelectorAll(".gallery-item a"));
            });
    }
});
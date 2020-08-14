class Lightbox {
    constructor(container_string, item_string) {
        this.container_string = container_string;
        this.item_string = item_string;
        this.galleries = [];
    }

    openLightbox(gallery, item) {
        let me = this;
        let dialog = document.querySelector("#lightbox");
        let image = dialog.querySelector("#lightbox-img");
        let position_text = dialog.querySelector(".number-text");

        let alt = this.galleries[gallery].get(item).alt;
        let position = this.galleries[gallery].get(item).pos;

        //Change image src and alt
        image.src = item;
        image.alt = alt;

        // Change position text
        let length = this.galleries[gallery].size;
        position_text.textContent = `Image  ${position + 1} of ${length}.`;

        //Delete old buttons
        let old_buttons = dialog.querySelectorAll(".control")
        old_buttons.forEach((item) => {
            item.remove();
        });

        //Add buttons
        let keys = Array.from(this.galleries[gallery].keys());
        if (position > 0) {
            let prev_button = document.createElement("button");
            prev_button.classList.add("prev-button");
            prev_button.classList.add("control");
            prev_button.textContent = "back";
            dialog.appendChild(prev_button);

            //Add event listener
            prev_button.addEventListener('click', function (event) {
                event.preventDefault();
                let item_path = keys[position - 1];
                let gallery_path = gallery;
                me.openLightbox(gallery_path, item_path);
            });
        }
        if (position < length - 1) {
            let next_button = document.createElement("button");
            next_button.classList.add("next-button");
            next_button.classList.add("control");
            next_button.textContent = "next";
            dialog.appendChild(next_button);

            //Add event listener
            next_button.addEventListener('click', function (event) {
                event.preventDefault();
                let item_path = keys[position + 1];
                let gallery_path = gallery;
                me.openLightbox(gallery_path, item_path);
            });
        }

        //Open dialog if not already open
        if (!dialog.hasAttribute("open")) {
            dialog.showModal();
        }
    }
}

function initializeLightbox(container_string, item_string) {
    addDialog();
    let lightbox = new Lightbox(container_string, item_string);
    setupGalleries(lightbox);
}

function addDialog() {
    // create dialog
    let dialog = document.createElement("dialog");
    dialog.id = "lightbox";
    dialog.classList.add('lightbox');

    // add close form
    let form = document.createElement("form");
    form.method = "dialog";
    form.classList.add('close-form');
    let close_button = document.createElement("button");
    close_button.textContent = "close";
    form.appendChild(close_button);
    dialog.appendChild(form);

    // add image
    let image = document.createElement("img");
    image.id = "lightbox-img";
    dialog.appendChild(image);

    // add position text
    let text = document.createElement("p");
    text.textContent = "Image x of x.";
    text.classList.add('number-text');
    dialog.appendChild(text);

    // add the newly created element and its content into the DOM 
    let footer = document.querySelector(".site-footer");
    footer.appendChild(dialog);
}

function setupGalleries(lightbox) {
    //Setup list of containers
    let galleries = [];
    let containers = document.querySelectorAll(lightbox.container_string);

    containers.forEach((element, index) => {
        let item_list = new Map();
        let items = element.querySelectorAll(lightbox.item_string);

        // Iterate over each item in container and add to an associative array
        // key = link href and value is image alt text
        items.forEach((item, i) => {
            item.dataset.gallery = index;
            let alt = item.querySelector('img').alt;
            item_list.set(item.href.toString(), { alt: alt, pos: i });

            item.addEventListener('click', function (event) {
                event.preventDefault();
                let item_path = this.href;
                let gallery_path = this.dataset.gallery;
                lightbox.openLightbox(gallery_path, item_path);
            });
        });

        galleries.push(item_list);
    });

    lightbox.galleries = galleries;
}

export { initializeLightbox };
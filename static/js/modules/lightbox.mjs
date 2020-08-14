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
            let direction = -1;
            let item_path = keys[position + direction];
            this.createButton(item_path, gallery, direction)

        }
        if (position < length - 1) {
            let direction = 1;
            let item_path = keys[position + direction];
            this.createButton(item_path, gallery, direction)
        }

        //Open dialog if not already open
        if (!dialog.hasAttribute("open")) {
            dialog.showModal();
        }
    }

    createButton(path, gallery, direction) {
        let me = this;
        let name = (direction == 1) ? "next" : "prev";
        let button = document.createElement("button");
        let dialog = document.querySelector("#lightbox");
        button.classList.add(`${name}-button`);
        button.classList.add("control");
        button.textContent = name;
        dialog.appendChild(button);

        //Add event listener
        button.addEventListener('click', function (event) {
            event.preventDefault();
            me.openLightbox(gallery, path);
        });
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
    document.body.appendChild(dialog);
}

function setupGalleries(lightbox) {
    //Setup list of containers
    let galleries = [];
    let containers = document.querySelectorAll(lightbox.container_string);

    containers.forEach((element, index) => {
        let item_list = new Map();
        let items = element.querySelectorAll(lightbox.item_string);

        // Iterate over each item in container and add to a map
        items.forEach((item, i) => {
            item.dataset.gallery = index;
            let alt = item.querySelector('img').alt;
            item_list.set(item.href.toString(), { alt: alt, pos: i });

            item.addEventListener('click', function (event) {
                event.preventDefault();
                lightbox.openLightbox(this.dataset.gallery, this.href);
            });
        });

        galleries.push(item_list);
    });

    lightbox.galleries = galleries;
}

export { initializeLightbox };
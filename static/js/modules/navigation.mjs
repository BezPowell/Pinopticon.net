/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens
 */

 export function init(containerId) {
    let breakpoint = 992;
    let currentSize = window.innerWidth;
    let oldSize = currentSize;

    if (currentSize < breakpoint) {
        add(containerId);
    }

    window.addEventListener('resize', function () {
        currentSize = window.innerWidth;

        // If current resize has brought screen size over breakpoint
        if (currentSize > breakpoint && oldSize <= breakpoint) {
            remove(containerId);
        }

        // Else if current resize has brought screen size under breakpoint
        else if (currentSize < breakpoint && oldSize >= breakpoint) {
            add(containerId);
        }

        //Reset oldSize for next check
        oldSize = currentSize;
    }, false);
 }

 function add(containerId) {
	// get the button and menu nodes
	let nav = document.getElementById(containerId);
    let button = nav.querySelector('button');
    let menu = button.nextElementSibling;

    // set initial (closed menu) states
    nav.classList.add("js");
	button.setAttribute('aria-expanded', 'false');
	button.setAttribute('aria-controls', menu.id);
    button.hidden = false;
    menu.hidden = true;

    button.addEventListener('click', function() {
        // toggle menu visibility
        let expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        menu.hidden = expanded;
    });
 }

 function remove(containerId) {
	// get the button and menu nodes
	let nav = document.getElementById(containerId);
    let button = nav.querySelector('button');
    let menu = button.nextElementSibling;

    // Remove attributes from elements
    nav.classList.remove("js");
	button.removeAttribute('aria-expanded');
	button.removeAttribute('aria-controls');
    button.hidden = true;
    menu.hidden = false;
 }
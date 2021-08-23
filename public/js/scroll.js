const stickyHeader = document.getElementById("sticky-header");
const stickyLink = document.getElementsByClassName("nav-link");

window.addEventListener("scroll", (event) => {
    if (this.scrollY > 100) {
        stickyHeader.setAttribute("style", `
            background: rgba(36, 38, 41, 0.5);
            transition: all 1000ms;
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 5;
        `);
    } else {
        stickyHeader.removeAttribute("style");
    }
});


/*
    } else if (scroll > 3950 < 4495) {
        stickyHeader.setAttribute("style", `
            background: rgba(22, 22, 26, 0.5);
            transition: all 1000ms;
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 5;
        `);
    } else if (scroll > 4495) {
        stickyHeader.setAttribute("style", `
        background: rgba(36, 38, 41, 0.5);
        transition: all 1000ms;
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 5;
    `);
*/
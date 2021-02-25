//hamburger menu 

let hamburgerToggle = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu')

hamburgerToggle.addEventListener('click', () => {

    hamburgerToggle.classList.toggle('hamburger-close');
    mobileMenu.classList.toggle('mobile-menu-active');

})

// to-the-top icon

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let position = 1082;

    if (currentScrollPos >= position) {
        document.getElementById("stickhome_img").style.opacity = 1;
        document.getElementById("stickhome_img").style.visibility = 'visible';
        document.getElementById("stickhome_img").style.top = '50%';
    } else {
        document.getElementById("stickhome_img").style.opacity = 0;
        document.getElementById("stickhome_img").style.visibility = 'hidden';
        document.getElementById("stickhome_img").style.top = '0em';
    }
}
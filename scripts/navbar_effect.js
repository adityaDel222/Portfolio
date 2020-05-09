window.onscroll = () => {
    const navbar = document.getElementsByClassName('nav-bar')[0];
    const navbar_links = document.getElementsByClassName('nav-bar-links')[0].childNodes;
    if ( window.pageYOffset > 100 ) {
        navbar.classList.add('nav-bar-1');
        for(let i = 1;i < navbar_links.length; i += 2) {
            navbar_links[i].classList.add('nav-bar-links-1');
        }
    } else {
        navbar.classList.remove('nav-bar-1');
        for(let i = 1;i < navbar_links.length; i += 2) {
            navbar_links[i].classList.remove('nav-bar-links-1');
        }
    }
}
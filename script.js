// icono navbar
let menuIcon = document.querySelector('#icono-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
}

// seccion de scroll
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll =  () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // activar links de nabvar
            navlinks.forEach(links => {
                links.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    });
    // encabezado fijo
    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remover navbar cuando clickaea un link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('activo');

}
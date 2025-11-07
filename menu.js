//JS PARA EL MENU RESPONSIVE CUANDO SE VE EN MOVIL O TABLET

const navResponsive = document.querySelector('.nav-responsive');
const navMenu = document.querySelector('.contenedor-header header ul');
const navLinks = document.querySelectorAll('.contenedor-header header ul li a');

// Abrir/cerrar menú al hacer click en hamburguesa
navResponsive.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un link (solo en móvil)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('active');
    }
  });
});
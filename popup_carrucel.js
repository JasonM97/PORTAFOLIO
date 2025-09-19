
// Calse del modelo del carrusel
class ModalCarousel {
  constructor(container, interval = 2000) {
    this.container = container;
    this.images = this.container.querySelectorAll('.carousel-image');
    this.index = 0;
    this.timer = null;
    this.interval = interval;
    this.showImage(this.index);
  }
 // Muestra la imagen en el índice dado
  showImage(i) {
    this.images.forEach(img => img.style.display = 'none');
    this.images[i].style.display = 'block';
  }
// Muestra la siguiente imagen
  next() {
    this.index = (this.index + 1) % this.images.length;
    this.showImage(this.index);
  }
// Muestra la imagen anterior
  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    this.showImage(this.index);
  }
// Inicia el autoplay
  start() {
    this.stop(); // evitar duplicados
    this.timer = setInterval(() => this.next(), this.interval);
  }
// Detiene el autoplay
  stop() {
    if (this.timer) clearInterval(this.timer);
  }
}

// Inicializar carruseles y modales
const modals = document.querySelectorAll('.modal');
const modalCarousels = {};

// Configurar cada modal con su carrusel
modals.forEach(modal => {
  const carouselContainer = modal.querySelector('.carousel-modal');
  if (!carouselContainer) return;

  const carousel = new ModalCarousel(carouselContainer);
  modalCarousels[modal.id] = carousel;

  // Botones prev/next
  modal.querySelector('.prev').addEventListener('click', () => carousel.prev());
  modal.querySelector('.next').addEventListener('click', () => carousel.next());

  // Cerrar con la X
  modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
    carousel.stop();
  });

  // Cerrar clic fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      carousel.stop();
    }
  });
});

// Abrir modal
function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'flex';
  modalCarousels[id].start(); // iniciar autoplay solo cuando está abierto
}

document.addEventListener("DOMContentLoaded", () => {
  class ModalCarousel {
    constructor(container, interval = 2000) {
      this.container = container;
      this.images = container.querySelectorAll('.carousel-image');
      this.index = 0;
      this.timer = null;
      this.interval = interval;
      this.showImage(this.index);
    }

    showImage(i) {
      this.images.forEach(img => img.style.display = 'none');
      this.images[i].style.display = 'block';
    }

    next() {
      this.index = (this.index + 1) % this.images.length;
      this.showImage(this.index);
    }

    prev() {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
      this.showImage(this.index);
    }

    start() {
      this.stop();
      this.timer = setInterval(() => this.next(), this.interval);
    }

    stop() {
      if (this.timer) clearInterval(this.timer);
      this.timer = null;
    }
  }

  // ===============================
  //   Inicialización de modales
  // ===============================
  const modals = document.querySelectorAll('.modal');
  const modalCarousels = {};

modals.forEach(modal => {
    const carouselContainer = modal.querySelector(".carousel-modal");
    let carousel = null;

    // Crear carrusel si existe contenedor
    if (carouselContainer) {
      carousel = new ModalCarousel(carouselContainer);
      modalCarousels[modal.id] = carousel;

      const prevBtn = carouselContainer.querySelector(".prev");
      const nextBtn = carouselContainer.querySelector(".next");
      if (prevBtn) prevBtn.addEventListener("click", () => carousel.prev());
      if (nextBtn) nextBtn.addEventListener("click", () => carousel.next());
    }

    // Botón cerrar (X)
    const closeBtn = modal.querySelector(".close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        if (carousel) carousel.stop();
        const video = modal.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
        if (carousel) carousel.stop();
        const video = modal.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  });

  // ===============================
  //   Funciones globales
  // ===============================

  // Abrir modal
  window.abrirModal = function(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    // Si el modal no tiene carrusel, no intentes hacer start()
    if (modalCarousels[id]) modalCarousels[id].start();
  };

  // Cerrar modal
  window.cerrarModal = function(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    modalCarousels[id].stop();
  };
});

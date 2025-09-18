let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const visibleItems = 3; // Número de imágenes visibles
const totalItems = slides.length;


function showSlide(index) {
    if (index > totalItems - visibleItems) {
        currentIndex = 0; // vuelve al inicio
    } else if (index < 0) {
        currentIndex = totalItems - visibleItems; // salta al final
    } else {
        currentIndex = index;
    }

    const moveX = -(currentIndex * (100 / visibleItems));
    document.querySelector('.carousel-slide').style.transform = `translateX(${moveX}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Opcional: Auto deslizar
setInterval(() => {
    moveSlide(1);
}, 5000); // Cambia cada 5 segundos

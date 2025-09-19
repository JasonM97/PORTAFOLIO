// Función para abrir modal
function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";

  // Cerrar al hacer click en la X
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar al hacer click fuera del contenido
  window.addEventListener('click', function handler(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      window.removeEventListener('click', handler); // eliminar el listener
    }
  });
}

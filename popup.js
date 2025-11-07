// Abrir modal
function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
}

//Cerrar modal
function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";
}

// Cerrar si se hace clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

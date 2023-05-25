
const formEnviarComentario = document.getElementById('formEnviarComentario');

formEnviarComentario.addEventListener("submit", validarFormularioAgregarComic);
function validarFormularioAgregarComic(event) {
    if (!formEnviarComentario.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    formEnviarComentario.classList.add('was-validated');
    
}
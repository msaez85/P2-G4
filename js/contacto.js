import { validarFormulario, loginUsuario, cargarPaginaUsuario } from '../helpers/help.js';

const formEnviarComentario = document.getElementById('formEnviarComentario'),
  btnEnviarMensaje = document.getElementById('enviarComentario'),
  formIniciarSesion = document.getElementById('formIniciarSesion'); 

  /**Validamos el form de iniciar sesion**/
  formIniciarSesion.addEventListener('submit', validarFormulariInciarSesion)
  function validarFormulariInciarSesion(event){
    if (!formIniciarSesion.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      formIniciarSesion.classList.add('was-validated');
    } else{
      loginUsuario(event);
      window.location.reload(); 
    }
  }

/***Validamos el form de enviar comentario */
formEnviarComentario.addEventListener("submit", validarFormularioAgregarComic);
function validarFormularioAgregarComic(event) {
  event.preventDefault();
  if (!formEnviarComentario.checkValidity()) {
    event.stopPropagation();
    formEnviarComentario.classList.add('was-validated');
  } else {
    const respuesta = validarInformacionFormulario();
    if (respuesta !== null) {
      formEnviarComentario.reset();
      return alert(respuesta);
    }

    btnEnviarMensaje.innerText = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_xw0urmb';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btnEnviarMensaje.innerText = 'Enviar Comentario';
        alert('Mensaje Enviado!');
        formEnviarComentario.reset();
      }, (err) => {
        btnEnviarMensaje.innerText = 'Enviar Comentario';
        alert(`Mensaje No Enviado!. Error: ${JSON.stringify(err)}`);
        formEnviarComentario.reset();
      });
  }

}
function validarInformacionFormulario() {
  const nombreApellido = document.getElementById('nombreApellidoContacto').value,
    email = document.getElementById('emailContacto').value,
    numero = document.getElementById('numeroContacto').value,
    asunto = document.getElementById('asuntoContacto').value,
    mensaje = document.getElementById('mensajeContacto').value;
  return validarFormulario(nombreApellido, email, numero, asunto, mensaje);
}

window.onload = function () {
  cargarPaginaUsuario();
}
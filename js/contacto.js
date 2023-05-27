import {validarFormulario} from'../helpers/help.js'; 
const formEnviarComentario = document.getElementById('formEnviarComentario'),
  btnEnviarMensaje = document.getElementById('enviarComentario');

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
function validarInformacionFormulario(){
const nombreApellido = document.getElementById('nombreApellidoContacto').value,
email = document.getElementById('emailContacto').value, 
numero = document.getElementById('numeroContacto').value, 
asunto = document.getElementById('asuntoContacto').value, 
mensaje = document.getElementById('mensajeContacto').value;
return validarFormulario(nombreApellido, email, numero, asunto, mensaje); 
}
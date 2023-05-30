import { loginUsuario, cargarPaginaUsuario, validarUsuario } from "../helpers/help.js";
import { Usuario } from "../model/Usuario.js";
import { Estado, TipoRoles } from "../model/Emun.js";
import { listaUsuariosComics } from "../model/data.js";

const formularioRegistro = document.getElementById('formularioRegistro'),
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

/**Validamos el form de Registro**/
formularioRegistro.addEventListener("submit",validarFormularioRegistro)

function validarFormularioRegistro(event){
  event.preventDefault();
  if (!formularioRegistro.checkValidity()) {
    event.stopPropagation();
    formularioRegistro.classList.add('was-validated');
  } else{
    const nuevoUsuario = registrarUsuario(), 
    respuestaValidacion = validarUsuario(nuevoUsuario.nombre, nuevoUsuario.correo, nuevoUsuario.pass);

    if (respuestaValidacion !== null) {
      alert(respuestaValidacion);
      return formularioRegistro.reset();
    } 

   const serviceID = 'default_service', templateID = 'template_eewvnom';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     alert(listaUsuariosComics.agregarUsuario(nuevoUsuario));
     formularioRegistro.reset();
   }, (err) => {
     alert(`Mensaje No Enviado!. Error: ${JSON.stringify(err)}`);
     formularioRegistro.reset();
   });

  }
}
function registrarUsuario() {
  const nombre = document.getElementById('nombre').value,
    apellido = document.getElementById('apellido').value,
    correo = document.getElementById('correo').value,
    pass = document.getElementById('pass').value;
    
  let nuevoUsuario = new Usuario(nombre + ' ' + apellido, correo, pass, TipoRoles.usuario, Estado.pendiente);
  return nuevoUsuario; 
}

window.onload = function () {
  cargarPaginaUsuario();
  const btnLogin = document.getElementById('btn-login');
  btnLogin.onclick = function () { loginUsuario() };
}

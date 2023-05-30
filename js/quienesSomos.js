import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";
const formIniciarSesion = document.getElementById('formIniciarSesion'); 

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

window.onload = function () {
  cargarPaginaUsuario();

}

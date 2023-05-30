import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";
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

window.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('../assets/error404.mp3');
    audio.play();
}
)

window.onload = function () {
    cargarPaginaUsuario();
    const btnLogin = document.getElementById('btn-login');
    btnLogin.onclick = function () { loginUsuario() };
}

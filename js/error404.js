import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";

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

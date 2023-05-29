import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";

window.onload = function () {
    cargarPaginaUsuario();
    const btnLogin = document.getElementById('btn-login');
    btnLogin.onclick = function () { loginUsuario() };
  }
  
import { loginUsuario, cargarPaginaUsuario, validarUsuario } from "../helpers/help.js";
import { Usuario } from "../model/Usuario.js";
import { Estado, TipoRoles } from "../model/Emun.js";
import { listaUsuariosComics } from "../model/data.js";


function registrarUsuario() {
  const nombre = document.getElementById('nombre').value,
    apellido = document.getElementById('apellido').value,
    correo = document.getElementById('correo').value,
    pass = document.getElementById('pass').value;
    const formRegistro = document.getElementById('register-form');
  let nuevoUsuario = new Usuario(nombre + ' ' + apellido, correo, pass, TipoRoles.usuario, Estado.aprobado);
  let respuestaValidacion = validarUsuario(nuevoUsuario.nombre, nuevoUsuario.correo, nuevoUsuario.pass);
  if (respuestaValidacion) {
    alert(respuestaValidacion);
  } else {
    listaUsuariosComics.agregarUsuario(nuevoUsuario);
    formRegistro.reset();
  }
}

window.onload = function () {
  cargarPaginaUsuario();
  const btnLogin = document.getElementById('btn-login');
  btnLogin.onclick = function () { loginUsuario() };
  const btnregistro = document.getElementById('registrar-usuario');
  btnregistro.onclick = function () { registrarUsuario() };
}

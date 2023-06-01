import { listaUsuariosComics } from "../model/data.js";
import { Usuario } from "../model/Usuario.js";

const ExpRegNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
    ExpRegTitulo = /^[\w\s():\-?!¡¿áéíóúÁÉÍÓÚüÜñÑ"]+$/i,
    ExpRegURL = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    ExpRegTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/,
    ExpRegAsunto = /^[A-Za-z0-9\s\-\_\.\,\!\?\']+$/,
    ExpRegMensaje =/^[A-Za-z0-9\s\-\_\.\,\!\?\áéíóúÁÉÍÓÚüÜñÑ']+$/i,
    ExpRegTexto = /^[\x00-\xFF]*$/,
    ExpRegPass = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

function generarID() {
    var id = "";
    var str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        id += str.charAt(char);
    }
    return id;
}
function validarComic(comic) {
    if (comic.name.length == 1 || comic.name.match(ExpRegTitulo) == null) return "Ingrese un nombre correcto del comic!";
    if (comic.category.length == 1 || comic.category.match(ExpRegTitulo) == null) return "Ingrese una categoría correcta del comic!";
    if (comic.synopsis.length == 1 || comic.synopsis.match(ExpRegTexto) == null) return "Ingrese una sinopsis correcta del comic!";
    if (comic.publics == null) return "Seleccione una opción de publicación";
    if (comic.status == "") return "Seleccione un Estado";
    if (comic.price.length == 1 || comic.price.includes(',')) return "Ingrese un precio correcto";
    if (comic.editorial.length == 1 || comic.editorial.match(ExpRegTitulo) == null) return "Ingrese una Editorial correcta del comic!";
    if (comic.urlVideo.length == 1 || comic.urlVideo.match(ExpRegURL) == null) return "Ingrese una URL de video correcta del comic!";
    if (comic.urlImage.length == 1 || comic.urlImage.match(ExpRegURL) == null) return "Ingrese una URL de imagen correcta del comic!";
    return null;
}
function validarComicModificacion(comic) {
    if (comic.name.length == 1 || comic.name.match(ExpRegTitulo) == null) return "Ingrese un nombre correcto del comic!";
    if (comic.category.length == 1 || comic.category.match(ExpRegTitulo) == null) return "Ingrese una categoría correcta del Comic!";
    if (comic.synopsis.length == 1 || comic.synopsis.match(ExpRegTexto) == null) return "Ingrese una sinopsis correcta del Comic!";
    if (comic.status == "") return "Seleccioná un Estado!";
    if (comic.price.length == 1 || comic.price.includes(',')) return "Ingrese un precio correcto!";
    if (comic.editorial.length == 1 || comic.editorial.match(ExpRegTitulo) == null) return "Ingrese una editorial correcta del Comic!";
    if (comic.urlVideo.length == 1 || comic.urlVideo.match(ExpRegURL) == null) return "Ingrese una URL de video correcta del Comic!";
    if (comic.urlImage.length == 1 || comic.urlImage.match(ExpRegURL) == null) return "Ingrese una URL de imagen correcta del Comic!";
    return null;
}
function deleteChildNode(container) {
    while (container.hasChildNodes()) {
        container.childNodes.forEach(child => child.remove());
    }
}

function parsearBoolean(text) {
    if (text == 'si') return true;
    if (text == 'no') return false;
}
function validarFormulario(nombreApellido, email, numero, asunto, mensaje) {
    if (nombreApellido.length == 1 || nombreApellido.match(ExpRegNombre) == null) return "Ingrese un nombre y apellido correcto";
    if (email.length == 1 || email.match(ExpRegEmail) == null) return "Ingrese un email correcto";
    if (numero.length == 1 || numero.match(ExpRegTelefono) == null) return "Ingrese un numero de telefono correcto";
    if (asunto.length == 1 || asunto.match(ExpRegAsunto) == null) return "Ingrese un asunto correcto";
    if (mensaje.length == 1 || mensaje.match(ExpRegMensaje) == null) return "Ingrese un mensaje correcto";
    return null;
}

function validarUsuario(nombre, email, pass) {
    if (nombre.length == 1 || nombre.match(ExpRegNombre) == null) return "Ingrese un nombre y apellido correcto";
    if (email.length == 1 || email.match(ExpRegEmail) == null) return "Ingrese un email correcto";
    if (pass.length == 1 || pass.match(ExpRegPass) == null) return "Ingrese una contraseña correcta, solo letras, numeros y/o caracteres especiales";
    return null;
}
function validarUsuarioModificado(usuario) {
    if (usuario.estado == "") return "Seleccione un Estado de Usuario";
    if (usuario.tipo == "") return "Seleccione un Rol de Usuario";
    return null;
}
function loginUsuario(event) {
    event.preventDefault();
    localStorage.removeItem("usuarioActual");
    let usuarioEncontrado = null;
    const usuarioForm = document.getElementById('FormControlText').value,
        passForm = document.getElementById('FormControlpassword').value;
    listaUsuariosComics.listadoUsuarios.forEach(usuario => {
        if (usuario.correo == usuarioForm && usuario.pass == passForm && usuario.estado == "aprobado") {
            usuarioEncontrado = new Usuario(usuario.nombre, usuario.correo, usuario.pass, usuario.tipo, usuario.estado);
            localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
            cargarPaginaUsuario();
        }
    });
    if (!usuarioEncontrado) {
        alert('Los datos ingresados no pertenecen a un usuario registrado');
    }
}

function cargarPaginaUsuario() {
    const btnLogin = document.getElementById('login');
    const btnSuscribe = document.getElementById('suscribe');
    const nombreUsuario = document.getElementById('nombre-usuario');
    const adminComic = document.getElementById('admin-comic');
    const adminUser = document.getElementById('admin-user');
    let usuarioLogin = localStorage.getItem("usuarioActual") ? JSON.parse(localStorage.getItem("usuarioActual")) : null;
    if (usuarioLogin) {
        btnLogin.style.visibility = "hidden";
        btnLogin.style.width = "0px";
        nombreUsuario.style.width = "140px";
        nombreUsuario.textContent = `Hola, ${usuarioLogin.nombre}`;
        nombreUsuario.style.visibility = "visible";
        btnSuscribe.textContent = 'Salir';
        btnSuscribe.style.width = "100px";
        btnSuscribe.style.height = "44px";
        if (usuarioLogin.tipo == "administrador") {
            if (!window.location.href.includes('page')) {
                adminComic.innerHTML = `<a class="nav-link text-primary fw-bold" href="./page/administradorComic.html"><p class="admin-text text-primary fw-bold text-center">Comics &#9881</p></a>`;
                adminUser.innerHTML = `<a class="nav-link text-primary fw-bold" href="./page/administradorUsuarios.html"><p class="admin-text text-primary fw-bold text-center">Usuarios &#9881</p></a>`;
            } else {
                adminComic.innerHTML = `<a class="nav-link text-primary fw-bold" href="./administradorComic.html"><p class="admin-text text-primary fw-bold text-center">Comics &#9881</p></a>`;
                adminUser.innerHTML = `<a class="nav-link text-primary fw-bold" href="./administradorUsuarios.html"><p class="admin-text text-primary fw-bold text-center">Usuarios &#9881</p></a>`;
            }
        }
        btnSuscribe.onclick = function (event) { desloguearUsuario(event); };
    }
}

function desloguearUsuario(event) {
    event.preventDefault();
    const btnLogin = document.getElementById('login');
    const btnSuscribe = document.getElementById('suscribe');
    const nombreUsuario = document.getElementById('nombre-usuario');
    const adminComic = document.getElementById('admin-comic');
    const adminUser = document.getElementById('admin-user');
    const btnNavbar = document.querySelector('.btn-navbar');
    let usuarioLogin = localStorage.getItem("usuarioActual") ? JSON.parse(localStorage.getItem("usuarioActual")) : null;
    localStorage.removeItem("usuarioActual");
    btnLogin.style.visibility = "visible";
    btnLogin.style.width = "94px";
    nombreUsuario.style.visibility = "hidden";
    if (!window.location.href.includes('page')) {
        btnSuscribe.innerHTML = `<a class="dropdown-item text-white" href="./page/registrarse.html">Registrarme</a>`;
        btnSuscribe.onclick = function () { window.open("./page/registrarse.html", "_self"); };
    } else {
        btnSuscribe.innerHTML = `<a class="dropdown-item text-white" href="./registrarse.html">Registrarme</a>`;
        btnSuscribe.onclick = function () { window.open("./registrarse.html", "_self"); };
    }
    btnSuscribe.style.width = "140px";
    btnSuscribe.style.height = "44px";
    btnLogin.style.height = "44px";
    btnNavbar.style.justifyContent = "center";
    btnNavbar.setAttribute('style', 'margin-left: -8rem !important');
    if (usuarioLogin.tipo == "administrador") {
        adminComic.innerHTML = `<a class="nav-link text-danger fw-bold" href=""></a>`;
        adminUser.innerHTML = `<a class="nav-link text-danger fw-bold" href=""></a>`;
    }
    if (window.location.href.includes('administrador')){
        window.location.href = window.location.origin;
    }
}

export { generarID, validarComic, validarComicModificacion, deleteChildNode, parsearBoolean, validarFormulario, validarUsuario, loginUsuario, cargarPaginaUsuario, validarUsuarioModificado }; 
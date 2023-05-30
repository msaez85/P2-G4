import { listaUsuariosComics } from "../model/data.js";
import { validarUsuarioModificado, loginUsuario, cargarPaginaUsuario } from "../helpers/help.js"
import { rolUsuario, estadoUsuario } from "../helpers/helpAdministracion.js";
import { Usuario } from "../model/Usuario.js";
const bodyListaUsuarios = document.getElementById('bodyListUsuarios'),
  listaEstadoUsuario = document.getElementById("estadoUsuarioModificar"),
  listaRolUsuario = document.getElementById("rolUsuarioModificar"),
  fromModificarUsuario = document.getElementById("formModificarUsuarioModal"),
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


window.onload = function () {
  cargarPaginaUsuario();
}

fromModificarUsuario.addEventListener("submit", validarFormularioModificarUsuario);

function validarFormularioModificarUsuario(event) {
  if (!fromModificarUsuario.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    fromModificarUsuario.classList.add('was-validated');
  } else {
    modificarUsuario(event);
  }
}


listaUsuariosComics.listadoUsuarios.forEach(user => {
  let row = document.createElement('tr');

  let column = document.createElement("td");
  column.setAttribute('scope', 'row');
  column.innerText = user.id;
  row.appendChild(column);

  column = document.createElement("td");
  column.innerText = user.nombre;
  row.appendChild(column);

  column = document.createElement("td");
  column.innerText = user.correo;
  row.appendChild(column);

  column = document.createElement("td");
  column.innerText = user.pass;
  row.appendChild(column);

  column = document.createElement("td");
  column.innerText = user.tipo;
  row.appendChild(column);

  column = document.createElement("td");
  column.innerText = user.estado;
  row.appendChild(column);

  column = document.createElement("td");

  let buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
  buttonDelete.className = 'btn btn-danger mx-1';
  buttonDelete.id = 'btnEliminarUsuario';
  buttonDelete.addEventListener('click', (event) => {
    let fila = event.target.parentNode.parentNode.parentNode,
      idUsuario = fila.getElementsByTagName('td')[0].innerText;
    eliminarUsuario(idUsuario, fila);
  });
  column.appendChild(buttonDelete);

  let buttonUpdate = document.createElement("button");
  buttonUpdate.innerHTML = `<i class="bi bi-pencil-square"></i>`;
  buttonUpdate.className = 'btn btn-warning ';
  buttonUpdate.id = 'btnModificarUsuario';
  buttonUpdate.addEventListener('click', (event) => {
    const fila = event.target.parentNode.parentNode.parentNode,
      idUsuario = fila.getElementsByTagName('td')[0].innerText,
      estadoUsuario = {
        rolUsuario: fila.getElementsByTagName('td')[4].innerText,
        estadoUsuario: fila.getElementsByTagName('td')[5].innerText
      }
    localStorage.setItem("idUsuarioModificar", JSON.stringify(idUsuario));
    cargarEstadoUsuario(idUsuario, estadoUsuario);
  });
  buttonUpdate.setAttribute('data-bs-toggle', 'modal');
  buttonUpdate.setAttribute('data-bs-target', '#modificarUsuarioModal');
  column.appendChild(buttonUpdate);

  row.appendChild(column);
  bodyListaUsuarios.appendChild(row);
});

function eliminarUsuario(idUsuario, fila) {
  if (confirm('¿Desea Eliminar el Usuario ?')) {
    alert(listaUsuariosComics.eliminarUsuario(idUsuario));
    fila.remove();
  }
}

function cargarEstadoUsuario(idUsuario, usuario) {
  rolUsuario(usuario.rolUsuario, listaRolUsuario);
  estadoUsuario(usuario.estadoUsuario, listaEstadoUsuario);
  let usuarioEncontrado = listaUsuariosComics.listadoUsuarios.find(usuario => usuario.id == idUsuario);
  document.getElementById("nombreApellidoUsuario").value = usuarioEncontrado.nombre;
}

function modificarUsuario(event) {
  event.preventDefault();
  const idUsuario = JSON.parse(localStorage.getItem("idUsuarioModificar")),
    rolUsuario = listaRolUsuario.value,
    estadoUsuario = listaEstadoUsuario.value;
  let usuarioModificado = new Usuario(null, null, null, rolUsuario, estadoUsuario),
    respuesta = validarUsuarioModificado(usuarioModificado.toModificarUsuario());
  if (respuesta !== null) {
    alert(respuesta);
    return fromModificarUsuario.rest();
  }
  alert(listaUsuariosComics.modificarUsuario(idUsuario, usuarioModificado.toModificarUsuario()));
  localStorage.removeItem("idUsuarioModificar");
  return window.location.reload();
}


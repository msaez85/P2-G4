import { validarComic, deleteChildNode, parsearBoolean, validarComicModificacion} from "../helpers/help.js";
import {agregarInformacionParrafo,cargarEstadoComic, obtenerEstado,agregarVideo,cargarEstadoModificacion} from"../helpers/helpAdministracion.js"; 
import{listaComics } from "../model/data.js"
import { Comic } from "../model/Comic.js";

const formAgregarComic = document.getElementById("formAgregarComicModal"),
bodyTablaComic = document.getElementById('bodyListComic'),
listEstadoComic = document.getElementById('estadoComic'),
listEstadoModificarComic = document.getElementById('estadoComicModificar'), 
btnCancelar = document.getElementById('btnCancelar'),
btnFavoriteComic= document.getElementsByClassName('btnFavoriteComic'),
formModificarComic = document.getElementById("formModificarComicModal"); 

/**Funciones que donde inicializamos la carga de los comic y los estados del comic para crear uno nuevo */
listarComics();
cargarEstadoComic(listEstadoComic);
comicFavorito();

/**Validamos el form de  agregar nuevo comic**/
formAgregarComic.addEventListener("submit", validarFormularioAgregarComic);
function validarFormularioAgregarComic(event) {
  if (!formAgregarComic.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    formAgregarComic.classList.add('was-validated');
  } else {
    agregarComic(event);
  }
}
/**Validamos el from de modificar un comic */
formModificarComic.addEventListener("submit", validarFormularioModificarComic);
function validarFormularioModificarComic(event) {
  debugger
  event.preventDefault();
    if (!formModificarComic.checkValidity()) {
      event.stopPropagation();
      formModificarComic.classList.add('was-validated');
    }else{
      guardarModificacionComic(event); 
    }
}
btnCancelar.addEventListener('click', ()=>{
    window.location.reload();
}); 

function agregarComic(event) {
  event.preventDefault();
  const name = document.getElementById("nombreComic").value,
    category = document.getElementById("categoriaComic").value,
    synopsis = document.getElementById("sipnosisComic").value,
    opcion = parsearBoolean(document.querySelector('input[name="radio-stacked"]:checked').value),
    status = obtenerEstado('estadoComic'),
    price = document.getElementById("precioComic").value,
    editorial = document.getElementById("editorialComic").value,
    urlVideo = document.getElementById("urlVideoComic").value,
    urlImage = document.getElementById("urlImagenComic").value;

  let newComic = new Comic(name, category, synopsis, opcion, urlVideo, urlImage, editorial, price, status),
    respuestaValidacion = validarComic(newComic.toJson());

  if (respuestaValidacion != null) {
    alert(respuestaValidacion);
    return formAgregarComic.reset();
  }

  alert(listaComics.addArrayComic(newComic.toJson()));
  listarComics();
  return formAgregarComic.reset();

}

function listarComics() {
  deleteChildNode(bodyTablaComic);

  listaComics.getArrayComic.forEach(comic => {

    let row = document.createElement('tr');
    if (comic.id == listaComics.getComicFavorite.id) {
      row.classList.toggle('paintRow');
    }

  let column = document.createElement("td"); 

  column.setAttribute('scope', 'row'); 
  let img = document.createElement('img'); 
  img.style.width = '5rem'; 
  img.src = comic.urlImage; 
  column.appendChild(img); 
  row.appendChild(column);
  
  column = document.createElement("td"); 
  column.innerText = comic.id;
  row.appendChild(column);

  column = document.createElement("td"); 
  column.innerText = comic.name;  
  row.appendChild(column);
  
  column = document.createElement("td"); 
  column.innerText = comic.category; 
  row.appendChild(column);

  column = document.createElement("td"); 

  let button = document.createElement("button");
  button.innerHTML= `<i class="bi bi-eye-fill"></i>`; 
  button.className = 'btn btn-info m-1'; 
  button.id = 'btnLeerSinopsis'; 
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#viewSynopsisComic');
  button.addEventListener('click',()=>{ agregarInformacionParrafo(comic.synopsis,'textoSynopsis')});

  column.appendChild(button); 
  row.appendChild(column); 

  column = document.createElement("td"); 
  column.innerText = comic.status; 
  row.appendChild(column);

  column = document.createElement("td"); 
  column.innerText = comic.editorial; 
  row.appendChild(column);

  column = document.createElement("td"); 
  column.innerText ='$'+ comic.price; 
  row.appendChild(column);

  column = document.createElement("td"); 
  let input = document.createElement("input");
  input.type = "checkbox"; 
  input.checked = comic.publics; 
  input.classList.add('checkboxPublicado'); 
  column.appendChild(input); 
  row.appendChild(column); 

  column = document.createElement("td"); 
  button = document.createElement("button");
  button.innerHTML= `<i class="bi bi-play-fill"></i>`; 
  button.className = 'btn btn-secondary my-1';
  button.type = "button";  
  button.id = 'btnVerVideo'; 
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#viewVideoComic');
  button.addEventListener('click',()=>{ agregarVideo(comic.urlVideo,'contenedorVideo')});

  column.appendChild(button);
  row.appendChild(column);

  column = document.createElement("td"); 

  let buttonDelete = document.createElement("button");
  buttonDelete.innerHTML= `<i class="bi bi-trash3-fill"></i>`; 
  buttonDelete.className = 'btn btn-danger mx-1'; 
  buttonDelete.id = 'btnEliminarComic'; 
  buttonDelete.addEventListener('click',(event)=>{
    let fila = event.target.parentNode.parentNode.parentNode,
    codigoComic =fila.getElementsByTagName('td')[1].innerText;
    deleteComic(fila,codigoComic)
  });
  column.appendChild(buttonDelete);

  let buttonUpdate = document.createElement("button");
  buttonUpdate.innerHTML=`<i class="bi bi-pencil-square"></i>`; 
  buttonUpdate.className = 'btn btn-warning '; 
  buttonUpdate.id = 'btnModificarComic'; 
  buttonUpdate.addEventListener('click',(event)=>{
    let fila = event.target.parentNode.parentNode.parentNode,
    codigoComic =fila.getElementsByTagName('td')[1].innerText,
    estadoComic =fila.getElementsByTagName('td')[5].innerText;
    localStorage.setItem("idComicModificar", JSON.stringify(codigoComic)); 
    cargarComic(codigoComic,estadoComic); 
  }); 
  buttonUpdate.setAttribute('data-bs-toggle', 'modal');
  buttonUpdate.setAttribute('data-bs-target', '#modificarComicsModal');
  column.appendChild(buttonUpdate);

  let buttonFavorite = document.createElement("button");
  buttonFavorite.innerHTML= `<i class="bi bi-star-fill"></i>`; 
  buttonFavorite.className = 'btn btn-success m-1 btnFavoriteComic'; 
  column.appendChild(buttonFavorite);

  row.appendChild(column);

  bodyTablaComic.appendChild(row);
}); 
cambiarPublicado(); 
}

function cargarComic(idComic,estadoComic){
cargarEstadoModificacion(estadoComic,listEstadoModificarComic); 
 let comic =  listaComics.getArrayComic.find(comic => comic.id == idComic); 
 document.getElementById("nombreComicModificar").value = comic.name; 
 document.getElementById("categoriaComicModificar").value = comic.category;
 document.getElementById("sipnosisComicModificar").value = comic.synopsis; 
 document.getElementById("precioComicModificar").value = comic.price;  
 document.getElementById("editorialComicModificar").value = comic.editorial; 
 document.getElementById("urlVideoComicModificar").value = comic.urlVideo; 
 document.getElementById("urlImagenComicModificar").value = comic.urlImage; 
}

function deleteComic(fila, idComic) {
  if (confirm('¿Desea Eliminar el Comic?')) {
    alert(listaComics.deleteComic(idComic));
    fila.remove();
  }
}

function comicFavorito() {
  Array.from(btnFavoriteComic).forEach(function (button) {
    button.addEventListener('click', function () {
      let row = this.parentNode.parentNode,
        idComic = row.getElementsByTagName('td')[1].innerText;
      if (listaComics.getComicFavorite.id !== idComic) {
        alert(listaComics.addComicFavorite(idComic));
      }
      row.classList.toggle('paintRow');
    });
  });
}
function cambiarPublicado() {
  const checkboxesPublicados = document.querySelectorAll(".checkboxPublicado");
  checkboxesPublicados.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const fila = checkbox.parentNode.parentNode,
        idComic = fila.cells[1].textContent;
      alert(listaComics.updatePublics(idComic));
    });
  });
}

function guardarModificacionComic(event){
  event.preventDefault(); 
  const idComicModificar = JSON.parse(localStorage.getItem("idComicModificar")),
    name = document.getElementById("nombreComicModificar").value,
    category = document.getElementById("categoriaComicModificar").value,
    synopsis = document.getElementById("sipnosisComicModificar").value,
    price = document.getElementById("precioComicModificar").value,
    status = obtenerEstado('estadoComicModificar'),
    editorial = document.getElementById("editorialComicModificar").value,
    urlVideo = document.getElementById("urlVideoComicModificar").value,
    urlImage = document.getElementById("urlImagenComicModificar").value;
 let newUpdateComic = new Comic(name,category,synopsis,false,urlVideo,urlImage,editorial,price,status), 
 respuesta = validarComicModificacion(newUpdateComic.toUpdateComic()); 
 if(respuesta != null){
  alert(respuesta);
  return  formModificarComic.reset(); 
 }
  alert(listaComics.updateComic(idComicModificar,newUpdateComic.toUpdateComic()));
  localStorage.removeItem("idComicModificar"); 
  return window.location.reload();
}
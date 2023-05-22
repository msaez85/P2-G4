import { validarComic, deleteChildNode, parsearBoolean} from "../helpers/help.js";
import {agregarInformacionParrafo,cargarEstadoComic, obtenerEstado,agregarVideo} from"../helpers/helpAdministracion.js"; 
import{listaComics } from "../model/data.js"
import { Comic } from "../model/Comic.js";
import { Biblioteca } from "../model/Biblioteca.js";

const formAgregarComic = document.getElementById("formAgregarModal"),
formModificarComic = document.getElementById('formModificarModal'),
btnCancelar = document.getElementById('btnCancelar'),
bodyTablaComic = document.getElementById('bodyListComic'),
listEstadoComic = document.getElementById('estadoComic'); 

cargarEstadoComic(listEstadoComic);

let biblioteca = new Biblioteca();   
/**Validamos el form de  agregar nuevo comic**/
formAgregarComic.addEventListener("submit", validarFormularioAgregarComic);
function validarFormularioAgregarComic(event) {
    if (!formAgregarComic.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      formAgregarComic.classList.add('was-validated');
    }else{
      agregarComic(event);
    }
}
/**Validamos el formulario de modificar un comic */
formModificarComic.addEventListener("submit", validarFormularioModificarComic);
function validarFormularioModificarComic(event){
    if (!formModificarComic.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      formModificarComic.classList.add('was-validated');
    }else{
      modificarComic(event);
    }

}
btnCancelar.addEventListener('click', ()=>{
    window.location.reload();
}); 

function agregarComic(event){
  debugger
  event.preventDefault();
   const name = document.getElementById("nombreComic").value,
   category = document.getElementById("categoriaComic").value,
   synopsis = document.getElementById("sipnosisComic").value, 
   opcion = parsearBoolean(document.querySelector('input[name="radio-stacked"]:checked').value),
   status = obtenerEstado(),
   price = document.getElementById("precioComic").value, 
   editorial = document.getElementById("editorialComic").value,
   urlVideo = document.getElementById("urlVideoComic").value, 
   urlImage = document.getElementById("urlImagenComic").value; 

   let newComic = new Comic(name,category,synopsis,opcion,urlVideo,urlImage,editorial,price,status),
   respuestaValidacion = validarComic(newComic.toJson()); 

  if(respuestaValidacion != null ) {
     alert(respuestaValidacion);
    return  formAgregarComic.reset(); 
  }

  alert(biblioteca.addArrayComic(newComic.toJson())); 
  listarComics(); 
  return  formAgregarComic.reset();

}
listarComics(); 

function listarComics(){
  debugger
  deleteChildNode(bodyTablaComic); 
  listaComics.arrayComics.forEach(comic => {  
  let row = document.createElement('tr'); 

  let column = document.createElement("td"); 
  let img = document.createElement('img'); 
  img.style.width = '3rem'; 
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
  button.innerHTML= `<i class="bi bi-eye-fill"></i>Leer`; 
  button.className = 'btn btn-info my-1'; 
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
  column.innerText ='$ '+comic.price; 
  row.appendChild(column);

  column = document.createElement("td"); 
  let input = document.createElement("input");
  input.type = "checkbox"; 
  input.checked = comic.publics; 
  column.appendChild(input); 
  row.appendChild(column); 

  column = document.createElement("td"); 
  button = document.createElement("button");
  button.innerHTML= `<i class="bi bi-play-fill"></i>`; 
  button.className = 'btn btn-secondary my-1'; 
  button.id = 'btnVerVideo'; 
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#viewVideoComic');
  button.addEventListener('click',()=>{ agregarVideo(comic.urlVideo,'contenedorVideo')});

  column.appendChild(button);
  row.appendChild(column);

  column = document.createElement("td"); 

  button = document.createElement("button");
  button.innerHTML= `<i class="bi bi-trash3-fill"></i>`; 
  button.className = 'btn btn-danger m-1'; 
  button.id = 'btnEliminarComic'; 
  button.addEventListener('click',()=>{});
  column.appendChild(button);

  button = document.createElement("button");
  button.innerHTML=`<i class="bi bi-pencil-square"></i>`; 
  button.className = 'btn btn-warning m-1'; 
  button.id = 'btnModificarComic'; 
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#modificarComicsModal');
  column.appendChild(button);

  button = document.createElement("button");
  button.innerHTML= `<i class="bi bi-star-fill"></i>`; 
  button.className = 'btn btn-success m-1'; 
  button.id = 'btnFovoriteComic'; 
  button.addEventListener('click',()=>{});
  column.appendChild(button);

  row.appendChild(column);

  bodyTablaComic.appendChild(row);
}); 
}

function modificarComic(event){
  event.preventDefault(); 
}

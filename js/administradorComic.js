import { validarComic } from "../helpers/help.js";
import { Comic } from "../model/Comic.js";
import { Biblioteca } from "../model/Biblioteca.js";
const formAgregarComic = document.getElementById("formAgregarModal"),
btnCancelar = document.getElementById('btnCancelar'),
btnAgregarComic = document.getElementById('btnAgregarComic'); 

let biblioteca = new Biblioteca();   


/**Validamos el form de  agregar nuevo comic**/
formAgregarComic.addEventListener("submit", validarFormulario);
function validarFormulario(event) {
    if (!formAgregarComic.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    formAgregarComic.classList.add('was-validated');
}
btnCancelar.addEventListener('click', ()=>{
    window.location.reload();
}); 
btnAgregarComic.addEventListener('click', agregarComic);

function agregarComic(event){
  event.preventDefault(); 
   const name = document.getElementById("nombreComic").value,
   category = document.getElementById("categoriaComic").value,
   synopsis = document.getElementById("sipnosisComic").value, 
   opcion = Boolean(document.querySelector('input[name="radio-stacked"]:checked').value),
   urlVideo = document.getElementById("urlVideoComic").value, 
   urlImage = document.getElementById("urlImagenComic").value; 

   let newComic = new Comic(name,category,synopsis,opcion,urlVideo,urlImage),
   respuestaValidacion = validarComic(newComic.toJson()); 
  
  if(respuestaValidacion != null ) {
     alert(respuestaValidacion);
    return  formAgregarComic.reset(); 
  }

  alert(biblioteca.addArrayComic(newComic.toJson())); 
  
 
  formAgregarComic.reset(); 
}


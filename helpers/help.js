const ExpRegNombre="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$",
ExpRegURL=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
ExpRegTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/,
ExpRegAsunto = /^[A-Za-z0-9\s\-\_\.\,\!\?\']+$/,
ExpRegMensaje = /^[A-Za-z0-9\s\-\_\.\,\!\?\']+$/,
ExpRegTexto = /^[A-Za-z\s]+$/;

function generarID(){
    var id = "";
    var str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        id += str.charAt(char);
    }
    return id;
}
function validarComic(comic){
    if(comic.name.length == 1 || comic.name.match(ExpRegNombre)==null) return "Ingrese Nombre Correcto del Comic! "; 
    if(comic.category.length == 1 || comic.category.match(ExpRegTexto)==null) return "Ingrese Categoría Correcta del Comic! "; 
    if(comic.synopsis.length == 1 ) return "Ingrese Sinopsis Correcta del Comic! "; 
    if(comic.publics == null) return "Seleccioná una opcion de publicacion!"; 
    if(comic.status == "") return "Seleccioná un Estado! "; 
    if(comic.price.length == 1 || comic.price.includes(',')) return "Ingrese un precio correcto!";  
    if(comic.editorial.length == 1 || comic.editorial.match(ExpRegTexto)== null) return "Ingrese Editorial Correcta del Comic!"; 
    if(comic.urlVideo.length == 1 || comic.urlVideo.match(ExpRegURL)== null) return "Ingrese URL de Video Correcta del Comic!"; 
    if(comic.urlImage.length == 1 || comic.urlImage.match(ExpRegURL)== null) return "Ingrese URL de Imagen Correcta del Comic!"; 
    return null; 
}
function deleteChildNode(container){
    while (container.hasChildNodes()) {
        container.childNodes.forEach(child => child.remove());
    }
}

function parsearBoolean(text){
    if(text =='si') return true; 
    if(text =='no') return false; 
}
function validarFormulario(nombreApellido,email,numero,asunto,mensaje){
if(nombreApellido.length == 1 || nombreApellido.match(ExpRegNombre) == null) return "Ingrese un numero y apellido correcto"; 
if(email.length == 1 || email.match(ExpRegEmail) == null ) return "Ingrese un email correcto"; 
if(numero.length == 1 || numero.match(ExpRegTelefono) == null) return "Ingrese un numero de telefono correcto"; 
if(asunto.length == 1 || asunto.match(ExpRegAsunto) == null ) return "Ingrese un asunto Correcto"; 
if(mensaje.length == 1 || mensaje.match(ExpRegMensaje) == null ) return "Ingrese un mensaje Correcto"; 
return null; 
}
export {generarID, validarComic,deleteChildNode,parsearBoolean,validarFormulario}; 
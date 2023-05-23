const ExpReg="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$",
ExpRegURL=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

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
    if(comic.name.length == 0 || comic.name.match(ExpReg)==null) return "Ingrese Nombre Correcto del Comic! "; 
    if(comic.category.length == 0 || comic.category.match(ExpReg)==null) return "Ingrese Categoría Correcta del Comic! "; 
    if(comic.synopsis.length == 0 ) return "Ingrese Sinopsis Correcta del Comic! "; 
    if(comic.publics == null) return "Seleccioná una opcion de publicacion!"; 
    if(comic.status == "") return "Seleccioná un Estado! "; 
    if(comic.price.length == 0 || comic.price.includes(',')) return "Ingrese un precio correcto!";  
    if(comic.editorial.length == 0 || comic.editorial.match(ExpReg)== null) return "Ingrese Editorial Correcta del Comic!"; 
    if(comic.urlVideo.length == 0 || comic.urlVideo.match(ExpRegURL)== null) return "Ingrese URL de Video Correcta del Comic!"; 
    if(comic.urlImage.length == 0 || comic.urlImage.match(ExpRegURL)== null) return "Ingrese URL de Imagen Correcta del Comic!"; 
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
export {generarID, validarComic,deleteChildNode,parsearBoolean}; 
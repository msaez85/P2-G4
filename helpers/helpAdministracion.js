import {deleteChildNode} from "./help.js"; 
import {EstadosComic} from "../model/Emun.js"; 

function agregarInformacionParrafo(texto, idContenedor){
    let Contenedorparrafo = document.getElementById(`${idContenedor}`),
    parrafo = document.createElement('p'); 
    deleteChildNode(Contenedorparrafo); 
    parrafo.innerText= texto; 
    Contenedorparrafo.appendChild(parrafo);
}

function cargarEstadoComic(selector){
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = EstadosComic.Publicandose;
    nuevaOpcion.value = EstadosComic.Publicandose;
    selector.appendChild(nuevaOpcion);

    nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = EstadosComic.Emitiendose;
    nuevaOpcion.value = EstadosComic.Emitiendose;
    selector.appendChild(nuevaOpcion);

    nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = EstadosComic.Finalizado;
    nuevaOpcion.value = EstadosComic.Finalizado;
    selector.appendChild(nuevaOpcion);
}

function obtenerEstado(){
    let selector = document.querySelector('#estadoComic'); 
    let opcion = selector.options[selector.selectedIndex];
    return opcion.textContent;
}
function agregarVideo(urlVideo,idcontenedor){
    const ratioVideo = document.getElementById(`${idcontenedor}`),
     iframe = document.createElement("iframe"); 
    let texto =  urlVideo , nuevoTexto = ""; 

    if(urlVideo.includes("youtu.be/")){
        nuevoTexto = texto.replace("youtu.be/", "youtube.com/embed/");
    }else{
        nuevoTexto = texto.replace("watch?v=", "embed/");
    }
    
    iframe.title = "YouTube video"; 
    iframe.allowFullscreen = true; 
    iframe.frameborder="0"; 
    iframe.src = nuevoTexto;
    ratioVideo.appendChild(iframe); 
}
export {agregarInformacionParrafo,cargarEstadoComic, obtenerEstado,agregarVideo}; 
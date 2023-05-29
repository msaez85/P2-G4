import { deleteChildNode } from "./help.js";
import { EstadosComic, TipoRoles, Estado } from "../model/Emun.js";

function agregarInformacionParrafo(texto, idContenedor) {
    let Contenedorparrafo = document.getElementById(`${idContenedor}`),
        parrafo = document.createElement('p');
    deleteChildNode(Contenedorparrafo);
    parrafo.innerText = texto;
    Contenedorparrafo.appendChild(parrafo);
}

function cargarEstadoComic(selector) {
    for (let estado in EstadosComic) {
        let nuevaOpcion = document.createElement("option");
        nuevaOpcion.text = EstadosComic[estado];
        nuevaOpcion.value = EstadosComic[estado];
        selector.appendChild(nuevaOpcion);
    }
}
function obtenerEstado(nombreSelector) {
    let selector = document.querySelector(`#${nombreSelector}`);
    let opcion = selector.options[selector.selectedIndex];
    return opcion.textContent;
}
function agregarVideo(urlVideo, idcontenedor) {
    const ratioVideo = document.getElementById(`${idcontenedor}`),
        iframe = document.createElement("iframe");
    let texto = urlVideo, nuevoTexto = "";

    if (urlVideo.includes("youtu.be/")) {
        nuevoTexto = texto.replace("youtu.be/", "youtube.com/embed/");
    } else {
        nuevoTexto = texto.replace("watch?v=", "embed/");
    }

    iframe.title = "YouTube video";
    iframe.allowFullscreen = true;
    iframe.frameborder = "0";
    iframe.src = nuevoTexto;
    ratioVideo.appendChild(iframe);
}
function cargarEstadoModificacion(estadoComic, selector) {
    deleteChildNode(selector);
    recorrerEstado(estadoComic, selector, EstadosComic);
}

function rolUsuario(rol, selector) {
    deleteChildNode(selector);
    recorrerEstado(rol, selector, TipoRoles);
}
function estadoUsuario(estadoTabla, selector) {
    deleteChildNode(selector);
    recorrerEstado(estadoTabla, selector, Estado);
}
function recorrerEstado(estadoTabla, selector, arrayEstados) {
    let nuevaOpcion = null;
    nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = "Seleccionar una opcion";
    nuevaOpcion.value = "";
    nuevaOpcion.disabled = true;
    selector.appendChild(nuevaOpcion);
    for (let estado in arrayEstados) {
        if (arrayEstados[estado] === estadoTabla) {
            nuevaOpcion = document.createElement("option");
            nuevaOpcion.text = arrayEstados[estado];
            nuevaOpcion.value = arrayEstados[estado];
            nuevaOpcion.selected = true;
            selector.appendChild(nuevaOpcion);
        } else {
            nuevaOpcion = document.createElement("option");
            nuevaOpcion.text = arrayEstados[estado];
            nuevaOpcion.value = arrayEstados[estado];
            selector.appendChild(nuevaOpcion);
        }

    }
}
export { agregarInformacionParrafo, cargarEstadoComic, obtenerEstado, agregarVideo, cargarEstadoModificacion, rolUsuario, estadoUsuario }; 
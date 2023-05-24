import { listaComics } from "../model/data.js";

function cargardetalle() {
    let query = window.location.search;
    let urlParams = new URLSearchParams(query);
    let idComic = urlParams.get('comic');
    updateDetalle(idComic);
}

function updateDetalle(idComic) {
    const detalleViejo = document.querySelector('.detalle');
    detalleViejo.remove();
    let Comics = listaComics.getArrayComic;
    let comicDetalle = '';
    Comics.forEach(c => {
        if (c.id == idComic) {
            comicDetalle = c;
        }
    });
    const detalleNuevo = document.createElement('div');
    detalleNuevo.classList.add('detalle', 'container-fluid', 'd-flex', 'flex-row', 'justify-content-center', 'align-items-start');
    detalleNuevo.innerHTML = `
      <div class="img-detalle">
        <img src=".${comicDetalle.toJson().urlImage}" class="img-fluid img-main m-5" alt="detail">
      </div>
      <div class="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
        <h3 class="text-black fs-5 text-center">${comicDetalle.toJson().editorial}</h3>
        <h2 class="text-black fw-bold fs-2 text-center mb-5">${comicDetalle.toJson().name}</h2>
        <div class="container-fluid d-flex flex-row justify-content-start align-items-center mb-5">
          <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4>Precio</h4>
            <h4>${comicDetalle.toJson().price} USD$</h4>
          </div>
          <button type="button" class="btn btn-dark btn-carrito me-5">Agregar al Carrito</button>
        </div>
        <p class="sinopsis">${comicDetalle.toJson().synopsis}</p>
        <iframe class="my-5" width="520" height="315" src="${comicDetalle.toJson().urlVideo}">
        </iframe>
      </div>
    `;
    const padreContainer = document.querySelector('.main');
    padreContainer.appendChild(detalleNuevo);
}

window.onload = function () {
    cargardetalle();
}
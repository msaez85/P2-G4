import { listaComics } from "../model/data.js";
import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";

function cargardetalle() {
  let idComic = '';
  let query = window.location.search;
  let urlParams = new URLSearchParams(query);
  cargarPaginaUsuario();
  if (urlParams.get('comic')) {
    idComic = urlParams.get('comic');
    updateDetalle(idComic);
  }
}

function updateDetalle(idComic) {
  const detalleDiv = document.querySelector('.detalle');
  const tituloComic = document.getElementById('titulo');
  if (!tituloComic.textContent) {
    let Comics = listaComics.getArrayComic;
    let comicDetalle = '';
    Comics.forEach(c => {
      if (c.id == idComic) {
        comicDetalle = c;
      }
    });
    detalleDiv.innerHTML = `
      <div class="img-detalle">
        <img src=".${comicDetalle.urlImage}" class="img-fluid img-main m-5" alt='${comicDetalle.urlImage.slice(9, comicDetalle.urlImage.indexOf(".jpg"))}'>
      </div>
      <div class="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
        <h3 class="text-black fs-5 text-center">${comicDetalle.editorial}</h3>
        <h2 class="text-black fw-bold fs-2 text-center mb-5" id="titulo">${comicDetalle.name}</h2>
        <div class="container-fluid d-flex flex-row justify-content-start align-items-center mb-5">
          <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4>Precio</h4>
            <h4>${comicDetalle.price} USD$</h4>
          </div>
          <button type="button" class="btn btn-dark btn-carrito me-5"><a class= "text-favorito text-white" href="./error404.html">Agregar al Carrito</a></button>
        </div>
        <p class="sinopsis">${comicDetalle.synopsis}</p>
        <iframe class="my-5" width="520" height="315" src="${comicDetalle.urlVideo}">
        </iframe>
      </div>
    `;
  }
}

window.onload = function () {
  cargardetalle();
  const btnLogin = document.getElementById('btn-login');
  btnLogin.onclick = function () { loginUsuario() };
}
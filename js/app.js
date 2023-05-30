import { listaComics } from "../model/data.js";
import { loginUsuario, cargarPaginaUsuario } from "../helpers/help.js";


function cargarDestacado(comicDestacado) {
  const elementoDestacadoViejo = document.querySelector('.destacado');
  elementoDestacadoViejo.remove();
  const elementoDestacadoNuevo = document.createElement('div');
  elementoDestacadoNuevo.classList.add('destacado', 'container-fluid');
  elementoDestacadoNuevo.innerHTML = `
          <div class="img-main">
            <h2 class="main-title text-white fw-bold ms-5 mt-5">Destacado de la semana</h2>
            <img src="${comicDestacado.urlImage}" class="img-fluid img-main m-5" alt="main">
          </div>
          <div class="container-fluid d-flex flex-column justify-content-evenly m-5 w-50 text-white descripcion">
            <h2 class="title">${comicDestacado.name}</h2>
            <br>
            <h5 class="editorial text-white-50 fw-bold">${comicDestacado.editorial}</h5>
            <h5 class="status">${comicDestacado.status}</h5>
            <h5 class="categoria">${comicDestacado.category}</h5>
            <br>
            <hr>
            <p class="sinopsis">${comicDestacado.synopsis}</p>
            <br>
            <hr>
            <br>
            <div class="btn-destacados container-fluid d-flex">
              <button href="#" class="detalle-btn btn btn-secondary me-4 mb-2" id="${comicDestacado.id}">Detalles</button>
              <button href="#" class="btn btn-secondary mb-2"><a class= "text-favorito text-white" href="./page/error404.html">Favorito</a></button>
            </div>
          </div>
        `;
  const padreContainer = document.querySelector('.header');
  padreContainer.appendChild(elementoDestacadoNuevo);
}

function cargarContenido(comics) {
  limpiarContenido();
  const contenido = document.querySelector('.contenido');
  comics?.forEach(c => {
    if (c.publics) {
      const tarjetaManga = document.createElement('div');
      tarjetaManga.classList.add('card-contenido', 'card', 'm-4');
      tarjetaManga.style.width = '18rem';
      tarjetaManga.innerHTML = `
      <img src="${c.urlImage}" class="card-img-top" alt="${c.name}">
      <div class="card-body" style="height:260px;">
        <h4 class="card-title text-white fw-bold">"${c.name}"</h4>
        <p class="card-text text-white-50">${c.editorial}</p>
        <p class="card-text text-white fw-bold">${c.category}</p>
        <p class="card-text text-white fw-bold">${c.status}</p>
        <button class="detalle-btn btn btn-secondary me-4 mb-2 position-absolute bottom-0" id="${c.id}">Detalles</button>
        <button class="btn btn-secondary mb-2 position-absolute bottom-0 start-50"><a class= "text-favorito text-white" href="./page/error404.html">Favorito</a></button>
     </div>
     `;
      contenido.appendChild(tarjetaManga);
    }
  });
}

function limpiarContenido(){
  const contenido = document.querySelectorAll('.card-contenido');
  contenido?.forEach(c => {
    c.remove();
  })
}

function buscarComic(event) {
  event.preventDefault();
  let textoBuscado = document.getElementById('buscar').value;
  textoBuscado = textoBuscado.toLowerCase();
  let comicFiltrados = [];
  let comicCompletos = listaComics.getArrayComic;
  comicCompletos?.forEach(comic => {
    let textoComic = comic.name + ' ' + comic.category;
    textoComic = textoComic.toLowerCase();;
    if (textoComic.includes(textoBuscado)) {
      comicFiltrados.push(comic);
    }
  });
  cargarContenido(comicFiltrados);
  document.querySelector('.form-main').reset();
}

function cargarBotones() {
  const listaBotones = document.querySelectorAll('.detalle-btn');
  listaBotones.forEach(boton => {
    boton.onclick = function () {
      let url = './page/detalletemplate.html?comic=' + encodeURIComponent(boton.id);
      window.open(url, "_blank");
    };
  });
  const btnLogin = document.getElementById('btn-login');
  btnLogin.onclick = function () { loginUsuario() };
  const btnBuscar = document.querySelector('.btn-buscar');
  btnBuscar.onclick = function (event) { buscarComic(event) };
}

window.onload = function () {
  cargarDestacado(listaComics.getComicFavorite);
  cargarContenido(listaComics.getArrayComic);
  cargarBotones();
  cargarPaginaUsuario();
}




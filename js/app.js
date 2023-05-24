import { listaComics } from "../model/data.js";

function cargarDestacado(comicDestacado) {
  const elementoDestacadoViejo = document.querySelector('.destacado');
  elementoDestacadoViejo.remove();
  const elementoDestacadoNuevo = document.createElement('div');
  elementoDestacadoNuevo.classList.add('destacado', 'container-fluid');
  elementoDestacadoNuevo.innerHTML = `
          <div class="img-main">
            <h2 class="text-white fw-bold ms-5 mt-5">Destacado de la semana</h2>
            <img src="${comicDestacado.toJson().urlImage}" class="img-fluid img-main m-5" alt="main">
          </div>
          <div class="container-fluid d-flex flex-column justify-content-evenly m-5 w-50 text-white descripcion">
            <h2 class="title">${comicDestacado.toJson().name}</h2>
            <br>
            <h5 class="editorial text-white-50 fw-bold">${comicDestacado.toJson().editorial}</h5>
            <h5 class="status">${comicDestacado.toJson().status}</h5>
            <h5 class="categoria">${comicDestacado.toJson().category}</h5>
            <br>
            <hr>
            <p class="sinopsis">${comicDestacado.toJson().synopsis}</p>
            <br>
            <hr>
            <br>
            <div class="container-fluid d-flex">
              <button href="#" class=" detalle btn btn-secondary me-4 mb-2">Detalles</button>
              <button href="#" class="btn btn-secondary mb-2">Favorito</button>
            </div>
          </div>
        `;
  const padreContainer = document.querySelector('.header');
  padreContainer.appendChild(elementoDestacadoNuevo);
}

function cargarContenido(comics) {
  const contenido = document.querySelector('.contenido');
  comics.forEach(c => {
    if (c.publics) {
      const tarjetaManga = document.createElement('div');
      tarjetaManga.classList.add('card', 'm-4');
      tarjetaManga.style.width = '18rem';
      tarjetaManga.innerHTML = `
      <img src="${c.toJson().urlImage}" class="card-img-top" alt="${c.toJson().name}">
      <div class="card-body" style="height:260px;">
        <h4 class="card-title text-white fw-bold">"${c.toJson().name}"</h4>
        <p class="card-text text-white-50">${c.toJson().editorial}</p>
        <p class="card-text text-white fw-bold">${c.toJson().category}</p>
        <p class="card-text text-white fw-bold">${c.toJson().status}</p>
        <button class="detalle-btn btn btn-secondary me-4 mb-2 position-absolute bottom-0" id="${c.toJson().id}">Detalles</button>
        <button class="btn btn-secondary  mb-2 position-absolute bottom-0 start-50">Favorito</button>
     </div>
     `;
      contenido.appendChild(tarjetaManga);
    }
  });
}

function cargarBotonesDetalle() {
  const listaBotones = document.querySelectorAll('.detalle-btn');
  listaBotones.forEach(boton => {
    boton.onclick = function () {
      let url = './page/detalletemplate.html?comic=' + encodeURIComponent(boton.id);
      window.open(url, "_blank");
    };
  });
}

window.onload = function () {
  cargarDestacado(listaComics.getComicFavorite);
  cargarContenido(listaComics.getArrayComic);
  cargarBotonesDetalle();
}



import { listaComics } from "../model/data.js";

function cargarDestacado(comicDestacado) {
    const elementoDestacadoViejo = document.querySelector('.destacado');
    elementoDestacadoViejo.remove();
    const elementoDestacadoNuevo = document.createElement('div');
    elementoDestacadoNuevo.classList.add('destacado', 'container-fluid');
    elementoDestacadoNuevo.innerHTML = `
          <div class="img-main">
            <h2 class="text-white fw-bold ms-5 mt-5">Destacado de la semana</h2>
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
            <div class="container-fluid d-flex">
              <a href="#" class="btn btn-secondary me-4 mb-2">Detalles</a>
              <a href="#" class="btn btn-secondary mb-2">Favorito</a>
            </div>
          </div>
        `;
    const padreContainer = document.querySelector('.header');
    padreContainer.appendChild(elementoDestacadoNuevo);
}

function cargarContenido(comics) {
    const contenido = document.querySelector('.contenido');
    comics.forEach(c => {
        const tarjetaManga = document.createElement('div');
        tarjetaManga.classList.add('card', 'm-4');
        tarjetaManga.style.width = '18rem';
        tarjetaManga.innerHTML = `
           <img src="${c.urlImage}" class="card-img-top" alt="${c.name}">
           <div class="card-body" style="height:260px;">
             <h4 class="card-title text-white fw-bold">${c.name}</h4>
             <p class="card-text text-white-50">${c.editorial}</p>
             <p class="card-text text-white fw-bold">${c.category}</p>
             <p class="card-text text-white fw-bold">${c.status}</p>
             <a href="#" class="btn btn-secondary me-4 mb-2 position-absolute bottom-0">Detalles</a>
             <a href="#" class="btn btn-secondary  mb-2 position-absolute bottom-0 start-50">Favorito</a>
          </div>
        `;
        contenido.appendChild(tarjetaManga);
    })
}

window.onload = function () {
    cargarDestacado(listaComics.favoriteComic);
    cargarContenido(listaComics.arrayComics);
}


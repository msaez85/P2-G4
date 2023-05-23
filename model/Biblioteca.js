class Biblioteca {
    #arrayComics;
    #favoriteComic;
    constructor() {
        this.#arrayComics = localStorage.getItem("listComic") ? JSON.parse(localStorage.getItem("listComic")) : [];
        this.#favoriteComic = localStorage.getItem("comicFavorite") ? JSON.parse(localStorage.getItem("comicFavorite")) : null;
    }

    addArrayComic(comic) {
        let existingComic = this.#arrayComics.find(comics => comics == comic);
        if (existingComic == undefined) {
            this.#arrayComics.push(comic);
            localStorage.setItem("listComic", JSON.stringify(this.#arrayComics));
            return 'Comic Agregado!';
        } else {
            return 'Ya existe el Comic!';
        }
    }
    get getArrayComic(){
        return this.#arrayComics;
    }
    deleteComic(id){
        let deleteComic = this.#arrayComics.find(comics => comics.id == id); 
        if(deleteComic !== undefined){
            this.#arrayComics = this.#arrayComics.filter(comics => comics.id !== id); 
            localStorage.setItem("listComic", JSON.stringify(this.#arrayComics)); 
            return 'Comic Eliminado!'; 
        }else{
            return 'No existe ID del Comic Enviado!'; 
        }
    }
    addComicFavorite(idComic){
        let favoriteComic = this.#arrayComics.find(comics => comics.id == idComic); 
        if(favoriteComic !== undefined){
            localStorage.setItem("comicFavorite", JSON.stringify(favoriteComic)); 
            return 'Comic Agregado Como Favorito!'; 
        }else{
            return 'No existe ID del Comic Enviado!'; 
        }
    }
    get getComicFavorite(){
        return this.#favoriteComic;
    }
}

export{Biblioteca}
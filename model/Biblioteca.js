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
    isNullArrayComic(){
        return this.#arrayComics.length == 0 ? true : false;
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
    clearLocalStorage(){
        localStorage.clear(); 
    }
    updatePublics(idComic){
        if(this.isNullArrayComic){
            this.#arrayComics.map(comic => this.#changePublics(comic, idComic)); 
            localStorage.setItem("listComic", JSON.stringify(this.#arrayComics)); 
            return "Publicacion del Comic Modificada! "; 
        }else{
            return "Lista Vacía de Comic!"
        }
    }
    #changePublics(comic, idComic){
        if(comic.id === idComic){
            if(comic.publics === true){
                comic.publics = false; 
            }else{
                comic.publics = true; 
            }
        }
    }
    updateComic(idComic,updateComic){
        if(this.isNullArrayComic){
        this.#arrayComics.map(comic => this.#changeComic(idComic,updateComic,comic)); 
        localStorage.setItem("listComic", JSON.stringify(this.#arrayComics)); 
         return "Publicacion del Comic Modificado! "; 
        }else{
            return "Lista Vacía de Comic!"; 
        }
    }
    #changeComic(idComic , updateComic,comic){
           if(comic.id === idComic){
            comic.name = updateComic.name; 
            comic.category = updateComic.category; 
            comic.synopsis = updateComic.synopsis;
            comic.price = updateComic.price; 
            comic.editorial = updateComic.editorial; 
            comic.status = updateComic.status; 
            comic.urlVideo = updateComic.urlVideo;
            comic.urlImage = updateComic.urlImage; 
        }
       }
}

export{Biblioteca}
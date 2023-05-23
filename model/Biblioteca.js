class Biblioteca {
    constructor() {
        this.arrayComics = [];
        this.favoriteComic = null;
    }

    addArrayComic(comic) {
        let existingComic = this.arrayComics.find(comics => comics == comic);
        if (existingComic == undefined) {
            this.arrayComics.push(comic);
            localStorage.setItem("listComic", JSON.stringify(this.arrayComics));
            return 'Comic Agregado!';
        } else {
            return 'Ya existe el Comic!';
        }
    }
    get getArrayComic(){
        return this.arrayComics;
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
}
/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor#constructores_por_defecto
 * consultar si se pone o no el constructor......
 */
export{Biblioteca}
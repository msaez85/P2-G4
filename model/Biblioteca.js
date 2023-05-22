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
}
/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor#constructores_por_defecto
 * consultar si se pone o no el constructor......
 */
export{Biblioteca}
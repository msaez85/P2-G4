import { generarID } from "../helpers/help.js";
class Comic {
    constructor(name, category, synopsis, publics, urlVideo, urlImage, editorial = 'EDITORIAL PANINI', price = '9.99', status = 'Publicandose') {
        this.id = generarID();
        this.name = name;
        this.category = category;
        this.synopsis = synopsis;
        this.publics = publics;
        this.urlVideo = urlVideo;
        this.urlImage = urlImage;
        this.editorial = editorial;
        this.price = price;
        this.status = status;
    }


    toJson() {
        return {
            id: this.id,
            name: this.name,
            category: this.category,
            synopsis: this.synopsis,
            publics: this.publics,
            urlVideo: this.urlVideo,
            urlImage: this.urlImage,
            editorial: this.editorial,
            price: this.price,
            status: this.status
        }
    }
}

export{Comic}; 
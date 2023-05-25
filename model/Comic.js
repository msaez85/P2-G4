import { generarID } from "../helpers/help.js";

class Comic {
    #id; 
    #name; 
    #category;
    #synopsis;
    #publics; 
    #urlVideo; 
    #urlImage;
    #editorial; 
    #price;
    #status;
    constructor(name, category, synopsis, publics, urlVideo, urlImage, editorial, price, status) {
        this.#id = generarID();
        this.#name = name;
        this.#category = category;
        this.#synopsis = synopsis;
        this.#publics = publics;
        this.#urlVideo = urlVideo;
        this.#urlImage = urlImage;
        this.#editorial = editorial;
        this.#price = price;
        this.#status = status;
    }

    toJson() {
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category,
            synopsis: this.#synopsis,
            publics: this.#publics,
            urlVideo: this.#urlVideo,
            urlImage: this.#urlImage,
            editorial: this.#editorial,
            price: this.#price,
            status: this.#status
        }
    }
    toUpdateComic(){
        return {
            name: this.#name,
            category: this.#category,
            synopsis: this.#synopsis,
            urlVideo: this.#urlVideo,
            urlImage: this.#urlImage,
            editorial: this.#editorial,
            price: this.#price,
            status: this.#status
        }
    }
}

export { Comic }; 
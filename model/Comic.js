import { generarID } from "../helpers/help.js";
class Comic{
    #id;
    #name;
    #category; 
    #synopsis; 
    #publics; 
    #urlVideo;
    #urlImage; 

    constructor(name , category, synopsis, publics, urlVideo , urlImage){
        this.#id = generarID();
        this.#name = name; 
        this.#category = category; 
        this.#synopsis = synopsis; 
        this.#publics = publics;
        this.#urlVideo = urlVideo; 
        this.#urlImage = urlImage;
    }
    get getID(){
        return this.#id;
    }
    get getName(){
        return this.#name; 
    }
    get getCategory(){
        return this.#category; 
    }
    get getSynopsis(){
        return this.#synopsis; 
    }
    get getPublics(){
        return this.#publics;
    }
    get getUrlVideo(){
        return this.#urlVideo;
    }
    get getUrlImage(){
        return this.#urlImage; 
    }
    set setName(name){
        this.#name = name; 
    }
    set setCategory(category){
        this.#category = category;
    }
    set setSynopsis(synopsis){
        this.#synopsis = synopsis; 
    }
    set setPublic(publics){
        this.#publics = publics; 
    }
    set setUrlVideo(urlVideo){
        this.#urlVideo = urlVideo;
    }
    set setUrlImage(urlImage){
        this.#urlImage = urlImage;
    }
    toJson(){
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category,
            synopsis: this.#synopsis,
            publics: this.#publics,
            urlVideo: this.#urlVideo,
            urlImage: this.#urlImage
        }
    }
}

export{Comic}; 
function RandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let randomId = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        randomId += characters.charAt(randomIndex);
    }
    return randomId;
}


class comic {
    constructor(nombre, categoria, estado, sinopsis, URLimagen, URLvideo) {
        this.id = RandomId();
        this.nombre = nombre;
        this.categoria = categoria;
        this.estado = estado;
        this.sinopsis = sinopsis;
        this.URLimagen = URLimagen;
        this.URLvideo = URLvideo;
        this.publicado = false;
    }

    publicar() {
        this.publicado = true;
    }
}

class biblioteca {
    constructor() {
        this.comics = [];
        this.destacado = null;
    }

    agregarComic(nuevoComic) {
        let flag = false;
        if (this.comics != null) {
            this.comics.forEach(c => {
                if (c.nombre == nuevoComic.nombre && c.categoria == nuevoComic.categoria && c.estado == nuevoComic.estado) {
                    flag = true;
                }
            })
        }
        if (!flag) {
            this.comics.push(nuevoComic);
        }
    }

    setearDestacado(comicDestacado) {
        let flag = false;
        if (this.comics != null) {
            this.comics.forEach(c => {
                if (c.id == comicDestacado.id) {
                    flag = true;
                }
            })
        }
        if (flag) {
            this.destacado = comicDestacado;
        }
    }
}

const gantzSinopsis = `Kei Kurono es un estudiante egoísta y apático que se ve obligado a salvar a una persona de morir atropellada por un tren subterráneo debido a que su compañero de la infancia Masaru Kato lo llama para que le ayude. Como consecuencia él y Kato mueren en el intento.
Posteriormente aparecen en un apartamento visualmente normal con otras personas igual de desconcertadas que ellos. Allí, una misteriosa esfera negra les obliga a participar de un sádico juego y para ello les pone a su disposición todo un exótico arsenal futurista que deberán aprender a usar para combatir a diversas especies de alienígenas y otras amenazas que para la gente común pasan desapercibidas.
Los que llegan a la habitación no son vistos por los humanos mortales hasta que la esfera no los «suelta» después de cada misión. Una vez que cumplen una misión pueden llevarse el equipo que se les entrega (como un arma, un traje especial...) a su casa o a dónde quiera que vayan.
Para cada misión se les da un tiempo limitado y cada vez que vuelven a la habitación, si es que sobreviven, se les otorgan unos puntos dependiendo de cómo actuaron al enfrentarse al objetivo.`;
let gantz = new comic('Gantz', 'Ciencia Ficcion', 'Finalizado', gantzSinopsis, './assets/gantz.jpg', 'https://youtu.be/SJ5ICtGn6u8');
gantz.publicar();

const attackTitanSinopsis = `La historia gira en torno a Eren Jaeger, su hermana adoptiva Mikasa Ackerman y su amigo Armin Arlert. En este mundo, la población humana vive dentro de ciudades rodeadas de enormes muros para protegerse de la aparición de seres gigantescos que devoran personas, los titanes. Un día, el muro más externo es atacado por un supertitán, y el resto de los titanes logran invadir la ciudad.`;
let attackTitan = new comic('Shingeki no Kyojin', 'Accion', 'Finalizado', attackTitanSinopsis, './assets/attackTitan.jpg', 'https://youtu.be/AgBUP8TJqV8');
attackTitan.publicar();

const bleachSinopsis = `Ichigo Kurosaki, de 15 años, es un chico que puede ver fantasmas. A pesar de esa habilidad especial, lleva una vida bastante tranquila. O así era hasta que un día, de pronto, se topa casualmente con una joven que se autodenomina "shinigami" - mensajera de los muertos - y con un espíritu maligno al que ella llama "hollow". ¿Qué hará Ichigo al ver a su familia en peligro?`;
let bleach = new comic('Bleach', 'Supernatural', 'Finalizado', bleachSinopsis, './assets/bleach.jpg', 'https://youtu.be/92TEcszkRBw');
bleach.publicar();

const demonSlayerSinopsis = `El escenario es la era Taisho de Japón. Tanjirou es un joven de buen corazón que vivió en paz con su familia como vendedor de carbón. Su vida normal cambia completamente cuando su familia es asesinada por demonios. La única otra sobreviviente, la hermana menor de Tanjirou, Nezuko, se ha convertido en un demonio feroz. Para devolver a Nezuko a la normalidad y vengarse del demonio que mató a su familia, los dos parten en un viaje. De un joven talento, comienza una historia de aventuras de sangre y espadas.`;
let demonSlayer = new comic('Kimetsu no Yaiba', 'Supernatural', 'Finalizado', demonSlayerSinopsis, './assets/demonSlayer.jpg', 'https://youtu.be/vFFyX928D9k');
demonSlayer.publicar();

const dragonBallSSinopsis = `Dragon Ball Super es la secuela del Manga y anime de Dragon Ball Z después de la Saga de Majin Buu, y está enlazada con las películas Dragon Ball Z: La Batalla de los Dioses y Dragon Ball Z: La Resurrección de F.`;
let dragonBallS = new comic('Dragon Ball Super', 'Accion', 'Emitiendose', dragonBallSSinopsis, './assets/dragonBallS.jpg', 'https://youtu.be/j61ts42E2Ms');
dragonBallS.publicar();

const heroAcademySinopsis = `Izuku Midoriya es sólo un estudiante de secundaria regular en un mundo donde las personas con superpoderes conocidos como “rarezas” son comunes. Sin embargo, sueña con convertirse algún día en un héroe, a pesar de ser acosado por sus compañeros de clase por no tener un peculiaridad. Después de haber sido el único para tratar de salvar a su amigo de la infancia, Katsuki, de un villano, All Might, el héroe más grande del mundo, derrama sobre él su propia peculiaridad, “One For All”.`;
let heroAcademy = new comic('Boku no Hero Academia', 'Ciencia Ficcion', 'Emitiendose', heroAcademySinopsis, './assets/heroAcademy.jpg', 'https://youtu.be/iBRH9Po3gw8');
heroAcademy.publicar();

const hunterXSinopsis = `Los Hunters son personas que se dedican principalmente a rastrear tesoros, descubrir o cazar criaturas mágicas y algunas veces otros hombres. Pero, estas actividades requieren una licencia, y menos de uno entre cien-mil puede pasar el examen de cualificación. Aquellos que logren pasar el duro examen se ganarán el acceso a áreas restringidas y el derecho a llamarse a si mismos Hunters.`;
let hunterX = new comic('Hunter X Hunter', 'Accion', 'Emitiendose', hunterXSinopsis, './assets/hunterX.jpg', 'https://youtu.be/faqmNf_fZlE');
hunterX.publicar();

const narutoSinopsis = `Naruto Uzumaki es un ninja adolescente que tiene encerrado en su interior al Zorro de Nueve Colas. Doce años antes del inicio de la serie, este demonio atacó a la Aldea Oculta de la Hoja, matando a muchas personas. Como consecuencia, el líder de la aldea (el Cuarto Hokage) sacrificó su vida utilizando el Shiki Fujin para sellarlo dentro de Naruto cuando era un recién nacido, con lo que esperaba detener la masacre.`;
let naruto = new comic('Naruto', 'Accion', 'Finalizado', narutoSinopsis, './assets/naruto.jpg', 'https://youtu.be/b5W7aMKQdkU');
naruto.publicar();

const onePieceSinopsis = `La serie comienza con la ejecución de Gol D. Roger, un hombre conocido como el Rey de los Piratas. Poco antes de su muerte, Roger hace mención a su gran tesoro legendario, el One Piece, ya que puede ser tomado por todo aquél que lo desee. Esto marca el inicio de una era conocida como la Gran Era Pirata. Como resultado, un sinnúmero de piratas zarparon hacia Grand Line con el objetivo de encontrarlo`;
let onePiece = new comic('One Piece', 'Piratas', 'Emitiendose', onePieceSinopsis, './assets/onePiece.jpg', 'https://youtu.be/MSXr7O0hu-c');
onePiece.publicar();

const onePunchSinopsis = `La historia tiene lugar en una metrópolis ficticia conocida como Ciudad Z, en Japón. El mundo se ve invadido por extraños monstruos que aparecen misteriosamente y que causan numerosos desastres a la población. Saitama es un poderoso superhéroe calvo que derrota fácilmente a los monstruos u otros villanos con un único golpe de su puño. Debido a esto, Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le puedan igualar.`;
let onePunch = new comic('One Punch Man', 'Accion', 'Emitiendose', onePunchSinopsis, './assets/onePunch.jpg', 'https://youtu.be/erQURy_Ys5Y');
onePunch.publicar();

const saintSeiyaSinopsis = `Cada vez que el mal invade el mundo, aparecen para combatirlo los Caballeros del Zodiaco, guiados por la diosa Atena, como desde la antigüedad. Nuevamente esto ocurre y el encargado de hacerle frente será Seiya, un joven huérfano japonés que es enviado a Grecia para convertirse en caballero de bronce. Una vez de regreso a Japón se reencontrará con sus amigos de la infancia quienes también se han vuelto caballeros tras haber entrenado por años. Ahora competirán entre ellos por ver quién vestirá la armadura de oro de Sagitario. Pero esto no será posible, una vez que sea robada por encargo del Patriarca del Santuario en Grecia, quien se ha pasado del lado del mal. Entonces, los caballeros deberán unirse para defender a la humanidad y proteger a la reencarnación de la diosa Atena, la joven Kido Saori .`;
let saintSeiya = new comic('Saint Seiya', 'Mitologia', 'Finalizado', saintSeiyaSinopsis, './assets/saintSeiya.jpg', 'https://youtu.be/Bu533OKYHyc');
saintSeiya.publicar();

const sevenSinsSinopsis = `Elizabeth Liones, la tercera princesa del Reino de Liones, tras el golpe de estado hecho por los Caballeros Sagrados decide huir y buscar a los ya desaparecidos caballeros que se hacen llamar Los Siete Pecados Capitales, cuya orden está conformado por los peores criminales del reino. Un día cae desmayada en una taberna, los clientes que ya habían escuchado sobre una Armadura andante oxidada, creen que es uno de los Sietes Pecados y todos menos el propietario y su compañero Hawk, huyen asustados.`;
let sevenSins = new comic('Nanatsu no Taizai', 'Aventura', 'Finalizado', sevenSinsSinopsis, './assets/sevenSins.jpg', 'https://youtu.be/x2ex07fceig');
sevenSins.publicar();

let listaMangas = new biblioteca();

listaMangas.agregarComic(gantz);
listaMangas.agregarComic(attackTitan);
listaMangas.agregarComic(bleach);
listaMangas.agregarComic(demonSlayer);
listaMangas.agregarComic(dragonBallS);
listaMangas.agregarComic(heroAcademy);
listaMangas.agregarComic(hunterX);
listaMangas.agregarComic(naruto);
listaMangas.agregarComic(onePiece);
listaMangas.agregarComic(onePunch);
listaMangas.agregarComic(saintSeiya);
listaMangas.agregarComic(sevenSins);

listaMangas.setearDestacado(hunterX);

function cargarDestacado(comicDestacado) {
    const elementoDestacadoViejo = document.querySelector('.destacado');
    elementoDestacadoViejo.remove();
    const elementoDestacadoNuevo = document.createElement('div');
    elementoDestacadoNuevo.classList.add('destacado', 'container-fluid');
    elementoDestacadoNuevo.innerHTML = `
          <div class="img-main">
            <h2 class="text-white fw-bold ms-5 mt-5">Destacado de la semana</h2>
            <img src="${comicDestacado.URLimagen}" class="img-fluid img-main m-5" alt="main">
          </div>
          <div class="container-fluid d-flex flex-column justify-content-evenly m-5 w-50 text-white descripcion">
            <h2 class="title">${comicDestacado.nombre}</h2>
            <br>
            <h5 class="status">${comicDestacado.estado}</h5>
            <h5 class="categoria">${comicDestacado.categoria}</h5>
            <br>
            <hr>
            <p class="sinopsis">${comicDestacado.sinopsis}</p>
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
           <img src=${c.URLimagen} class="card-img-top" alt=${c.nombre}>
           <div class="card-body">
             <h5 class="card-title text-white fw-bold">${c.nombre}</h5>
             <p class="card-text text-white fw-bold">${c.categoria}</p>
             <p class="card-text text-white fw-bold">${c.estado}</p>
             <a href="#" class="btn btn-secondary me-4 w-25">Leer</a>
             <a href="#" class="btn btn-secondary w-50">Favoritos</a>
          </div>
        `;
        contenido.appendChild(tarjetaManga);
    })
}

window.onload = function () {
    cargarDestacado(listaMangas.destacado);
    cargarContenido(listaMangas.comics);
}


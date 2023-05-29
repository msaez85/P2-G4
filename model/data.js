import { Comic } from "./Comic.js";
import { Biblioteca } from "./Biblioteca.js";
import { Usuario, Usuarios } from "./Usuario.js";
import { Estado, TipoRoles } from "./Emun.js";

let listaComics = new Biblioteca();

const gantzSinopsis = `Kei Kurono es un estudiante egoísta y apático que se ve obligado a salvar a una persona de morir atropellada por un tren subterráneo debido a que su compañero de la infancia Masaru Kato lo llama para que le ayude. Como consecuencia él y Kato mueren en el intento.
Posteriormente aparecen en un apartamento visualmente normal con otras personas igual de desconcertadas que ellos. Allí, una misteriosa esfera negra les obliga a participar de un sádico juego y para ello les pone a su disposición todo un exótico arsenal futurista que deberán aprender a usar para combatir a diversas especies de alienígenas y otras amenazas que para la gente común pasan desapercibidas.
Los que llegan a la habitación no son vistos por los humanos mortales hasta que la esfera no los «suelta» después de cada misión. Una vez que cumplen una misión pueden llevarse el equipo que se les entrega (como un arma, un traje especial...) a su casa o a dónde quiera que vayan.
Para cada misión se les da un tiempo limitado y cada vez que vuelven a la habitación, si es que sobreviven, se les otorgan unos puntos dependiendo de cómo actuaron al enfrentarse al objetivo.`;
let gantz = new Comic('Gantz', 'Ciencia Ficcion', gantzSinopsis, true, 'https://www.youtube.com/embed/SJ5ICtGn6u8', './assets/gantz.jpg', 'EDITORIAL PANINI MANGA', '13.25', 'Finalizado');


const attackTitanSinopsis = `La historia gira en torno a Eren Jaeger, su hermana adoptiva Mikasa Ackerman y su amigo Armin Arlert. En este mundo, la población humana vive dentro de ciudades rodeadas de enormes muros para protegerse de la aparición de seres gigantescos que devoran personas, los titanes. Un día, el muro más externo es atacado por un supertitán, y el resto de los titanes logran invadir la ciudad.`;
let attackTitan = new Comic('Shingeki no Kyojin', 'Accion', attackTitanSinopsis, true, 'https://www.youtube.com/embed/AgBUP8TJqV8', './assets/attackTitan.jpg', 'EDITORIAL PANINI MANGA', '11.74', 'Finalizado');


const bleachSinopsis = `Ichigo Kurosaki, de 15 años, es un chico que puede ver fantasmas. A pesar de esa habilidad especial, lleva una vida bastante tranquila. O así era hasta que un día, de pronto, se topa casualmente con una joven que se autodenomina "shinigami" - mensajera de los muertos - y con un espíritu maligno al que ella llama "hollow". ¿Qué hará Ichigo al ver a su familia en peligro?`;
let bleach = new Comic('Bleach', 'Sobrenatural', bleachSinopsis, true, 'https://www.youtube.com/embed/92TEcszkRBw', './assets/bleach.jpg', 'EDITORIAL PANINI MANGA', '9.50', 'Finalizado');


const demonSlayerSinopsis = `El escenario es la era Taisho de Japón. Tanjirou es un joven de buen corazón que vivió en paz con su familia como vendedor de carbón. Su vida normal cambia completamente cuando su familia es asesinada por demonios. La única otra sobreviviente, la hermana menor de Tanjirou, Nezuko, se ha convertido en un demonio feroz. Para devolver a Nezuko a la normalidad y vengarse del demonio que mató a su familia, los dos parten en un viaje. De un joven talento, comienza una historia de aventuras de sangre y espadas.`;
let demonSlayer = new Comic('Kimetsu no Yaiba', 'Sobrenatural', demonSlayerSinopsis, true, 'https://www.youtube.com/embed//RnU0rBz0DPI', './assets/demonSlayer.jpg', 'EDITORIAL PANINI MANGA', '7.84', 'Finalizado');


const dragonBallSSinopsis = `Dragon Ball Super es la secuela del Manga y anime de Dragon Ball Z después de la Saga de Majin Buu, y está enlazada con las películas Dragon Ball Z: La Batalla de los Dioses y Dragon Ball Z: La Resurrección de F.`;
let dragonBallS = new Comic('Dragon Ball Super', 'Accion', dragonBallSSinopsis, true, 'https://www.youtube.com/embed/j61ts42E2Ms', './assets/dragonBallS.jpg', 'EDITORIAL PANINI MANGA', '12.55', 'Publicandose');


const heroAcademySinopsis = `Izuku Midoriya es sólo un estudiante de secundaria regular en un mundo donde las personas con superpoderes conocidos como “rarezas” son comunes. Sin embargo, sueña con convertirse algún día en un héroe, a pesar de ser acosado por sus compañeros de clase por no tener un peculiaridad. Después de haber sido el único para tratar de salvar a su amigo de la infancia, Katsuki, de un villano, All Might, el héroe más grande del mundo, derrama sobre él su propia peculiaridad, “One For All”.`;
let heroAcademy = new Comic('Boku no Hero Academia', 'Accion', heroAcademySinopsis, true, 'https://www.youtube.com/embed/iBRH9Po3gw8', './assets/heroAcademy.jpg', 'EDITORIAL PANINI MANGA', '14.27', 'Publicandose');


const hunterXSinopsis = `Los Hunters son personas que se dedican principalmente a rastrear tesoros, descubrir o cazar criaturas mágicas y algunas veces otros hombres. Pero, estas actividades requieren una licencia, y menos de uno entre cien-mil puede pasar el examen de cualificación. Aquellos que logren pasar el duro examen se ganarán el acceso a áreas restringidas y el derecho a llamarse a si mismos Hunters.`;
let hunterX = new Comic('Hunter X Hunter', 'Aventura', hunterXSinopsis, true, 'https://www.youtube.com/embed/faqmNf_fZlE', './assets/hunterX.jpg', 'EDITORIAL PANINI MANGA', '6.50', 'Publicandose');


const narutoSinopsis = `Naruto Uzumaki es un ninja adolescente que tiene encerrado en su interior al Zorro de Nueve Colas. Doce años antes del inicio de la serie, este demonio atacó a la Aldea Oculta de la Hoja, matando a muchas personas. Como consecuencia, el líder de la aldea (el Cuarto Hokage) sacrificó su vida utilizando el Shiki Fujin para sellarlo dentro de Naruto cuando era un recién nacido, con lo que esperaba detener la masacre.`;
let naruto = new Comic('Naruto', 'Aventura', narutoSinopsis, true, 'https://www.youtube.com/embed/b5W7aMKQdkU', './assets/naruto.jpg', 'EDITORIAL PANINI MANGA', '7.65', 'Finalizado');


const onePieceSinopsis = `La serie comienza con la ejecución de Gol D. Roger, un hombre conocido como el Rey de los Piratas. Poco antes de su muerte, Roger hace mención a su gran tesoro legendario, el One Piece, ya que puede ser tomado por todo aquél que lo desee. Esto marca el inicio de una era conocida como la Gran Era Pirata. Como resultado, un sinnúmero de piratas zarparon hacia Grand Line con el objetivo de encontrarlo`;
let onePiece = new Comic('One Piece', 'Aventura', onePieceSinopsis, true, 'https://www.youtube.com/embed/MSXr7O0hu-c', './assets/onePiece.jpg', 'EDITORIAL PANINI MANGA', '10.15', 'Publicandose');


const onePunchSinopsis = `La historia tiene lugar en una metrópolis ficticia conocida como Ciudad Z, en Japón. El mundo se ve invadido por extraños monstruos que aparecen misteriosamente y que causan numerosos desastres a la población. Saitama es un poderoso superhéroe calvo que derrota fácilmente a los monstruos u otros villanos con un único golpe de su puño. Debido a esto, Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le puedan igualar.`;
let onePunch = new Comic('One Punch Man', 'Accion', onePunchSinopsis, true, 'https://www.youtube.com/embed/erQURy_Ys5Y', './assets/onePunch.jpg', 'EDITORIAL PANINI MANGA', '9.54', 'Publicandose');


const saintSeiyaSinopsis = `Cada vez que el mal invade el mundo, aparecen para combatirlo los Caballeros del Zodiaco, guiados por la diosa Atena, como desde la antigüedad. Nuevamente esto ocurre y el encargado de hacerle frente será Seiya, un joven huérfano japonés que es enviado a Grecia para convertirse en caballero de bronce. Una vez de regreso a Japón se reencontrará con sus amigos de la infancia quienes también se han vuelto caballeros tras haber entrenado por años. Ahora competirán entre ellos por ver quién vestirá la armadura de oro de Sagitario. Pero esto no será posible, una vez que sea robada por encargo del Patriarca del Santuario en Grecia, quien se ha pasado del lado del mal. Entonces, los caballeros deberán unirse para defender a la humanidad y proteger a la reencarnación de la diosa Atena, la joven Kido Saori .`;
let saintSeiya = new Comic('Saint Seiya', 'Mitologia', saintSeiyaSinopsis, true, 'https://www.youtube.com/embed/Bu533OKYHyc', './assets/saintSeiya.jpg', 'EDITORIAL PANINI MANGA', '13.28', 'Finalizado');


const sevenSinsSinopsis = `Elizabeth Liones, la tercera princesa del Reino de Liones, tras el golpe de estado hecho por los Caballeros Sagrados decide huir y buscar a los ya desaparecidos caballeros que se hacen llamar Los Siete Pecados Capitales, cuya orden está conformado por los peores criminales del reino. Un día cae desmayada en una taberna, los clientes que ya habían escuchado sobre una Armadura andante oxidada, creen que es uno de los Sietes Pecados y todos menos el propietario y su compañero Hawk, huyen asustados.`;
let sevenSins = new Comic('Nanatsu no Taizai', 'Aventura', sevenSinsSinopsis, true, 'https://www.youtube.com/embed/NvGDfcrhb0Y', './assets/sevenSins.jpg', 'EDITORIAL PANINI MANGA', '8.26', 'Finalizado');


const xmenSinopsis = `Hace poco, los Nuevos Mutantes regresaron de una misión en el espacio Shiar y trajeron con ellos un fascinante y extraño objeto que será la causa de una terrible lucha para evitar la destrucción total de su hogar. Mientras tanto, Forge se entera que su antiguo invento, del cual se arrepiente y avergüenza de haber creado, está siendo usado por los enemigos de la raza mutante para eliminarla.
Hace meses Domino fue capturada y desollada, sus tejidos fueron usados para diseñar asesinos aumentados genéticamente. Desde entonces, sus poderes de suerte han disminuido. Siguiendo una ola de asesinatos imposibles, Domino persiguió a una asesina que parece tener tanta suerte como ella solía tener y que está intentando detener a toda costa la presentación de una legislación pro-mutantes a la Cámara. Gracias a un golpe de intuición, Sage descubrió el origen de la extraña suerte que acompaña a esos asesinatos. Domino y Colossus intentarán destruir la proliferación de los codiciados y misteriosos tréboles.
Después de que X-Force asaltó secretamente Terra Verde, se creyó que la amenaza teleflorónica había sido superada. Pero ahora el país está completamente incomunicado. X-Force se encontró frente a una Terra Verde completamente transformada en una selva inexplorada donde la amenaza teleflorónica destruyó todo rastro de vida.
Mientras rescataba a unos mutantes en la Bahía de Madripoor, la capitana Kate Pryde fue traicionada y asesinada. A medida que la tripulación de la Marauder se enteraba de lo ocurrido, su pesar rápidamente se volvió ira contra sus múltiples enemigos. Los “grandes cerebros” están agotando hasta el último recurso en sus manos para revivirla, pero… lo lograrán ¿o es una misión imposible?`;
let xmen = new Comic('X-MEN (2023) 05', 'Ciencia Ficcion', xmenSinopsis, true, 'https://www.youtube.com/embed/sdwjlOSsR1M', './assets/xmen.jpg', 'EDITORIAL PANINI MARVEL', '12.85', 'Finalizado');

const daredevilSinopsis = `Todo gran héroe tiene un origen. El de Matt Murdock se encuentra en una cama de hospital, en un vendaje rasposo, una amalgama de estridente ruido martilleando sus sentidos. Y unas cuerdas gastadas, un cuadrilátero ensangrentado, una noche eterna. Y, sobre todo, Elektra. Elektra. Elektra. Los primeros pasos del Diablo Guardián ya recorrían un camino empedrado de las mejores intenciones. Quizá, un camino directo al infierno.`;
let daredevil = new Comic('DAREDEVIL: EL HOMBRE SIN MIEDO', 'Accion', daredevilSinopsis, true, 'https://www.youtube.com/embed/qDPtWLbL3QI', './assets/daredevil.jpg', 'EDITORIAL PANINI MARVEL', '13.50', 'Finalizado');

const avengerSinopsis = `El cuartel general impenetrable de los Avengers está bajo el ataque de la versión suprema y más poderosa que existe del Dr. Doom y de un Thanos joven, salvaje y asesino que todavía está cubierto con la sangre de su madre. Black Panther lucha para defender la Montaña junto a sus nuevos y sorprendentes compañeros de equipo: el Rey de Atlantis, Namor y la poderosa Valquiria, Jane Foster. Mientras tanto, Tony Stark el increíble Ant-Man, se encuentra en la Tierra-818 tratando de salvar a Robbie Reyes, un Ghost Rider distinto a cualquier otro en todo el Multiverso, quien sigue cambiando, sigue convirtiéndose en lo que siempre estuvo destinado a ser. Rodeados de un Deathlok que se niega a morir, un brutalmente vigoroso Wonder Man, un Vision a medio construir y la Mole del Infinito. Al parecer juntos son los Héroes más poderosos de la Tierra en un mundo invadido por Black Skull. Pero en este día, un día como ninguno otro, tendrán que ser suficientes.`;
let avenger = new Comic('AVENGERS (2023) 05', 'Accion', avengerSinopsis, true, 'https://www.youtube.com/embed/fPNO7Q8rhOU', './assets/avenger.jpg', 'EDITORIAL PANINI MARVEL', '7.84', 'Finalizado');

const xmenIISinopsis = `Los representantes políticos de las más poderosas naciones convocan al Consejo de Krakoa, integrado por el Profesor X, Magneto y Apocalipsis, a una reunión cumbre en nombre de la paz. Les tienden una trampa pero los guardaespaldas logran someter a los agresores, sin embargo, se genera una fuerte tensión política entre ambas realidades. Xavier propone crear una CIA Mutante, e inician las investigaciones para descubrir cuál es el origen de los ataques como el que causó su muerte.Siguen las agresiones a Krakoa en distintos frentes ejecutadas por misteriosos escuadrones, por lo que Kid Omega, Domino y Wolverine son enviados a neutralizarlos sin saber que el enemigo ya estaba preparado esperándolos. Wolverine y Kid Omega son derrotados y Domino queda atrapada en Krakoa. Mientras tanto la capitana Kate Pride ha comenzado a actuar como la Reina Roja de la compañía Hellfire y rescata a mutantes de las naciones enemigas. Los Homines Verendi hacen su primer ataque a las naves Mutantes logrando introducir un dispositivo de espionaje en el cuerpo de Pyro. Sebastián Shaw prepara una gran jugada para liberarse de Kate Pryde y quedarse con su silla en el Consejo, ¿Lo logrará?`;
let xmenII = new Comic('X-MEN (2023) 03', 'Ciencia Ficcion', xmenIISinopsis, true, 'https://www.youtube.com/embed/YeTZgBlpm2k', './assets/xmenII.jpg', 'EDITORIAL PANINI MARVEL', '12.55', 'Publicandose');

const guardianesSinopsis = `Son una pandilla de aventureros zarrapastrosos con la misión de proteger a todo el Marvel-Verso. ¡Son los Guardianes de la Galaxia! Cuando la Tierra se enfrenta a una amenaza cósmica tan grande que ni siquiera sus héroes más poderosos pueden enfrentarla solos, los Avengers se unen a los Guardianes, pero ¿podrán dos equipos tan distintos trabajar juntos para salvar el día? ¡Y cuando Deaths Head, uno de los cazarrecompensas más grandes del espacio pone en su mira a los Guardianes, Star-Lord, Gamora, Rocket, Drax y Groot se verán en verdaderos problemas! Además están acostumbrados a ser los más buscados en la galaxia, ¡¿por qué Groot está tratando de apresar a su mejor amigo Rocket?! ¡Y para Star-Lord la música lo es todo!`;
let guardianes = new Comic('GUARDIANES DE LA GALAXIA', 'Ciencia Ficcion', guardianesSinopsis, true, 'https://www.youtube.com/embed/_ZKZ_lQ5FWQ', './assets/guardianes.jpg', 'EDITORIAL PANINI MARVEL', '14.27', 'Publicandose');

const milesmoralesSinopsis = `La vida de Miles como SPIDER-MAN es una batalla constante. Supervillanos, trabajos escolares, equilibrar una vida personal con sus responsabilidades como héroe, hijo y hermano... pero cada vez que cae, Miles se levanta más fuerte que antes. La CORPORACIÓN BEYOND denunció a Miles por infracción del nombre y la imagen de Spider-Man. Ellos tienen a su propio Spidey, BEN REILLY. Miles y su clon Shift, se abrieron camino a través del escondite del ASESOR , derrotando al poderoso QUANTUM en el camino. Después de acabar con el Asesor para siempre, Miles se topó con los que parecían ser monitores.`;
let milesmorales = new Comic('MILES MORALES: SPIDER-MAN', 'Aventura', milesmoralesSinopsis, true, 'https://www.youtube.com/embed/FcP3zSpCHYM', './assets/milesmorales.jpg', 'EDITORIAL PANINI COMIC', '6.50', 'Publicandose');

const wolverineSinopsis = `Después de una serie de muertes misteriosas en Burns, Alaska, los agentes especiales Sally Pierce y Tad Marshall investigan, pero ¡pronto descubren que ocurren más cosas de las que se ven a simple vista! Una cabaña destartalada en medio de la nada. Niños salvajes al acecho en los árboles. Un culto siniestro que adora en una catedral en la noche. Y un asesino en serie suelto. Todos tienen sus propias sospechas sobre el culpable, pero la evidencia sigue apuntando a los investigadores hacia un ser solitario con garras. ¡A medida que aumenta el número de muertos y la pequeña ciudad se vuelve más caótica, un hombre —un monstruo— se encuentra en el centro de todo!  ¡Es una historia de Logan como ninguna otra!`;
let wolverine = new Comic('WOLVERINE: LA LARGA NOCHE', 'Aventura', wolverineSinopsis, true, 'https://www.youtube.com/embed/LVpO2nrPW2E', './assets/wolverine.jpg', 'EDITORIAL PANINI MARVEL', '7.65', 'Finalizado');

const avengerIISinopsis = `Panini trae para ti la historia que redefinió no solo a la Comunidad Superheroica, sino la forma de entender el deber y la libertad: CIVIL WAR. Absolutamente nadie está por encima de la ley, pero nada positivo surge de un estado totalitario. Un incidente ha segado varias vidas y alguien debe hacerse responsable. El encono de la población exige acciones contundentes, pero cuando uno de los principales héroes se rehúsa a ir en contra de aquellos que arriesgan sus vidas para proteger a la nación, se desata el caos, y los héroes deberán elegir un bando, ¡pues todos están convencidos de que su postura es la única que creará un mundo mejor!`;
let avengerII = new Comic('CIVIL WAR', 'accion', avengerIISinopsis, true, 'https://www.youtube.com/embed/MrhOR5fii0w', './assets/avengerII.jpg', 'EDITORIAL PANINI MARVEL', '10.15', 'Publicandose');

const starwarsSinopsis = `Alba Escarlata amenaza con traer el caos a todos los rincones del Imperio; Vader, consternado ante tal osadía, decide entrar en acción para establecer el orden en la Galaxia. Así, reúne a un extraño grupo de héroes y asesinos para exterminar a todos los criminales infiltrados en el gobierno y la milicia. Mientras tanto, Sabé sigue el rastro del Señor Oscuro y descubre pistas de su verdadera relación con Padme.`;
let starwars = new Comic('STAR WARS - DARTH VADER (2021) 04', 'Ciencia Ficcion', starwarsSinopsis, true, 'https://www.youtube.com/embed/QYMETt578MM', './assets/starwars.jpg', 'EDITORIAL PANINI COMIC', '9.54', 'Finalizado');

const xmenIIISinopsis = `Comienza Amanecer X ¡Es el inicio de la saga de Cyclops y su escuadrón cuidadosamente seleccionado de poderosos mutantes! Los Marauders Storm, Pyro, Bishop y Iceman navegan por los mares del mundo para proteger a sus compañeros genéticos, dirigidos por la capitana Kate Pride. Están financiados por Emma Frost y la Compañía Distribuidora Hellfire. Mientras tanto, en la Tierra, X-Force es la CIA del mundo mutante: mitad rama de inteligencia: Bestia, Jean Grey y Sage y mitad operaciones especiales: Wolverine, Kid Omega y Domino. ¡En un mundo perfecto no habría necesidad de X-Force!`;
let xmenIII = new Comic('X-MEN (2023) 01', 'Mitologia', xmenIIISinopsis, true, 'https://www.youtube.com/embed/qrS4cTKINfI', './assets/xmenIII.jpg', 'EDITORIAL PANINI MARVEL', '13.28', 'Finalizado');

const starwarsIISinopsis = `Mientras la Rebelión intenta reunir sus fuerzas para hacer un último esfuerzo por derrotar al malvado Imperio Galáctico, Luke se da cuenta de que es momento de dar el siguiente paso en su camino a convertirse en Jedi. Pero si la Orden Jedi ya no existe, ¿en dónde puede hallar el legado que necesita tan desesperadamente? La voz del Maestro Yoda será una pieza clave en este viaje, pero Yoda no enseñará a Luke la lección que este debe aprender. ¡Esa lección tomará (y también le dará) mucho más de lo que el joven Skywalker había imaginado! Asimismo, comienza la cacería final entre la comandante Ellian Zahra y la General Leia Organa. Además, luego de una misión que salió mal, la piloto rebelde Shara Bey, madre de Poe Dameron, quedó rezagada a bordo de un destructor estelar y ya no tiene mucho tiempo. ¡Todo esto y una celebración de Star Wars que abarca la Galaxia entera!`;
let starwarsII = new Comic('STAR WARS 04 - REINO ESCARLATA', 'Ciencia Ficcion', starwarsIISinopsis, true, 'https://www.youtube.com/embed/_9FcJaEWIgg', './assets/starwarsII.jpg', 'EDITORIAL PANINI COMIC', '8.26', 'Finalizado');

const spidermanSinopsis = `May “Mayday” Parker, Spider-Gwen, Ben Reilly, Kaine, Spider-Ham, Silk, Miguel OHara, Superior Spider-Man, Capitán Universo, Spider-U.K., Spider-Man Noir... todos tus héroes arácnidos favoritos están en esta aventura. Si no conoces a alguno, aún estás a tiempo de hacerlo... pero date prisa, porque no todos sobrevivirán al encuentro con Los Herederos.`;
let spiderman = new Comic('SPIDER-MAN: SPIDER-VERSE', 'Aventura', spidermanSinopsis, true, 'https://www.youtube.com/embed/shW9i6k8cB0', './assets/spiderman.jpg', 'EDITORIAL PANINI MARVEL', '8.26', 'Finalizado');

let usuarioRegular1 = new Usuario('Mario Antonio Saez', 'msaez@gmail.com', '123', TipoRoles.usuario, Estado.aprobado);
let usuarioRegular2 = new Usuario('Pricila Moya', 'pmoya@gmail.com', '123', TipoRoles.usuario, Estado.aprobado);
let usuarioRegular3 = new Usuario('Luciano Duran', 'lduran@gmail.com', '123', TipoRoles.usuario, Estado.aprobado);
let usuarioRegular4 = new Usuario('Guillermo Craven', 'gcraven@gmail.com', '123', TipoRoles.usuario, Estado.aprobado);
let usuarioAdmin = new Usuario('Usuario Administrador', 'admin@gmail.com', '456', TipoRoles.administrador, Estado.aprobado);

let listaUsuariosComics = new Usuarios();


if (listaComics.isNullArrayComic()) {
    /**Cargamos comic de prueba */
    listaComics.addArrayComic(spiderman.toJson());
    listaComics.addArrayComic(starwarsII.toJson());
    listaComics.addArrayComic(xmenIII.toJson());
    listaComics.addArrayComic(starwars.toJson());
    listaComics.addArrayComic(avengerII.toJson());
    listaComics.addArrayComic(wolverine.toJson());
    listaComics.addArrayComic(milesmorales.toJson());
    listaComics.addArrayComic(guardianes.toJson());
    listaComics.addArrayComic(xmenII.toJson());
    listaComics.addArrayComic(avenger.toJson());
    listaComics.addArrayComic(daredevil.toJson());
    listaComics.addArrayComic(xmen.toJson());
    listaComics.addArrayComic(sevenSins.toJson());
    listaComics.addArrayComic(saintSeiya.toJson());
    listaComics.addArrayComic(onePunch.toJson());
    listaComics.addArrayComic(onePiece.toJson());
    listaComics.addArrayComic(gantz.toJson());
    listaComics.addArrayComic(attackTitan.toJson());
    listaComics.addArrayComic(bleach.toJson());
    listaComics.addArrayComic(demonSlayer.toJson());
    listaComics.addArrayComic(dragonBallS.toJson());
    listaComics.addArrayComic(heroAcademy.toJson());
    listaComics.addArrayComic(hunterX.toJson());
    listaComics.addArrayComic(naruto.toJson());

    /**Ponemos un comic favorito por default */
    listaComics.addComicFavorite(spiderman.toJson().id);
}


if (listaUsuariosComics.isNullListadoUsuarios()) {
    listaUsuariosComics.agregarUsuario(usuarioRegular1);
    listaUsuariosComics.agregarUsuario(usuarioRegular2);
    listaUsuariosComics.agregarUsuario(usuarioRegular3);
    listaUsuariosComics.agregarUsuario(usuarioRegular4);
    listaUsuariosComics.agregarUsuario(usuarioAdmin);
}
export { listaComics, listaUsuariosComics };



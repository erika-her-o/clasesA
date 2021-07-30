// 1._OBJETO LITERAL
// la forma más sencilla de todas, consiste en declarar 
// una variable cuyo valor es un objeto, y asignar las propiedades a mano.
/*
let albumMusical = {
    genero: "soul",
    artista: "The Weeknd",
    titulo: "Starboy",
    lanzamiento: "11-25-2018",
}

*/

//2._FUNCIÓN
// Es una forma automática de generar objetos.Se aprovecha de la 
// parametrización de valores para incluirlos en un objeto retornado 
// por la función.
/*
function crearAlbum(genero,artista,titulo,lanzamiento) {
    return {
        genero: genero,
        artista: artista,
        titulo: titulo,
        lanzamiento: lanzamiento 
    }
};
let albumMusical = crearAlbum("soul","The Weeknd","Starboy","11-25-2018");

//LECTURA DE VALORES
console.log(albumMusical.genero);
console.log(albumMusical.titulo);
console.log(albumMusical.ventas);
*/
//-----------------------------------------------

let albumes = [
  {
      genero: "dance",
      artista: "Rozes",
      titulo: "Under the Grave",
      lanzamiento: "02-14-2016",
    },
    {
      genero: "soul",
      artista: "The Weeknd",
      titulo: "Starboy",
      lanzamiento: "11-25-2018",
    },
];

//¿COMO MOSTRAR EL SEGUNDO OBJETO DEL ARRAY POR CONSOLA?
console.log(albumes[1]);

//¿COMO MOSTRAR LA PROPIEDAD TITULO
console.log(albumes[1].titulo);



let albumes = [
    {
      id: 1,
      genero: "dance",
      artista: "Rozes",
      titulo: "Under the Grave",
      lanzamiento: "02-14-2016",
    },
    {
      id: 2,
      genero: "soul",
      artista: "The Weeknd",
      titulo: "Starboy",
      lanzamiento: "11-25-2018",
    },
    {
      id: 3,
      genero: "pop",
      artista: "Sia",
      titulo: "Cheap Thrills",
      lanzamiento: "4-13-2017",
    },
    {
      id: 4,
      genero: "rock",
      artista: "Queen",
      titulo: "The Miracle",
      lanzamiento: "5-22-1989",
    },
    {
      id: 5,
      genero: "pop",
      artista: "Ariana Grande",
      titulo: "Sweetener",
      lanzamiento: "4-13-2017",
    },
    {
      id: 6,
      genero: "pop",
      artista: "NSYNC",
      titulo: "No strings attached",
      lanzamiento: "3-29-2000",
    },
    {
      id: 7,
      genero: "pop",
      artista: "Little Mix",
      titulo: "Confetti",
      lanzamiento: "11-6-2020",
    }
  ];
  
  // 1. mostrar el primer albúm por consola
    console.log(albumes[0]);
  
  // 2. mostrar el titulo del último albúm por consola(2 OPCIONES)
    console.log(albumes[6].titulo);
    console.log(albumes[6]['titulo']);

  // 3. crear un ciclo que muestre todos los albumes de la colección
    for (let index = 0; index < albumes.length; index++) {
        console.log(albumes[index]);
    }

  // 4. crear un ciclo que muestre solo los artistas de la colección
  for (let index = 0; index < albumes.length; index++) {
    console.log(albumes[index].artista);
  }   

  // 5. crear un ciclo que muestre solo los titulos de la colección
  for (let index = 0; index < albumes.length; index++) {
    console.log(albumes[index].titulo);
  }  

  // 6. crear una función que muestre un albúm por consola, a través de un id (se deberá agregar un id a cada albúm)
  // la definición puede ser esta:
  function mostrarAlbum(id) {
    for (let index = 0; index < albumes.length; index++) {
        if(albumes[index].id === id) {
            console.log(albumes[index]);
            break;
        }
      }
  }
  
  // y la invocación, esta:
  mostrarAlbum(3); 
  // mostrar por consola el tercer albúm
  


  // EXTRAS:
  
  // 7. crear una función que agregue un albúm nuevo a la colección
  
  // 8. crear una función que elimine un albúm de la colección, según un id

  console.log(window === this);
  window.age = 10; 
  console.log(window);
  function Person() {
    this.age = 42;
    setTimeout(function() {// <-- La función tradicional se está ejecutando en el ámbito de window
        console.log("this.age", this.age); // genera "10" porque la función se ejecuta en el ámbito de window
      }, 100);
  }
  
 let p = new Person();
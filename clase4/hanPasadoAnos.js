//Escribe un ciclo for  que muestre por consola los números desde el 0 hasta tu edad. 
//ciclo del 0 al 28
/*
for(let age = 0; age <= 28; age++) {
    console.log(age);
};
*/


//Abstrae el ciclo anterior en una función, que tome como argumento un número (representando una edad),
// y que cuando se invoque esa función, muestre por consola los números del 0 a esa edad.


function mostrarNumeros(age) {
    for(let age = 0; age <= 5; age++) {
        console.log(age);
    };
};
let age = 18;
mostrarNumeros(age);


//------------------------------
let referentes = [
    "@wesbox",
    "@dan_abramov",
    "@stolinkski",
    "@ryanflorence",
    "@kentcdodds",
    "@sophiebits",
    "@acdlite",
    "@sebmarkbage",
    "@stevekinney"
];
  
  // 1. Muestra por consola el array de referentes

 function mostrarPorConsola(follow) {
    for(let i = 0; i <= follow.length; i++){
        console.log(follow[i]);
    };
  }
  mostrarPorConsola(referentes);
  
 
  // 2. Agrega un par de usernames utilizando los metodos unshift y push
    function agregar(referentes) {
        referentes.push(referentes);
    }

    agregar("@ERIKA");
    console.log(referentes);

  
  // 3. Vuelve a mostrar el array de referentes para verificar que los usernames fueron agregados 

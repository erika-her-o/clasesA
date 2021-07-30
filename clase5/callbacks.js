//al parametrizar la cantidad de veces, que el ciclo se repite "n" veces.
//Se especifica cuantas veces se quiere que el ciclo corra a traves del
// primer parametro que se le coloque en "iterar()".

//En este caso se imprime del 0 al 9
// n será reemplazada por el 9


// function iterar(n, accion) {
//     for (let i = 0; i <= n; i++) {
//         accion(i);;
//     }
// };


// iterar(9, console.log); // del 0 al 9


//***reutilizar la función y pasar un mensaje por consola******** */

// function iterar(n, accion) {
//     for (let i = 0; i <= n; i++) {
//         accion(i);;
//     } 

 let etiquetas = [];
// iterar(5, function (numero) {
//     etiquetas.push("Etiqueta " + numero);
// });

//1 una función que agregue "etiquetas" a un array
//["etiqueta 0 ", "etiqueta 1", "etiqueta 2"]

function agregarEtiquetas(numeroEtiqueta) {
    etiquetas.push("etiquetas " + numeroEtiqueta);
}

agregarEtiquetas(0);
agregarEtiquetas(1);
agregarEtiquetas(2);
agregarEtiquetas(3);

console.log(agregarEtiquetas);


//2 incorporar esa función como un callback en iterar()
console.log("empieza el ciclo");
for (let index = 0; index < 4; index++) {
  console.log(index);
}
    console.log("termina el ciclo");

// 1. Escribe un ciclo que muestre por consolas los números del 1 al 10.
// for (let numbers = 1; numbers <= 10; numbers++) {
//     console.log(numbers);
// };

// 2. Escribe un ciclo que muestre por consolas los números del 10 al 1.
// for (let numbers = 10; numbers >= 1; numbers--) {
//     console.log(numbers);
// };

// 3. Escribe un ciclo que vaya desde 0 hasta 30 y, si el número de iteración es par, imprimir por consola “emparedado”.

// for (let pairs = 0; pairs <= 30; pairs++) {
//     if (pairs % 2 === 0){
//         console.log("emparedado " + pairs);
//     } else (console.log(pairs));
// };


// 4. Crea la función repetir(n) la cual ejecute un ciclo que empezará siempre desde 0,
//  pero que termina en n, mostrando por consola cada iteración.

function repetir(n) {
    for (let i = 0; i < n; i++){
        console.log(i + 1);
    }
}
repetir(10);


// 5. Crea la función repetirMensaje(n, mensaje) la cual ejecuta un ciclo que empezará 
//  siempre desde 0, pero que termina en n, repitiendo por consola un mensaje especificado.

function repetirMensaje(n, mensaje) {
    for (let i = 0; i < n; i++) {
        console.log(i, mensaje)
    };
};
repetirMensaje (5, 'debo aprender sobre ciclos');





// CICLOS + ARRAYS
/*
let tareas = [
    "Terminar de leer la bitácora 21",
    "Hacer el challenge",
    "Empezar a ver The OA en Netflix",
    "Aprender sobre arrays"
];
for (let index = 0; index < tareas.length; index++) {
    console.log(tareas[index])
}
*/


/*---------------------------------------------------*/
/*
let frutas = ["manzana", "pera", "uva", "banana"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};
*/

// let frutas = ["manzana", "pera", "uva", "banana"];
// let personas = ["Joan", "Carla", "Miranda", "Nico"];
// let notas = [10, 5, 7, 9, 5, 8.8, 9, 10, 10, 10];
// let resumenTDC = [22563.40, 1145, 109, 14223.12];

// function mostrarPorConsola(lista) {
//     for(let i = 0; i <= lista.length; i++){
//         console.log(lista[i]);
//     };
// }

// mostrarPorConsola(frutas);
// mostrarPorConsola(personas);
// mostrarPorConsola(notas);
// mostrarPorConsola(resumenTDC);


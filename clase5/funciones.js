//--------------null y underfined---------------

// son valores que se utilizan para denotar 
//la ausencia de datos

// ******* poner || sirve como doble seguro ,para 
//verificar que una variable no tiene la data 
//para continuar con el flujo de la aplicación.

// let nombre;

// if(nombre === undefined || nombre === null) {
//     console.log("el nombre no puede estar vacio");
// }else {
//     console.log("el ingreso de dato se hecho con exito");
// }

// let persona = {
//     nombre: "Johana",
//     saluda: function() {
//             console.log("hola soy" + this.nombre)
//     }
// }



//------------CALLBACK-------------
// function iterar(n, accion) {
//     for(let i = 0; i <= n; i++) {
//         accion(i);
//     }
// }
// //iterar(9, console.log);
// console.log(console);

// //Como poner mensaje de error 
// console.error("MENSAJE DE ERRORRRRRRRR");

// // Como poner mensaje de advertencia
// console.warn("MENSAJE DE ADVERTENCIA");



//----PASANDO FUNCIONES COMO ARGUMENTOS----------
function iterar(n, accion) {
    for(let i = 0; i <= n; i++) {
        accion(i);
    }
}

let etiquetas =[];
// iterar(5, function(i) {
//     etiquetas.push("etiqueta " + i);
// });

function agregarEtiquetas(numeroEtiqueta) {
    etiquetas.push("etiquetas " + numeroEtiqueta);
};

agregarEtiquetas(0);
agregarEtiquetas(1);
agregarEtiquetas(2);
agregarEtiquetas(3);
console.log(etiquetas);
// ------------.FILTER-------------------
//CREA UN NUEVO ARRAY CON LOS ELEMENTOS QUE PASEN UNA CONDICIÓN
let palabras = ['limite', 'elite', 'exhuberante',];

let resultado = palabras.filter(function(palabra) {
    return palabra.length <= 6
});

console.log(resultado);


//---------------.MAP-----------------------
const lista = [1,2,3];

const listaAlCuadrado = lista.map(function(elemento){
    return elemento * elemento;
})
console.log(listaAlCuadrado);



// -----------ejercicio----------
let numeros = [1,2,3,4,5,6];

let numeroMultiplicado = numeros.map(function(num) {
    return num * 2;
})
console.log(numeroMultiplicado);



// console.log("--------ppt4-------");

// let numero4 = [1,2,3,4,5,6];

// let resultado4 = numero4.map((elemento4) => elemeto4 + 10);
// console.log(resultado4);



console.log("-------ppt6-----");
// que la consola devuelva los numeros pares del array
let numero6 = [1,2,3,4,5,6];
let resultado6 = numero6.filter((elemento) => elemento % 2 === 0);
console.log(resultado6);



console.log("----------------------");
// Vamos a utilizar la FOS map para crear una nueva colección de personas, donde cada objeto tenga solo la propiedad “nombre”.


let personas2 = [
    {
        nombre: 'Carolina',
        edad: 20
    },
    {
        nombre: 'Daniel',
        edad: 30
    },
    {
        nombre: 'Luis',
        edad: 15
    }
];

let nuevasPersonas = personas2.map((elemento)=> {
    return {
        nombre: elemento.nombre
    };
});
console.log(nuevasPersonas);



// ------------------Find: ---------
// En base a un arreglo:
// const array1 = [5, 12, 8, 130, 44];

// Retornar el primer valor > 10 //-----resultado:12

const array1 = [5, 12, 8, 130, 44];
const resultado14 = array1.find(elemento => elemento > 10);
console.log(resultado14);


//buscar al primero que tiene 15 años 
const resultado15 = personas2.find((elemento)=> elemento.edad === 15);
console.log(resultado15);

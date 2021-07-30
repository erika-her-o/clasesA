// Escandalo-tron
// Se necesita diseñar un algoritmo para mostrar un mensaje.
// Si la cantidad total de decibelios es > 0 y <= a 30.(mensaje: las personas estan susurrando).
// Si la cantidad total de decibelios es > 30 y <= a 60.(mensaje: el sonido es normal)
// Si la cantidad total de decibelios es > 60.(mensaje: estan haciendo escaldalo).

let persona1 = 10;
let persona2 = 5;
let persona3 = 15;

let totalDecibelios = persona1 + persona2 + persona3;

if (totalDecibelios > 0 && totalDecibelios <= 30) {
    console.log("las personas estan susurrando");
}
if (totalDecibelios > 30 && totalDecibelios <= 60){
    console.log("el sonido es normal");
}
if (totalDecibelios > 60) {
console.log("ESCANDALO");
}

//AMIGA MAYOR 
// Desarrolla un programa que te muestre por consola quién de estas dos amigas es mayor:
// Julieta acaba de cumplir 30
// Martha tiene 25
// Crea las variables con los nombres respectivos y desarrolla un condicional que muestre por consola el mensaje con el nombre de la persona con más edad.











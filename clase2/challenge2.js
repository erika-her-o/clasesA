//1. Escribe la función cualEsMayor(), la cual muestra por consola cuál es el mayor de 2 números. 
//La función no debe retornar nada, solo utilizar el infaltable `console.log()` para indicar cuál 
//de los números es mayor.

function cualEsMayor(numero1, numero2) {
    if (numero2 > numero1) {
        console.log( "el numero " + numero2 + " es mayor que " + numero1);
    } else {
        console.log("el numero " + numero1 + " es mayor que el numero" + numero2);
    }
};

cualEsMayor(8,20);



//2. Ahora, escribe la función cualEsMenor() la cual deberá retornar el menor de 3 números dados.
function cualEsMenor(number1, number2, number3) {
    if (number1 < number2 && number1 <number3) {
        return number1;
    }
    if (number2 < number1 && number2 < number3) {
        return number2;
    }
    if (number3 < number2 && number3 < number2) {
        return number3;
    }
}

let numeroMenor = cualEsMenor(5,7,2);
console.log(numeroMenor);
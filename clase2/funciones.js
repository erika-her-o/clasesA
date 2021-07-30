//*********PARAMETROS EN FUNCIONES*******/
//DEFINICIÓN
// function varificarEdad(edad) {
//     if (edad > 18) {
//         console.log('la persona es mayor de edad');
//     } else {
//         console.log('la persona no es mayor de edad');
//     };
// };


// //INVOCACIÓN
// varificarEdad(66);
// varificarEdad(10);
// varificarEdad(20);


//---------------******RETURN****----------/
//definición
// function saludo() {
//     return "hola";
// }

//invocación
// let saludoRetornado = saludo();
// console.log(saludoRetornado);

function esMayor(edad) {
   if(edad > 18) {
       return true;
   } else {
       return false;
   }
};

let edadJuan = 4;
console.log(esMayor(edadJuan));
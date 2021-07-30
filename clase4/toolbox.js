//---------borrar propiedades------

//Con el operador delete podemos borrar propiedades de un objeto.

let plato1 = {
    nombre: "hamburguesa",
    vegetariano: false,
    tomate: true
}
delete plato1.tomate;
console.log(plato1);


console.log("------leer valores------");
let auto = {
    marca: "Toyota",
    modelo: "Yaris",
    color: "rojo",
    manual: false
}
console.log(auto.modelo); //yaris

let encuentro22= {
    nombre: "Objetos",
    carrera: "DWFE",
    visto: false,
};
console.log(encuentro22["nombre"])



//-------------modificar valores-------
console.log("------modificar valores------");
let encuentro= {
    nombre: "Objetos",
    carrera: "DWFE",
    visto: false,
};
console.log(encuentro["visto"]); // false
encuentro["visto"] = true;
console.log(encuentro["visto"]);



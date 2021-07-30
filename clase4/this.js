//--------THIS--------
//especificar funciones como una propiedad, en
//la parte de saludar: function()
let persona = {
    nombre: "Luna",
    edad: 20,
    alergico: true,
    alergias: ["camarones", "polen"],
    dirección: {
        calle: "Av. jshdj",
        depto: 666
    },
    saludar: function() {
        console.log("Mi nombre es " + this.nombre);
    }
};

console.log(persona.saludar());// Mi nombre es Luna
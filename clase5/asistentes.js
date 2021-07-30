//ARRAY + OBJETOS = COLECCIONES
let personas = [
    {
      nombre: "Jhony",
      asistente: null,
      seccion: "gold",
      rol: "speaker"
    },
    {
      nombre: "Manuel",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Fran",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Cintia",
      seccion: "platino",
      rol: "viewer"
    },
    {
      nombre: "Marcos",
      asistente: null,
      seccion: "gold",
      rol: "viewer"
    },
    {
      nombre: "Victoria",
      asistente: true,
      seccion: "platino",
      rol: "speaker"
    }
  ];
  
  /**
     * Esta fución debe calcular el total de asistentes
     * según una lista de personas.
     *
     * Se considera que una persona esta "asistente" si
     * la propiedad respectiva es distinta a null y undefined
     *
     * La función debe retornar el número de asistencias.
     */
  function asistentes(listaPersonas) {
    let cantidad = 0;
    
    for (let i = 0; i < listaPersonas.length; i++) {
        const persona = listaPersonas[i];
        if (persona.asistente !== null && persona.asistente !== undefined){
            cantidad = cantidad + 1;
        }
    }
    return cantidad;

    return listaPersonas.filter((persona) => persona.asistente !== null && persona.asistente !== undefined).length;


}   

  console.log(asistentes(personas));
  
//   //Con FOREACH
// function asistentes2(listaPersonas) {
//     let contador = 0;
//     listaPersonas.forEach((persona) => {
//       if (persona.asistente === true) {
//         contador++;
//       }
//     });
//     return contador;
//   }
//   ​
//   //con FILTER
//   function asistentes3(listaPersonas) {
//     return listaPersonas.filter((persona) => persona.asistente === true);
//   }
//   ​
//   // let totalAsistentes = asistentes(personas);
//   // console.log(totalAsistentes);
//   ​
//   let totalAsistentes2 = asistentes3(personas);
//   console.log(totalAsistentes2.length);
//   ​
//   //***********************************************************************************
//   //***********************************************************************************
//   // 2. Sobre el sandbox anterior, desarrolla
//   // una función que te permita crear un nuevo
//   // array que tenga solo las personas asistentes.
//   // Es decir, que tengan la propiedad “asistente”
//   // dentro de su objeto, y que esta sea igual a “true”.
//   ​
//   //Con FOR
//   function soloAsistentes(listaPersonas) {
//     let asistentes = [];
//     for (let i = 0; i < listaPersonas.length; i++) {
//       if (listaPersonas[i].asistente === true) {
//         asistentes.push(listaPersonas[i]);
//       }
//     }
//     return asistentes;
//   }
//   ​
//   //Con FOREACH
//   function soloAsistentes2(listaPersonas) {
//     let asistentes = [];
//     listaPersonas.forEach((persona) => {
//       if (persona.asistente === true) {
//         asistentes.push(persona);
//       }
//     });
//     return asistentes;
//   }
//   ​
//   //con FILTER
//   function soloAsistentes3(listaPersonas) {
//     let asistentes = listaPersonas.filter(
//       (persona) => persona.asistente === true
//     );
//     return asistentes;
//   }
//   ​
//   // let asistentesOnly = soloAsistentes(personas);
//   let asistentesOnly = soloAsistentes(personas);
//   console.log(asistentesOnly);
//   ​
//   //***********************************************************************************
//   //***********************************************************************************
//   // 3. Además, desarrolla una función que te permite
//   // crear un nuevo array que tenga solo las personas
//   // de la sección “platino”.
//   ​
//   //con FOR
//   function asistentePlatino(listaPersonas) {
//     let personasPlatino = [];
//     for (let i = 0; i < listaPersonas.length; i++) {
//       if (listaPersonas[i].seccion === "platino") {
//         personasPlatino.push(listaPersonas[i]);
//       }
//     }
//     return personasPlatino;
//   }
//   ​
//   //con FILTER
//   function asistentePlatino2(listaPersonas) {
//     let personasPlatino = listaPersonas.filter(
//       (persona) => persona.seccion === "platino"
//     );
//     return personasPlatino;
//   }
//   ​
//   let platinoPerson = asistentePlatino(personas);
//   console.log(platinoPerson);
//   ​
//   //***********************************************************************************
//   //***********************************************************************************
//   // 4. Finalmente, crea una única función que cree un nuevo array
//   // según un filtro y un valor especificado, los cuales tendrán
//   // que ser pasados como argumentos a la función. Por ejemplo:
//   // let speakers = filtrarPersonas(“rol”, “speaker”);
//   // Lo anterior deberá retornar un nuevo array solo con
//   // los objetos donde la propiedad “rol” sea igual a “speaker".
//   ​
//   //con FOR
//   function filtrarPersonas(propiedad, valor) {
//     let personasRol = [];
//     for (let i = 0; i < personas.length; i++) {
//       if (personas[i][propiedad] === valor) {
//         personasRol.push(personas[i]);
//       }
//     }
//     return personasRol;
//   }
//   ​
//   //con FILTER
//   function filtrarPersonas2(propiedad, valor) {
//     let personasRol = personas.filter((persona) => persona[propiedad] === valor);
//     return personasRol;
//   }
//   ​
//   let speakers = filtrarPersonas("rol", "speaker");
//   ​
//   console.log(speakers);
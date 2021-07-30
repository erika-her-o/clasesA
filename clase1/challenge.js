const name = "Erika";
const lastNmae = "Herández"
const age = 27;
const email = "eri.h.ortiz@gmail.com"
const relationship = true;
const pets = ["Leticia", "Tomás", "Luna", "Rebeca", "Vicent"];


let edadBianca = 30;
let edadPedro = 19;
let edadJose = 45;
let edadJulio = 40;
let edadFany = 33;
let edadMaria = 24;

// Expresa en código las siguientes preguntas
// utiliza console.log() para escribir la pregunta y también, para mostrar las respuestas.

// Ejemplo:
// 1. ¿Es Bianca mayor que María?
console.log("1. ¿Es Bianca mayor que María?");
console.log(edadBianca > edadMaria);

// 2. ¿Es Pedro mayor que Bianca?
console.log("2. ¿Es Pedro mayor que Bianca?");
console.log(edadPedro > edadBianca);

// 3. ¿Es Julio mayor que Fany?
console.log("3. ¿Es Julio mayor que Fany?" );
console.log(edadJulio > edadFany);

// 4. ¿Es Jose mayor que Pedro?
console.log("4. ¿Es Jose mayor que Pedro?" );
console.log(edadJose > edadPedro);

// 5. ¿Cuanto es la sumatoria de las edades de Julio, Jose y Pedro?
console.log("5. ¿Cuanto es la sumatoria de las edades de Julio, Jose y Pedro?" );
console.log(edadJulio + edadJose + edadPedro);

// 6. ¿Cuanto es la sumatoria de las edades de Bianca, Fany y Maria?
console.log("6. ¿Cuanto es la sumatoria de las edades de Bianca, Fany y Maria?" );
console.log(edadBianca + edadFany + edadMaria);

// 7. ¿La sumatoria de las edades de Julio y Jose es mayor que la de Fany y Maria?
console.log("7. ¿La sumatoria de las edades de Julio y Jose es mayor que la de Fany y Maria?" );
console.log((edadJulio + edadJose) > (edadFany + edadMaria));

// 8. ¿La sumatoria de las edades de Fany y Bianca es menor que la de Jose y Pedro?
console.log("8. ¿La sumatoria de las edades de Fany y Bianca es menor que la de Jose y Pedro?" );
console.log((edadFany + edadBianca) < (edadJose + edadPedro));


// 10. ¿La edad de Pedro, menos la edad Bianca, es mayor o igual que la edad de Jose, menos la edad de Fany?
console.log("10. ¿La edad de Pedro, menos la edad Bianca, es mayor o igual que la edad de Jose, menos la edad de Fany?" );
console.log((edadPedro - edadBianca) >= (edadJose - edadFany));

// 11. ¿La edad de Maria, multiplicada por la edad Julio, es menor o igual que la edad de Maria, dividad por la edad de Bianca?
console.log("11. ¿La edad de Maria, multiplicada por la edad Julio, es menor o igual que la edad de Maria, dividad por la edad de Bianca?" );
console.log((edadMaria * edadJulio) <= (edadMaria / edadBianca));

// 12. ¿La edad de Bianca, multiplicada por la edad Julio, menos la edad de Jose es distinta a la edad de Maria, divida por la edad de Fany, mas la edad Pedro?
console.log("12. ¿La edad de Bianca, multiplicada por la edad Julio, menos la edad de Jose es distinta a la edad de Maria, divida por la edad de Fany, mas la edad Pedro?" );
console.log(((edadBianca * edadJulio) - edadJose) === ((edadMaria / edadFany) + edadPedro));

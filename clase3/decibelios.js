let decibelios = [1, 10, 20, 30, 5];
function escandaloTron(decibelios) {
    let suma = 0;
    for (let i = 0; i <= decibelios.lenght; i++) {
        suma = suma + decibelios[i];
    }
    let promedio = suma / decibelios.lenght; {
    if (decibelios > 0 && decibelios <= 30) {
        console.log("Las personas estan susurrando");
    }
    if (decibelios > 30 && decibelios <= 60) {
        console.log("El sonido es normal");
    }
    if (decibelios > 60) {
        console.log("ESCANDALO!");
    };
}
escandaloTron(30, 20, 10, 15);
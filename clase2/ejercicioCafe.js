function preparandoCafe(agua, taza, grCafe, azucar) {
    if (agua > taza) {
      console.log("SE ESTA PREPARANDO");
    } else {
      console.log("lo siento, es mucha agua");
    }
  
    if (grCafe > 50) {
      console.log("tendra un sabor fuerte");
    } else {
      console.log("tendrá un sabor suave");
    }
  
    if (azucar === true) {
      console.log("con un poco de azucar");
    } else {
      console.log("sin azucar");
    }
    console.log("Aqui tienes el cafe, DISFRUTALO");
}
  
  preparandoCafe(300, 280, 40,true);
  preparandoCafe(200,100,80,false);
  preparandoCafe(100,220,90,true);
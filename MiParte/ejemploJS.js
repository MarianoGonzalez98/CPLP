var variableGlobal; // Variables global (toda la aplicación). 
console.log("variableGlobal linea2: "+ variableGlobal);
variableGlobal = 1; 
function unaFuncion() {
  console.log("variableLocal linea5: "+variableLocal);
  if (true) {
    let variableBloque = new Date();  // Variable de bloque 
    variableGlobal2 = true //variable global declarado dentro de una funcion
  }
  var variableLocal = new Date(); // Variable local (dentro de la función)
  console.log("variableLocal linea11: "+variableLocal);
}
unaFuncion();
console.log("variableGlobal1 linea 14: "+variableGlobal);
console.log("variableGlobal2 linea 15: "+variableGlobal2);
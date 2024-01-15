console.log('desde condicionales');

/**
 * sintaxis
 * if(condicion-a-evaluar){
 * codigo a ejecutar en caso de que la condicion sea verdadera
 * }
 */

let edad=parseInt(prompt("Por favor ingresa tu edad"));

/*if (edad>21) {
    console.log("Eres legalmente mayor de edad");
}else{
    console.log("Aun no eres mayor de edad");
};*/

/*if (edad<21) {
    console.log("Aun no eres mayor de edad");
}*/


if (edad<=18) {
    console.log("Eres joven");
}else if(edad>18 && edad<=30){
    console.log("Eres joven adulto");
}else if(edad>30 && edad<65){
    console.log("Eres adulto");
}else if(edad>=65){
    console.log("Eres anciano");
}
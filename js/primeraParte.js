//esto es un comentario de una sola linea 

/**
 * Esto es un comentario de varias lineas 
 */

//Esto imprime un mensaje en consola
console.log('Hola mundo');

console.log('Esto es otro mensaje mostrado por consola');


//VARIABLES

/**Sintaxis
 * [IDENTIFICADOR DEL TIPO DE VARIABLE] <NOMBRE-VARIABLE> = <VALOR>;
 * IDENTIFICADORES DE TIPO DE VARIABLE:
 * 1_ var -->  NO SE USA MAS
 * 2_ let --> tipo de variable
 * 3_ const --> tipo constante, quiere decir que no se le puede cambiar el valor
 */

let mensaje = 'Este es el valor inicial de mi variable';
let edad = 35;
let nombre='Alan';

console.log(mensaje);
console.log(edad);
console.log(nombre);

mensaje = 'Este es el mesaje modificado';

console.log(mensaje);
//con esto escribo en el documento html
document.write(mensaje);
document.write('<br/>');
document.write(nombre);
document.write('<br/>');
document.write(edad);

// con esto muestro un mensaje de alerta en un popup

//alert('Esto es un mensaje de alerta');

// con esto le pido al usuario que ingrese un dato

//prompt('Por favor ingrese su nombre');

let datoIngresado = prompt('Por favor ingrese su nombre');

alert('Usted ingreso lo siguiente: ' + datoIngresado); // esto se llama concatenar

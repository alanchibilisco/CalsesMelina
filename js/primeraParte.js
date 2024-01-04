//esto es un comentario de una sola linea 

/**
 * Esto es un comentario de varias lineas 
 */

//Esto imprime un mensaje en consola
/*console.log('Hola mundo');

console.log('Esto es otro mensaje mostrado por consola');*/


//VARIABLES

/**Sintaxis
 * [IDENTIFICADOR DEL TIPO DE VARIABLE] <NOMBRE-VARIABLE> = <VALOR>;
 * IDENTIFICADORES DE TIPO DE VARIABLE:
 * 1_ var -->  NO SE USA MAS
 * 2_ let --> tipo de variable
 * 3_ const --> tipo constante, quiere decir que no se le puede cambiar el valor
 */

/*let mensaje = 'Este es el valor inicial de mi variable';
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
document.write(edad);*/

// con esto muestro un mensaje de alerta en un popup

//alert('Esto es un mensaje de alerta');

// con esto le pido al usuario que ingrese un dato

//prompt('Por favor ingrese su nombre');

/*let datoIngresado = prompt('Por favor ingrese su nombre');

alert('Usted ingreso lo siguiente: ' + datoIngresado); // esto se llama concatenar*/


//TIPOS DE DATOS

//STRING, SE LAS IDENTIFICA POR Q ESTAN CONTENIDAS POR "", '', ``.

let cadena = "Esto es un string";
const cadena2= 'Esto es otro string';

//NUMBER, se los identifica por que son nummeros enteros o decimales

const numero = 13;
const numero2= 14.5;


//BOOLEANOS, solo tienen 2 valores true o false;

const verdarero = true;
const falso=false;

//ARRAY, se los identifica por que estan contenidos por corchetes [];

const array=[];

//OPERADORES

//operador de asignacion --> =
cadena = 'cambio el valor inicial';
cadena = cadena2;

//operadores aritmeticos

//suma, particularidad del operador + , cuando se trata de strings los concatena es decir los une;
let resultado= numero + numero2;
console.log('Este es el valor de la variable resultado--> ', resultado);
let concatenado= cadena + cadena2
console.log('Este es el valor de la variable concatenado--> ', concatenado);
let a=3;
let b="2";
resultado = a + b;
console.log('Este es el valor de la variable resultado--> ', resultado);

//resta

let c=5;
let d=3;
resultado=c-d;
console.log('Este es el valor de la variable resultado--> ', resultado);
resultado=d-c;
console.log('Este es el valor de la variable resultado--> ', resultado);
d='3';
resultado=c-d;
console.log('Este es el valor de la variable resultado--> ', resultado);


//multiplicacion y division *, /

//resto %
let e=4;
let f=2;

resultado=4%2;
console.log('Este es el valor de la variable resultado--> ', resultado);

//OPERADORES LOGICOS, IGUAL QUE, DISTINTO QUE, NEGACION, ESTRICTAMENTE IGUAL, ESTRICTAMENTE DISTINTO, MAYOR QUE, MENOR QUE, MAYOR IGUAL QUE, MENOR IGUAL QUE, siempre retornan true o false;

console.log(e==f);//false, aqui preguntamos si el valor de e ES IGUAL al valor de f
console.log(e!=f);//true, aqui preguntamos si el valor de e ES DISTINTO al valor de f
console.log(!verdarero);//false, aqui estoy NEGANDO el valor de la constante verdadero
console.log(e>f);//true, aqui preguntamos si el valor de e ES MAYOR que el valor de f
console.log(e>=f);//true, aqui preguntamos si el valor de e ES MAYOR O IGUAL al valor de f
console.log(e<f);//false, aqui preguntamos si el valor de e ES MENOR que el valor de f
console.log(e<=f);//false, aqui preguntamos si el valor de e ES MENOR O IGUAL que el valor de f

let g="2";
let h="4";
console.log(e==h);//true, el IGUAL QUE considera unicamente el valor sin importar el tipo del dato
console.log(e===h);//false, el ESTRICTAMENTE IGUAL tiene en cual el valor y el tipo del dato

console.log(f!=g);//false, el DISTINTO QUE considera unicamente el valor sin importar el tipo del dato;
console.log(f!==g);//true, el ESTRICTAMENTE DISTINTO QUE, considera el valor y el tipo del dato

// OTROS  OPERADORES LOGICOS AND LOGICO, OR LOGICO

//AND LOGICO, evalua dos expresiones booleanas y si ambas son true el valor retornado es true, si al menos una de las expresiones es false, el valor retornado es false;
console.log(e>f && e!=f);//true
console.log(e==h && e===h);//false
//OR LOGICO, evalua dos expresiones booleanas y si ambas o al menos una de ellas es true, entonces retorna true, solo retorna false si ambas expresiones son false;
console.log(e==h || e===h);//true
console.log(e===h || f!=g);//false
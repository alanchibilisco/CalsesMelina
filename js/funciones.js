console.log('desde funciones');

let a=5;
let b=3;

let resultadoSuma=a+b
//let resultadoSuma='HOLA';
console.log('el resultado de la suma es: ', resultadoSuma);


let c=10;
let d=15;

resultadoSuma=c+d;

console.log('el resultado de suma es: ', resultadoSuma);

//FUNCIONES DECLARATIVAS, SINTAXIS function <NOMBRE DE LA FUNCION> (parametro1, parametro2,...parametron-N){ codigo a ejecutar}

// funcion sin parametros-declaracion

function sinParametros(){
    console.log('DESDE LA FUNCION SIN PARAMETROS');
};

//llamada a una funcion
sinParametros();


// funcion con parametros

function Suma(numero1, numero2){
    let suma=numero1 + numero2;
    console.log('El resultado de  funcion Suma es: ', suma);
}


Suma(35,15);    

Suma(a,b);
//funciones que retornan algo

function OtraSuma(numero1, numero2){
    let suma= numero1 + numero2;
    return suma;
}

let resultado=OtraSuma(10,10);
console.log("El resultado de otra suma es: ", resultado);

//funciones anonimas

let resta=function (numero1, numero2){
    let resultado=numero1 - numero2;
    return resultado;
}

let resultadoResta=resta(10,5);

console.log("El resultado de restar 10 y 5 es: ",resultadoResta);

//Arrow functions
const elevarAlCuadrado=(numero)=>{
    let resultado= numero*numero;
    return resultado;
}

let resultadoCuadrado=elevarAlCuadrado(2);
console.log("El resultado de elevar al cuadrado el numero 2 es: ", resultadoCuadrado);

// concatenar candenas
var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre +' '+ apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
nombreCompleto2
console.log(nombreCompleto2);

// concatenar cadena y numero
// obtiene el numero como cadena
var x = nombre + 12 + 5;
console.log(x);
// toma como prioridad la suma de numeros
 x = nombre + (12 + 5);
console.log(x);
// se hace la suma al inicio
x = 2 + 4 + nombre;
console.log(x);

/*
USO BASICO DE VAR - LET - CONST
*/

let nombres;
nombres = 'Fer';
console.log(nombres);

const apellidos = 'Perez';
// apellidos = 'Lara';

/* MEJORES PRACTICAS PARA DECLARAR VARIABLES */
let nombreCompleto3 = 'Fernanda Miranda';
console.log( nombreCompleto3 );

let a, b;
a = 10, b = 20;
let c = a + b;
console.log(c);

// Definir variables 
let a1nombre;
let _nombre;
let $nombre;
//let 1nombre; - no es permitido en js

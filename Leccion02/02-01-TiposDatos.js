
// Tipo de dato String
var nombre = "Fernanda";
console.log(nombre);

nombre = 100.5;
// typeof - muestra el tipo de dato de la variable
console.log(typeof nombre);

// Tipo de dato numerico
var numero = 1000;
console.log(numero);

// Tipo de dato object - es un objeto
var objeto = {
    nombre : "Fer",
    apellido : 'Vega',
    telefono : "6681521275"
}
console.log(typeof objeto);

// tipo de dato boolean
var bandera = true
console.log(typeof bandera);

// tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion)

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

// tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}
console.log(typeof Persona);

//Tipo de dato undefined
var x;
// no se asigna valor a la x
console.log(x);
// se puede agregar el valor undefined
x= undefined;
console.log(x);

// Null = ausencia de valor
var y = null;
console.log(typeof y);

// Los arreglos son objetos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// asignar cadena vacia a las variables
var z = '';
console.log(z);
console.log(typeof z);
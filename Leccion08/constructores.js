// constructor de obketos de tipo persona
function Persona( nombre, apellido, email ){
    // ATRIBUTO = PARAMETRO
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Agregar la propiedad a todos los objetos que se vayan a crear de persona
// PROTOTYPE
Persona.prototype.tel = '6681521275';

// crear objetos con las mismas caracteristicas

let padre = new Persona('Jesus', 'Miranda', 'jmiranda@email.com');
padre.tel = '6871152526'
console.log( padre.tel );

let madre = new Persona( 'Alma', 'Vega', 'avega@email.com');
console.log( madre.tel );

let hijo = new Persona( 'Fer', 'Miranda', 'fmiranda@email.com');
console.log( hijo.nombreCompleto() );

padre.nombre = 'Carlos';
console.log(padre);

// crear un nuevo objeto
// Opcion formal
let miObjeto = new Object();
// Opcion recomendada por ser mas breve
let miObjeto2 = {};

// clase de tipo string
// Formal
let miCadena1 = new String('Hola');
// Recomendada
let miCadena2 = 'Hola';

// Formal
let miNumero = new Number(1);
// Recomendado
let miNumero2 = 1;

// formal
let miBoolean = new Boolean(false);
// recomendada
let miBoolean2 = false;

// formal
let miArreglo = new Array();
// recomendada
let miArreglo2 = [];

// function es un objeto por eso el new
// formal
let miFuncion = new Function();
// recomendada
let miFuncion2 = function(){};

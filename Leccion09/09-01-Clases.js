// No se pueden crear objetos antes de declarar la clase
// no se aplica el concepto de hoisting
// let p4 = new Persona('Karla', 'Lulu');

class Persona{
    // consutrctor
    constructor( nombre, apellido ){
        // crear variables y asignarles valores de inicio
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // GETS Y SETS
    get nombre(){
        return this._nombre;
    }

    set nombre ( nombre ){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido ( apellido ){
        this._apellido = apellido;
    }

}

let p1 = new Persona('Fernanda', 'Miranda');
console.log( p1 );

let p2 = new Persona('Jose', 'Lara');
console.log( p2 );

let p3 = new Persona('Juan', 'Perez');
// manda llamar indirectamente el metodo set de la clase PErsona
p3.nombre = 'Juan Carlos'; // set nombre ('Juan Carlos')
// de manera indirecta se accede al metodo get de la clase, no se necesitan ()
console.log( p3.nombre );  // get nombre

 let p4 = new Persona('Karla', 'Lulu');
 console.log( p4 );

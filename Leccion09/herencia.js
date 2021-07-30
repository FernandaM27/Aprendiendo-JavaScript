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

    // no es necesario agregar function dentro de una clase
    nombreComleto(){
        return this._nombre + ' ' + this._apellido; 
    }

    // sobreescribir metodo de la clase Object.prototype / Clase padre
    toString(){
        // se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreComleto()
    }

}

class Empleado extends Persona{

    constructor( nombre, apellido, departamento ){
        // se llama al constructor de la clase padre y se envian los 
        // parametros correspondientes
        super( nombre, apellido );
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento ( departamento ){
        this._departamento = departamento;
    }

    // sobreescritura - modificar el comportamiento de un metodo de la clase padre
    nombreComleto(){
        return super.nombreComleto() + ', ' +  this._departamento; 
    }

    
}

let p1 = new Persona('Fernanda', 'Miranda');
console.log( p1 );

let e1 = new Empleado('Juan', 'Vega', 'Sistemas');
console.log( e1 );
// comprobar que se puede acceder al metodo get de la clase padre Persona
console.log( e1.nombre );
// acceder al metodo definido en la clase padre Persona
console.log( e1.nombreComleto() );

console.log( e1.toString() ); // se llama el metodo de la clase hija
console.log( p1.toString() ); // se llama el metodo de la clase padre
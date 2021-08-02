class Persona{

    // ATRIBUTOS ESTATICOS
    // atributo que se asocia con la clase y no con los objetos
    static contObjetosPersona = 0; // atributo de la clase

    email = 'Valor default email'; // atributo de nuestros objetos

    // consutrctor
    constructor( nombre, apellido ){
        // crear variables y asignarles valores de inicio
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contObjetosPersona++;
        console.log( 'Se incrementa contador: '+ Persona.contObjetosPersona );
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

    // METODOS STATICOS
    static saludar(){
        console.log('Saludos desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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


// no es posible llamar un metodo estatico desde un
// console.log(p1.saludar());
// pero si desde una clase ya que el metodo statico se asocia a una Clase y no a un objeto
Persona.saludar();
Persona.saludar2( p1 );

// si se puede heredar un metodo statico
Empleado.saludar();
Empleado.saludar2( e1 );


// utilizar atributos staticos de la clase Persona
console.log( p1.contObjetosPersona );
console.log( Persona.contObjetosPersona );
// las clases hijas tambien heredan atributos staticos
console.log( Empleado.contObjetosPersona );

// aceder a atributo de los objetos
console.log( p1.email );
console.log( e1.email );
console.log( Persona.email ); // es una nueva variable estatico que se esta creando
console.log( Empleado.email ); // es una nueva variable estatico que se esta creando



class Persona {
    
    static contadorPersonas = 0;

    constructor(  nombre, apellido, edad ){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;        
    }

    get idPersona(){
        return this._idPersona;
    } 

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    set edad( edad ){
        this._edad = edad;
    }

    get edad(){
        return this._edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}

class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo ){
        super( nombre, apellido, edad );
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`; 
    }


}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor( nombre, apellido, edad, fechaRegistro ){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    set fechaRegistro( fechaRegistro ){
        this._fechaRegistro = fechaRegistro;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`; 
    }


}

// Prueba clase Persona
let p1 = new Persona('Juan', 'Perez', 28);
console.log( p1.toString() );
let p2 = new Persona('Luis', 'Perez', 28);
console.log( p2.toString() );

// Prueba clase Empleado
let e1 = new Empleado('Lucas', 'Vega', 30, 5000.00);
console.log( e1.toString() );
let e2 = new Empleado('Felipe', 'Cota', 18, 1000);
console.log( e2.toString() );

// Prueba clase Cliente
let c1 = new Cliente('Ana', 'Miranda', 30, new Date());
console.log( c1.toString() );
let c2 = new Cliente('Carla', 'Mendoza', 40, new Date());
console.log( c2.toString() );


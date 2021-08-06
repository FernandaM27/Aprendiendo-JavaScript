// CONCEPTO DE SOBREESCRITURA
class Empleado {

    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre() {
        return this._nombre;
    }

    get sueldo() {
        return this._sueldo;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento( departamento ){
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }

}

let empleado1 = new Empleado('Juan', 300);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Fernanda', 1500, 'Sistemas');
console.log( gerente1.obtenerDetalles() );
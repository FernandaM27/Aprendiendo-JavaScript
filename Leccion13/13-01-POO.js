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

// Polimorfismo, depende del tipo que recibimos se manda llamar el metodo correspondiente
function determinarTipo( tipo ){
    console.log(tipo.obtenerDetalles());
    // solo responde al mismo tipo o a tipos superiores -> instanceof
    // Poner clases de menor a mayor jerarquia
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento); // este atributo no existe en la clase padre
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo object');
    }
}

let empleado1 = new Empleado('Juan', 300);
determinarTipo(empleado1);

let gerente1 = new Gerente('Fernanda', 1500, 'Sistemas');
determinarTipo(gerente1);

// CREAR OBJETOS

// FORMA 1
let persona = {
    nombre: 'Fernanda',
    apellido: 'Miranda',
    email: 'fmiranda@gmail.com',
    edad: 21,
    // agregar metodos a objetos
    nombreCompleto: function(){
        // usar this para acceder a los atributos del objeto que se esta trabajando
       return this.nombre + ' ' + this.apellido;
    }
}

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// console.log(persona.email);
// console.log(persona.nombreCompleto());

// FORMA 2
let persona2 = new Object();
persona2.nombre = 'Pepe';
persona2.apellido = 'Vega';
persona2.direccion = 'Jupiter 20';

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.direccion);



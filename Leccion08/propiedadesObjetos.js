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
// Agregar otra propiedad al objeto
persona.telefono = '6681521275';

console.log(persona);

// Eliminar propiedad existente
delete persona.telefono;
console.log(persona);

// Imprimir un Objeto en navegador web

// Concantenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido );

// for in
for ( nombrePropiedad in persona ){
    console.log( persona[nombrePropiedad] );
}

// Object.values()
let personaArray = Object.values( persona );
console.log( personaArray );

// String
// se imprime cada propiedad con su valor y lo convierte todo a string
let personaString = JSON.stringify( persona );
console.log(personaString);


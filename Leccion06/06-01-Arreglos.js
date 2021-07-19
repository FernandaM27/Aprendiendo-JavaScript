
// reciente
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

console.log(autos);

// Acceder a los elementos por el indice individual
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

// Acceder por arreglo a todos los indices del arreglo
for ( let i = 0; i < autos.length; i++ ){
    console.log( i + ': ' + autos[i] );
}

// Cambiar el valor en esa posicion
autos[1] = 'MercedesBenz';
console.log(autos[1]);

// Agregar elemento a un arreglo
autos.push('Audi');
console.log(autos);

// Imprimir largo del arreglo
console.log(autos.length);
// cambiar valor en el indice 4
autos[autos.length] = 'Cadillac';
console.log(autos);

// agregar indices vacios
autos[6] = 'Porshe';
// indice 5 queda vacio de no indicarse
console.log(autos);

// PREGUNTAR SI ES DE TIPO ARREGLO
// Forma 0 - dice que es un objeto no un arreglo 
console.log( typeof autos );
// Forma 1
console.log( Array.isArray(autos) ); 

// Forma 2
// pregunta si autos es una instancia de tipo arreglo
console.log( autos instanceof Array)


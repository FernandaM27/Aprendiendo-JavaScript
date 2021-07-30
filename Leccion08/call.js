let persona1 = {
    nombre: 'Fer',
    apellido: 'Miranda',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', '+ tel;
    }
}

let persona2 = {
    nombre: 'Jesus',
    apellido: 'Vega'
}

// Uso call para usar el metodo persona1.nombreCompleto
// con los datos de persona2

console.log( persona1.nombreCompleto('Lic', '6871515226') ); 
// Los datos que se obtienen son de los datos del objeto que se esta enviando
console.log( persona1.nombreCompleto.call( persona2, 'Ing', '6681521275' ) );

// uso de APPLY para usar

// Uso apply para usar el metodo persona1.nombreCompleto
// con los datos de persona2
console.log( persona1.nombreCompleto('Lic', '6871515226') ); 
// Los datos que se obtienen son de los datos del objeto que se esta enviando
let arreglo = ['Lic', '668791452'];
// al usar apply se debe enviar un arreglo con los valores de los argumentos 
console.log( persona1.nombreCompleto.apply( persona2, arreglo ) );
console.log( persona1.nombreCompleto.apply( persona2, ['Lic', '668791452'] ) );





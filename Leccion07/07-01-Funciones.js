
// HOISTING -> significa que se puede declarar la funcion antes o despues de usarla
// Esta funcion la envia al inicio para que podamos usarla en cualquier parte del programa

// Declaracion de la funcion
function miFuncion(a, b){
    // saber cuantos argumentos tiene una funcion
    console.log(arguments.length);
    return a + b;
    // console.log('Suma: ' + ( a + b ));
}

let resultado = miFuncion(5, 6);
console.log(resultado);
console.log(typeof miFuncion);

/* FUNCIONES DE TIPO EXPRESION O ANONIMAS */
let x = function(a, b){ return a + b; }; 

resultado = x(6, 9);
console.log(resultado);

// Asignar la funcion como si fuera texto
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// Las funciones tambien tienen metodos y atributos como los objetos
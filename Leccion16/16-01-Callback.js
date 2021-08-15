miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

// Funcion de tipo Callback
// function imprimir(mensaje){
//     console.log(mensaje);
// }

let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

// Llamadas asincronas con uso setTimeout -> iniciar una nueva tarea
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); // despues de 3 segundos llama a la funcion
setTimeout(function() {console.log('Saludos asincrono 2')}, 5000); // despues de 5 segundos llama a la funcion

setTimeout( () => console.log('Saludo asincrono 3 despues de 1 seg'), 1000); 
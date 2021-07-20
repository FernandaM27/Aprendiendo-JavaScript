// Parametro es lo que recibimos / definimos en la funcion
// Es posible poner valores por default a las funciones
let x = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2]; 

}; 

// Argumento es lo que mandamos al llamar la funcion
let resultado;
// Es posible no definir argumentos o enviar mas de los indicados
resultado = x(3, 7, 5);
console.log(resultado);

/** 
 * PARAMETRO: Lista de variables declaradas en una funcion
 * ARGUMENTO: 
*/
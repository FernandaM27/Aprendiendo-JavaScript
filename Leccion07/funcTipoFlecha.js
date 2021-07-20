
/* 
    FUNCIONES DE TIPO FLECHA!
*/

// declaracion Funcion de tipo Expresion
let x = function(a, b){ return a + b; }; 

let resultado = x(6, 9);
console.log(resultado);

// Funcion de tipo flecha
// cosnt - nombreFuncion - parametros - return
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
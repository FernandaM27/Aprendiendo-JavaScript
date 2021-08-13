'use strict'

try{
    let x = 10;
    // miFuncion();
    // para arrojar una nueva excepcion o nuestros propios errores
    throw ' Mi error';
}
catch(error){
    console.log(error);
}
// este codigo siempre se va ejecutar despues de ejecutar el try
// es opcional
finally{
    console.log('Termina la revision de errores')
}
// al producirse un error antes, no se ejecuta la siguiente linea a menos que tenga el try catch
console.log('Continuamos...');

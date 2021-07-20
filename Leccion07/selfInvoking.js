
// Funcion anonima, que se puede mandar llamar a si misma
// No se puede reutilizar, solo se llama una vez a si sola.

(function(a, b){
    console.log('Ejecutando la funcion: '+ (a + b));
})(3, 5);


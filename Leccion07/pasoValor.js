// Cuando se usan tipos que no son objetos 
// #10 es valor primitivo
let x = 10;

function cambiarValor(a){
    a = 20;
}

// Paso por valor
cambiarValor(x); // 10
console.log(x);
// console.log(a);

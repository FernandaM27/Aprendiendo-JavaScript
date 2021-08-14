

let miFuncion = function (){
    console.log('Saludos desde la funcion');
}
// operador de la funcion flecha
// let miFuncionFlecha = () => {
//     console.log('Saludos desde la funcion flecha');
// }

// const miFuncionFlecha = () => console.log('Saludos desde la funcion flecha');

// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funcion saludar/flecha';
// }

const saludar = () => 'Saludos desde funcion flecha-saludar';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Fernanda', apellido: 'Miranda'});

console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}
// const funcionConParametros = (mensaje) => console.log(mensaje);
// se puede simplificar aun mas por ser solo un parametro
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos desde la funcion con parametros');
funcionConParametrosClasico('Saludos desde la funcion con parametros clasico');

// const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1+op2;
    return `Resultado: ${resultado}`;
}

console.log(funcionConVariosParametros( 5, 6 ));
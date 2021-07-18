
/** 
 * SWITCH USA COMPARACION ESTRICTA - Compara tipos de los valores y 
 * los valores
 */

// NUMEROS A NUMEROS-TEXTO
let numero = 1;
let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3: 
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    case 5:
        numeroTexto = 'Numero cinco';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
        // al ser la ultima linea del switch el break se puede omitir
        break;
}

console.log(numeroTexto); 

// ESTACIONES POR MES

let mes = 15;
let estacion = 'Estacion desconocida';
switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otonio';
        break;
    default:
        estacion = 'Caso no encontrado';
}

console.log(estacion);
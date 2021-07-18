let miNumero = '18x';
console.log( typeof miNumero );

// CONVERTIR DE STRING A NUMBER

let edad = Number(miNumero);
console.log( edad ); // NOT A NUMBER NaN

if ( isNaN(edad) ){
    console.log('No es numero');
}
else{
    if ( edad >= 18 ){
        console.log('Puede votar');
    }
    else{
        console.log('No puede votar');
    }
}

// OPERADOR TERNARIO

if ( isNaN(edad) ){
    console.log('No es numero');
}
else{
    let resultado = ( edad>=18 ) ? 'Puede votar': 'No puede votar';
    console.log( resultado );
}
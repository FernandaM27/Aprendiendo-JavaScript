for ( let contador = 0;  contador <= 10; contador++ ){
    if ( contador % 2 == 0 ){
        console.log(contador);
        break; // rompe por completo el ciclo / for
    }
}

console.log('Fin ciclo');
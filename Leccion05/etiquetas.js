// ETIQUETAS 
inicio:
for ( let cont = 0; cont <= 10; cont++ ){
    if ( cont % 2 !== 0){
        continue inicio; // se va a la sig. iteracion
    }
    else {
        console.log(cont);
    }
}

for ( let cont = 0; cont <= 10; cont++ ){
    if ( cont % 2 !== 0){
        continue; // se va a la sig. iteracion
    }
    else {
        console.log(cont);
    }
}
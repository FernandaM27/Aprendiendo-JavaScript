

// Ejemplo de AND ( &&  ) REGRESA TRUE SI TODO ES TRUE
let a = 15;
let valMin = 0, valMax = 10;

if ( a >= valMin && a <= valMax ){
    console.log('Dentro de rango');
}
else {
    console.log('Fuera de rango');
}

// Ejemplo de OR ( ||  ) REGRESA TRUE SI CUALQUIERA ES TRUE
let vacaciones = false, diaDescanso = true;

if ( vacaciones || diaDescanso ){
    console.log('Padre no esta ocupado');
}
else{
    console.log('Padre esta ocupado');
}

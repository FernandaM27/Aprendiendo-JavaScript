const persona = {
    nombre: 'Fer',
    apellido: 'Miranda'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Fernanda';
    p1.apellido = 'Vega';
}

// Paso por Referencia -> mandar la referencia del objeto
cambiarValorObjeto( persona );

console.log( persona );
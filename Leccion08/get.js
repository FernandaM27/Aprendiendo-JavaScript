let persona = {
    nombre: 'Fernanda',
    apellido: 'Miranda',
    email: 'fmiranda@gmail.com',
    edad: 21,
    //con get se establece que es una funcion
    get nombreCompleto(){
        // usar this para acceder a los atributos del objeto que se esta trabajando
       return this.nombre + ' ' + this.apellido;
    }
}
// acceder a los valores de la funcion sin parentesis
console.log( persona.nombreCompleto );
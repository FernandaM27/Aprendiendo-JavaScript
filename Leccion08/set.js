let persona = {
    nombre: 'Fernanda',
    apellido: 'Miranda',
    email: 'fmiranda@gmail.com',
    edad: 21,
    idioma: 'es',
    get lang(){
        // convertir idioma a mayusculas
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    //con get se establece que es una funcion
    get nombreCompleto(){
        // usar this para acceder a los atributos del objeto que se esta trabajando
       return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.lang );
// se manda llamar el metodo set
persona.lang = 'en';
console.log( persona.lang );
console.log( persona.idioma );
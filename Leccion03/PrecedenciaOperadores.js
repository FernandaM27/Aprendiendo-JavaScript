
// OPERADORES DE ASIGNACION
/*
    +=
    -=
    *=
    /=
    %=
    **=
*/

let a = 1;

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a - 2
console.log(a);

// OPERADORES DE COMPARACION
/* 
    ==
    ===
    !=
    !==
*/

let x = 3, y = 2, z ='3';

let d = x == y; // se revisa el valor sin importar el tipo
console.log(d);

d = x == z; // se revisa el valor sin importar el tipo
console.log(d);

d = x === z; // revisa los valores pero tambien los tipos
console.log(d)


d = x != y; // se revisa el valor sin importar el tipo
console.log(d);

d = x !== 3; // revisa los valores pero tambien los tipos
console.log(d)

// OPERADORES RELACIONALES
/*
    <
    >
    <=
    >=
*/
a = 3, b = 2, c = '3';

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

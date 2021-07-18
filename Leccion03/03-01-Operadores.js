/* OPERADORES ARITMETICOS */

/*

    + -> Addition
    - -> Subtraction
    * -> Multiplication
    ** -> Exponentiation
    / -> Division
    % -> Modulus
    ++ -> Increment
    -- -> Decrement

*/

let a = 3, b = 2 ;
let c = a + b ;
console.log('Resultado de la suma: ' + c );

c = a - b ;
console.log('Resultado de la resta: ' + c );

c = a * b ;
console.log('Resultado de la mult: ' + c );

c = a ** b ;
console.log('Resultado de la expo: ' + c );

c = a / b ;
console.log('Resultado de la division: ' + c );

c = a % b ;
console.log('Resultado de la modulo: ' + c );

// Incremento
// Pre-incremento (operador ++ antes de la variable)
c = ++a;
console.log(a);
console.log(c);

// Post-incremento (operador ++ despues de la variable)
c = a++;
console.log(a);
console.log(c);

// Decremento
// Pre-decremento (operador -- antes de la variable)
c = --b;
console.log(b);
console.log(c);

// Post-decremento (operador -- despues de la variable)
c = b--;
console.log(b);
console.log(c);
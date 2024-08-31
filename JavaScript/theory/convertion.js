// CONVERSIONES DE DATOS
// 1 - IMPLICITA (AUTOMÁTICA): Corrige el tipo de dato al correcto automáticamente

let op1;
let op2;
let op3;

op1 = "3" + 2;
console.log(op1, "-", typeof(op1)) // El 2 es corregido automáticamente a string para poder realizar bien la operación

op2 = "5" + true;
console.log(op2, "-", typeof(op2)) // true es corregido a string

op3 = "9" + null;
console.log(op3, "-", typeof(op3)) // null es corregido a string

// 2 - CONVERSION EXPLICITA (MANUAL): Con funciones de JavaScript por defecto corregimos el tipo de dato.
let result;

result = Number("5");
console.log(result, "-", typeof(result)) // Corrige 5 a numero indicando el tipo de dato anteriormente

result = String(true);
console.log(result, "-", typeof(result)) // Corrige true a string indicando el tipo de dato anteriormente

result = Boolean(0);
console.log(result, "-", typeof(result)) // Corrige 0 a false indicando el tipo de dato anteriormente
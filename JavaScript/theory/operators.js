// OPERACIONES ARTIMETICAS

let x = 5;

// 1 - SUMA
console.log("Suma x + 8 =",x+8)

// 2 - RESTA
console.log("Resta x - 4 =",x-4)

// 3 - MULTIPLICACION
console.log("Multiplicación x * 7 =",x*7)

// 4 - DIVISION
console.log("División x / 9 =",x/9)

// 5 - RESTO
console.log("Resto de la división x / 9 =",x%9)

// 6 - INCREMENTO (por 1)
console.log("Incremento de x =",++x)

// 7 - DESCENSO (por 1)
console.log("Descenso de x =",--x)

// 8 - POTENCIA
console.log("Potencia de x^9 =",x**9)

// ASIGNACIÓN DE OPERACIONES
let a = 7;
console.log("a = 7, a =",a)

a += 5; // Sumar valor
console.log("a + 5 =",a,"a =",a)

a -= 3; // Restar valor
console.log("a - 3 =",a,"a =",a)

a *= 10; // Multiplicar valor
console.log("a * 10 =",a,"a =",a)

a /= 2; // Dividir valor
console.log("a / 2 =",a,"a =",a)

a %= 3; // Dividir y usar el resto como valor
console.log("El resto de a / 3 es:",a,"a =",a)

a **= 0; // Potenciar valor
console.log("a ** 0 =",a,"a =",a)

// COMPARACIONES
const num1 = 3, num2 = 5;
console.log ("num 1 =",num1,"num 2 =",num2)
console.log(`${num1} menor que ${num2} es:`, num1 < num2) // Output: True 
console.log(`${num1} mayor que ${num2} es:`,num1 > num2) // Output: False
console.log(`${num1} igual que ${num2} es:`,num1 == num2) // Output: False
console.log(`${num1} diferente que ${num2} es:`,num1 != num2) // Output: True 
console.log(`${num1} mayor o igual que ${num2} es:`,num1 >= num2) // Output: False 
console.log(`${num1} menor o igual que ${num2} es:`,num1 <= num2) // Output: True

// COMPARACIONES LOGICAS (NO SE PUEDEN HACER CON VARIABLES CONST)
let value1 = 6, value2 = 9;
console.log((value1 < 3) && (value2 = 9)) // Output: false AND (Las dos expresiones se cumplen)
console.log((value1 < 3) || (value2 = 9)) // Output: 9 OR (Una de las dos expresiones se cumplen y devuelve el valor que se cumple)
console.log(!(value1 = 7)) // Output: true NOT (Si la expresion es falsa será verdad y viceversa) (Invierte el valor logico)

// CONCATENACION DE STRINGS
let str1 = "Dead", str2 = "pool";
console.log(str1 + str2)

// OTROS OPERADORES
// Coma (,): Evalua multiples operadores y devuelve el último valor
let coma = (1, 3, 4);
console.log(coma) // Output: 4

// Interrogacion (?): Devuelve un valor basado en condicion, si se cumple o no el valor será diferente
let ask = (50 > 40) ? "verdad" : "mentira";
console.log("50 > 40 esta afirmación es",ask)

// typeof: Devuelve el tipo de dato
let terraplanismo = false;
console.log(typeof(terraplanismo))

// instanceof: Devuelve true si la variable es un objeto valido dentro del tipo especificado
let chain = new String();
console.log(chain instanceof String)

/* COMENTARIO
MULTILINEA
*/
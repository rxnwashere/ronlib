/* 
FUNCIONES EN JAVASCRIPT
Bloque independiente que ejecuta una tarea.
*/

function saludar(name) { // Definir función (name sustiuye al argumento*)
    console.log(`Hola ${name}`); // Código
}

saludar("Aaron"); // Llamar a la función (*Argumento: Aaron)

let NumPi = function() { // Definir función dentro de una variable
    console.log(3.14); // Código
}

NumPi(); // Llamar función

function suma (num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

const prompt = require("prompt-sync")();
let num1 = Number(prompt("Primer número a sumar: "));
let num2 = Number(prompt("Segundo número a sumar: "));
suma(num1, num2);

// return: Devuelve el valor de una funcion.
function potencia (base, exponente) {
    return base ** exponente;
}

num1 = Number(prompt("Base: "));
num2 = Number(prompt("Exponente: "));
console.log(potencia(num1, num2));

// return termina la funcion.
function display () {
    console.log("Esto será ejecutado");
    return "Devolviendo función";
    console.log("Esto no será ejecutado");
}

let mensaje = display();
console.log(mensaje);

/* FUNCIONES POR DEFECTO

    1 - Math.sqrt() // Raiz cuadrada
    2 - Math.pow() // Potencia
    3 - toUpperCase() // Convertir texto a mayusculas
    4 - toLowerCase() // Convertir texto a minusculas
    5 - console.log() // Mostrar en pantalla

*/

let sqrt = Math.sqrt(3);
let pow = Math.pow(4, 5); // Base: 4 Exponente: 5
let upper = "System of a Down".toUpperCase();
let lower = "COSTILLAS A LA BARBACOA".toLowerCase();
console.log(sqrt);
console.log(pow);
console.log(upper);
console.log(lower);
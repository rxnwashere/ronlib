// VARIABLES (let)
// Con "//" hacemos comentarios

let x = 5;
let y = 6;

// Sumar variables
console.log(x + y) // 11

// Cambiar valores de variables
let score = 3;
console.log(score) // 3

let score2 = score + x;
score = score2;
console.log(score) // 8

// LAS VARIABLES DEBEN EMPEZAR CON UNA LETRA, _ O $
let mensaje = "HOLA MUNDO";
let _mensaje = "HOLA OTRA VEZ";
let $mensaje = "SOY UN PESAO";
console.log(mensaje)
console.log(_mensaje)
console.log($mensaje)

// LAS VARIABLES SON DIFERENTES SI HAY MAYUSCULAS O MINUSCULAS
let Age = 30;
let age = 15;
console.log(Age) // 30
console.log(age) // 15

// VARIABLES FIJAS (const)
const num = 5;
console.log(num) // 5

// Declarar variables en la misma linea
let word1 = "Hola ", word2 = "Aaron ", word3 = "te ", word4 = "quiero ", word5 = "mucho :3" // Egocentrico
const phrase = word1 + word2 + word3 + word4 + word5
console.log(phrase)

// Combinar displays y variables en cosole.log()
const bomboclat = 7;
console.log("Hola mundo",bomboclat)

// Combinar strings y variables
let count = 500;
console.log("Tienes %d EUR en tu cuenta bancaria",count)

// Otra forma de hacerlo
message = `Tienes ${count} EUR en tu cuenta bancaria`;
console.log(message)

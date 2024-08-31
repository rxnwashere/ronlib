// CONDICIONALES
// if (primera condicion)
// else (si no se cumple ninguna condicion)
// prompt: Permite al usuario darle valor a la variable segun el tipo de dato
const prompt = require("prompt-sync")();

let score = 45;

console.log("Your score is %d", score)
if (score >= 50) {
    console.log("You passed the test!")
}
else {
    console.log("You failed the test!")
}

// Output: You failed the test!

// else if: condiciones secundarias.
const num = Number(prompt("Escribe un número: "));
if (!isNaN(num)) { // isNaN comprueba que el valor no sea un número. Al poner ! delante invertimos el valor y comprbará que el valor sea un número.
    if (num > 0) {
        console.log("Número positivo")
    }
    else if (num == 0) {
        console.log("Número 0")
    }
    else {
        console.log("Número negativo")
    }
}
else {
    console.log("El valor introducido no es un número.")
}
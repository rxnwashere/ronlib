// BUCLE WHILE
// El bucle se irá haciendo infinitamente mientras se cumpla la condición.

let i = 1;

// Mostrar en pantalla números del 1 al 4
while (i < 4) {
    console.log(i)
    i += 1;
    /* VARIABLE i
    i = 1 --> true (Menor a 4)
    i = 2 --> true (Menor a 4)
    i = 3 --> true (Menor a 4)
    i = 4 --> false (igual a 4, fin del bucle)
    */
}

// Sumar solo números positivos
const prompt = require("prompt-sync")();
let num = 0, sum = 0;
while (num >= 0) {
    let input = prompt("Introduce un número: ");
    num = Number(input);
    if (num >= 0) {
        sum += num;
    }
    else {
        console.log("El número introducido no es positivo. FIN.")
    }
}

console.log(`El resultado de la suma es ${sum}`)

// do while loop
// Ejecuta el codigo del bucle una vez, y si la condición se cumple lo vuelve a ejecutar.

// Mostrar cuenta regresiva de 10 a 1
let j = 10;
do {
    console.log(j)
    j--;
} while (j > 0);

// Sumar solo números positivos
num = 0, sum = 0;
do {
    input = prompt("Introduce un número: ");
    num = Number(input)
    if (num > 0) {
        sum += num;
    }
    else {
        console.log("El número introducido no es positivo. FIN.")
    }
} while (num > 0);

console.log(`El resultado de la suma es ${sum}`)
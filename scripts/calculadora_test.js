/* 
TEST DE CALCULADORA CON JAVASCRIPT 
Codigo hecho por Aarón Cano :)
*/

const prompt = require("prompt-sync")();
let operacion = 0;
let number1 = 0;
let number2 = 0;
console.log("====CALCULADORA JAVASCRIPT====");
console.log("1 - Suma \n2- Resta \n3 - Multiplicación \n4 - División \n5 - Potencia \n6 - Raiz cuadrada");
operacion = Number(prompt("> "));

switch (operacion) {
    case 1:
        number1 = prompt("Primer número a sumar: ");
        number2 = prompt("Segundo número a sumar: ");
        let suma = number1 + number2;
        console.log(`${number1} + ${number2} = ${suma}`);

    case 2:
        number1 = prompt("Primer número a restar: ");
        number2 = prompt("Segundo número a restar: ");
        let resta = number1 - number2;
        console.log(`${number1} + ${number2} = ${resta}`);

    case 3:
        number1 = prompt("Primer número a multiplicar");
        number2 = prompt("Segundo número a multiplicar");
        let multiplicacion = number1 * number2;
        console.log(`${number1} * ${number2} = ${multiplicacion}`);

    case 4:
        console.log("Elige el tipo de resultado para la divisón que quieras obtener:\n1 - EXACTA\n2 - COCIENTE Y RESIDUO")
        let tipo = prompt("> ");
        tipo = Number(tipo);
        if(tipo == 1) {
            number1 = prompt("Primer número a dividir: ");
            number2 = prompt("Segundo número a dividir: ");
            let division = number1 / number2;
            console.log(`${number1} / ${number2} = ${division}`)
        }
        else {
            number1 = prompt("Primer número a dividir: ");
            number2 = prompt("Segundo número a dividir: ");
            let cociente = Math.trunc(number1 / number2);
            let resto = number1 % number2;
            console.log(`${number1} / ${number2}\nCociente: ${cociente}\nResto: ${resto}`);
        }
    
    case 5:
        number1 = prompt("Base: ");
        number2 = prompt("Exponente: ");
        let potencia = number1 ** number2;
        console.log(`${number1} ** ${number2} = ${potencia}`);

    case 6:
        number1 = prompt("Introduce el número del cual quieres averiguar la raiz cuadrada: ")
        let raiz = number1 ** 0.5
        console.log(`La raiz cuadrada de ${number1} es ${raiz}`)
}

console.log("Creado por Aarón Cano (GitHub: rxnwashere\n====FIN====")
// CALCULAR NOTA
// < 5 Suspendido
// >= 5 y < 7 Aprobado
// >= 7 y < 9 Aprobado con notable
// >= 9 y == 10 Aprobado con excelente

const prompt = require("prompt-sync")();

console.log("====¿¿¿HAS APROBADO???====")
let input = prompt("Introduce tu nota: ");
const nota = Number(input);

if(nota < 5) {
    console.log("Has suspendido :(")
}

else {
    if(nota >= 5 && nota < 7) {
        console.log("Has aprobado!!!")
    }
    else if (nota >= 7 && nota < 9){
        console.log("Has aprobado con notable!!!!")
    }
    else {
        console.log("TIENES UN EXCELENTE ENHORABUENA!!!!")
    }
}
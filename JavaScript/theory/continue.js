/* 
CONTINUE
Salta la iteración del bucle.
*/

// Ejemplo 1 (bucle for)

for (let i = 1; i < 6; i++) {
    if(i >= 3 && i < 5) {
        continue; // Salta la condición cuando i se cumple
    }
    console.log(i);
}

// Ejemplo 2 (bucle while)

let x = 1;

while (x <= 10) {
    if (x % 2 === 0) {
        ++x;
        continue;
    }
    
    console.log(x);
    ++x;
}
/* 
BREAK
Empleado en condiciones if, else if, else, rompe bucles cuando se cumpla la condición.
*/ 

// EJEMPLO 1 (bucles while)

let x = 0;

while (true) { // Bucle infinito (condición: true)
    x += 1; // Suma a x 1
    console.log(x);
    if (x == 10) {
        break; // Al llegar a 10 rompe el bucle y el código finaliza
    }
}

// EJEMPLO 2 (bucles for)
for (let i = 1; i <=5; i++) {
    console.log(i);
    if (i == 3) {
        break; // Cuando el contador (i) llegue a 3 el bucle será roto.
    }
}
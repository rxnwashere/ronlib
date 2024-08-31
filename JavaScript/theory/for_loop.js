// Bucle for

 for (i = 0; i < 3; i++) { // (i = 0) Expresión inicial (i < 3) Condición (i++) Actualizar expresión inicial
    console.log("Hello world") // Muestra "Hello wolrd" en pantalla 3 veces 
 }
 /* OUTPUT:
 Hello world
 Hello world
 Hello world */
 
 for (i = 0; i < 3; i++) {
    console.log(i) // Actualizará la expresión inicial i hasta llegar a un valor menor a 3 (si i = 0 sumará hasta llegar a 2)
 } 
 /* OUTPUT:
 0
 1
 2 */

 for (i = 0; i <= 3; i++) {
    console.log(i) // Aqui la actualizará hasta llegar a 3.
 }
 /* OUTPUT:
 0
 1
 2
 3 */

 // Suma de x números naturales 
 let sum = 0; // Declaramos variable con valor inicial
 const x = 100; // Variable constante con valor 100
 for (i = 1; i <= x; i++) {
    sum += i; // 0 + 1 + 2 ... + 100 = 5050
 }
 console.log(`La suma de todos los números naturales de 0 a ${x} es ${sum}`)

 // Iterar un array
 let objects = ["pencil", "eraser", "pen", "tippex", "paper"];
 for (i = 0; i < objects.length; i++) {
   console.log(i) // Mostrará el valor numérico de i empezando por 0 tantos valores haya en el array
   console.log(objects[i]) // Mostrará el objeto de la lista tal cual está especificado en el array
 }

 // Bucles dentro de bucles
 for(i = 0; i < 3; i++) {
    for(j = 0; j < 2; j++) {
      console.log(`i = ${i} | j = ${j}`)
    }
 }

 // Bucle infinito
 for(i = 0; true; i++){
   console.log("Esto se ejecuta siempre")
   if(i == 10) {
      break;
   }
 }
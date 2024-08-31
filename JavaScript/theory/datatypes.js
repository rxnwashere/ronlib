// TIPOS DE DATOS
// 1 - STRINGS

// Comillas simples
let string = 'Hola';
console.log(string)

// Comillas dobles
let string2 = "Hola";
console.log(string2)

// Acentos
let string3 = `Hola`;
console.log(string3)

// 2 - NUMEROS
// 2.1 - ENTEROS
let num_int = 1;
console.log(num_int)

// 2.2 - FLOAT (EXACTOS CON DECIMALES)
let num_float = 3.5;
console.log(num_float)

// 2.3 - BIGINT (NUMEROS MUY GRANDES O MUY PEQUEÑOS QUE NO PUEDEN SER REPRESENTADOS DENTRO DEL RANGO HABITUAL)
// Poner n al final de un numero grande para que sea contado como BigInt
let num_big = 8568367562776563655n;
let result = num_big + 1n;
console.log(num_big)

// 3 - BOOLEAN (True o False)
let dato1 = true;
console.log(dato1)
let dato2 = false;
console.log(dato2)

// 4 - INDEFINIDO
let name;
console.log(name)

let Name = undefined;
console.log(Name)

// 5 - NULL
let vacio = null;
console.log(vacio)

// 6 - SYMBOL
// Aunque tengan el mismo simbolo seran tratados como valores diferentes
let simbolo1 = Symbol("Hola");
let simbolo2 = Symbol("Hola");
console.log(simbolo1 == simbolo2)

// 7 - OBJETO
// Guarda diferentes datos dentro de una sola variable
let Object = {
    Nombre: "Aaron",
    Apellido: "Cano",
    Edad: null,
    class: 20
};
console.log(Object)

// MOSTRAR EN PANTALLA ELEMENTOS DEL OBJETO
console.log(Object.Nombre)
console.log(Object.Apellido)
console.log(Object.Edad)
console.log(Object.class)

// CONSULTAR TIPO DE DATO
// console.log(typeof(variable))
let component = "ram";
let favnum = 64;
let decimal = 3.14;
let valueChecked = true;
let a = null;
let b;
console.log(typeof(component))
console.log(typeof(favnum))
console.log(typeof(decimal))
console.log(typeof(valueChecked))
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(Object))

// JavaScript determina automaticamente el tipo de dato, esto afecta también si se cambia en la variable.
let JavaScript = 10;
console.log(typeof(JavaScript))
JavaScript = true;
console.log(typeof(JavaScript))
JavaScript = "Hola estoy programando en JavaScript";
console.log(typeof(JavaScript))
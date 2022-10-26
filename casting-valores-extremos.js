// Operadores .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un STRING");
console.log(str);
console.log(str.valueOf());


// NaN = Not a Number (No es un numero) - Infinity
let n = Number('bye');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);


// Como convertir los string a valores numericos con Number, parseInt y ParseFloat
// Number
let numero = '7.89';
let num2 = 17.5;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto
console.log(Number(numero) + num2);

// parseInt (pegar un numero entero con un numero flotante)
// parseInt convierte los numeros flotantes en enteros
console.log(parseInt(numero));

// parseFloat convierte los numeros enteros en numeros flotantes
// los numeros de enteros son considerados como numeros de coma flotante
// pero los numeros de coma flotante no son considerados como numeros de los enteros
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));


// Numeros hexadecimales
// se utilizan mucho en la Asignacion de memoria (base 16)
let numHex = '0x3a7k8';
console.log(parseInt(numHex, 16));


// Obtener los valores maximo y minimo en JavaScript
// Por el numero de base que nos ocupa
// como gestiona javascript la memoria y los numeros basados en BISE
let min_precision = Number.EPSILON //Es el minimo paso o valor que puede haber entre un numero y el siguiente
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);

console.log(2 ** 500);
console.log(2 ** 1024);
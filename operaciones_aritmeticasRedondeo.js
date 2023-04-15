//Principales Operaciones aritmeticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a0 + b);
//Resta (-)
console.log(a - b);
//Multiplicacion (*)
console.log(a * b);
//Division (/)
console.log(a / b);


// Representacion de los numeros en cadenas de texto
//Pasar variables numericas a string
console.log(typeof a);
let a_d = a.toString();

console.log(a_d);
console.log(typeof a_d);


// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);

//Estamos recibiendo un string con REDONDEO DE NUMEROS DECIMALES
// .toFixed(x) - Limitar el numero de decimales al valor x
console.log(d.toFixed(5));
console.log(typeof d.toFixed(4));

let m = 1893.54584645468;
let f = 254986421455;
console.log(m.toFixed(2));
console.log(f.toFixed(2));


//to.Precision(x) - Limira el numero de cifras significativas
console.log(m.toPrecision(7));
console.log(f.toPrecision(7));
console.log(f.toPrecision(3));








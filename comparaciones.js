// Comparaciones 


// Igualdad 
// == solo compara el valor

if(5 == 5) {
    console.log("5 es igual a 5")
};

if(5 === 5) {
    console.log("5 es muy igual a 5")
};


// === este compara el valor y el tipo
let a = 5;
console.log(typeof a)

let b = 5;
console.log(typeof b)

if (a == b) {
    console.log("a es igual a b - Debil")
};

if(a === b) {
    console.log("a es igual a b - Fuerte")
};

//Desigualdad
// tres tipos de desigualdades 

let c = 4;
let d = 10;

//Desigualdad NO ES IGUAL
if(c != d) {
    console.log("c es diferente a d - Debil")
};

if(c !== d) {
    console.log("c es diferente a d - Fuerte")
};

// Desigualdad mayor que o menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
};
if (max >= 10) {
    console.log("max es mayor o igual que min")
};

if(min < max) {
    console.log("min es menor que max ")
};
if(min <= max) {
    console.log("min es menor o igual que max")
};



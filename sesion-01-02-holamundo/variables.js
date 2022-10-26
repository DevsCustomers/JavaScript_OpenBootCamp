//Definicion de Variables

var variable;
let variablelet;

//Variable var
var a = 100;
console.log(a);

a = 50;
console.log(a);

//Variable let
let b = 3;
console.log(b);

b = 73;
console.log(b);

//Variable const
const constante = "Hola soy una variable constante";
console.log(constante);
// constante = "Hola" = Genera error, porque no se puede cambiar su valor.

var variable = "Hola sou una variable VAR";
for(var i = 0; i < 3; i++) {
    var  variable = "segunda variable"
};
console.log(variable);

let variableLet = "Hola soy la variable LET";
for (var i = 0; i < 3; i++) {
    let variableLet = "segunda variable LET";
};
console.log(variableLet);

console.log(typeof variableLet);




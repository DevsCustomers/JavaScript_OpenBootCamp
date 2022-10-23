//Seccion 4 - Declaracion de String y cuando utilizarlos
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = 'El otro dia me dijo literalmente \"ve a sacar la basura\" ';
let str_comillas_simple = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_doble = "El otro dia me dijo literalmente 've a sacar la basura'";
let str_comillas_simple_2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\' ';

console.log(str_comillas);
console.log(str_comillas_simple);
console.log(str_comillas_doble);
console.log(str_comillas_simple_2);

 //////////////// Comillas invertidas (backticks) ////////////////
let str_backticks = `Hola esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Alan"
let saludo = `Hola, ${saludo} bienvenido`
console.log(saludo);

/////////////////////// Plantilla HTML5 ////////////////////////
let plantilla = `
<html>
<h1> Pagina web ${nombre} </h1>
<p> Parrafo de la web </p>
</html>
`;
console.log(plantilla);

/////////////////////Introduccion a las variables en HTML5 //////////
let libros = ["Empieza por el que", "El monje que vendio su ferrari", "El poder del ahora"];
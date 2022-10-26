// Metodos de cadenas de texto = parte 2
let input = "Tauro";
let db = "tauro";
console.log(input === db);

// Metodos toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Formar de CONCATENAR DOS CADENAS de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = " Y yo soy la segunda cadena";
console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar esapcios al inicio y al final del string
let str_3 = "   Hola soy un syting con espacios al inicio y al final    ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";
console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Alan y me gusta el hokky";
console.log(str_5.indexOf("Alan"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Alan"));


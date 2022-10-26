//Metodos de cadenas de texto = parte 3
// ESPRESIONES REGULARES -----> https://regexr.com
let texto_largo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(texto_largo.match(/simply/g));

//Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono"));

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("arboles"));


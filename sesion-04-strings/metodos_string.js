// Metodos mas utilizados con cadenas de caracteres
// como obtener la longitud de un STRING
// PROPIEDAD length
let str = "Hola soy un string";
console.log(str.length);

//obtener partes de cadenas de caracteres
// METODOS slice() substring() substr()

//slice()
let slice_str = str.slice(5, 18);
console.log(slice_str);

//substring()
let substring_str = str.substring(5, 18);
console.log(substring_str);

//substr()
let substr_str = str.substr(5, 18);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Alan"
console.log(cadena);
console.log(cadena.replace('Alan', 'Matthias'));

// Al utilizar string solo reemplaza la primera instancia
let texto_largo = "Tito no es un leon cualquiera, a tito no le gusta cazar en manada, el prefiere pasear por el bosque y cazar sus presas solo.";
console.log(texto_largo.replace('manada', 'dos'));

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/manada/g, 'cinco'));

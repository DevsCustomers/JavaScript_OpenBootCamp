// Bubles For

/* for (inicializacion; condicion; actualizacion) { 
    //Esto es el bucle
};
*/

//i = i + 1
//i += 1
//i++


for (let i = 0; i < 10; i++) {
    //Esto es el bucle que se ejecuta 10 veces
    console.log(i);
};

for (let i = 0; i < 10; i = i + 3) {
    //Esto es el bucle que se incrementa cada 3 veces
    console.log(i);
};


// Estructura for en lista
let lista = [1, 4, 7, 3, 5, 9, 25, 33];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
};


// Estructura for...of
for (let valor of lista) {
    console.log(valor)
};


// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
});


//Estructura for...in
let persona = {
    nombre: "Alan",
    apellido: "Duarte",
    edad: 33,
    isDeveloper: true
};

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
};




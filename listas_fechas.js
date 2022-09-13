//Listas, arrys  (Arreglos: como se dice en latinoamerica)
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemnto, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4)


//Objetos = SON REPRESENTACIONES EN DATOS DE OBJETOS DE LA VIDA REAL
const movil = {
    altura: 10,
    anchura: 5,
    modelo: "iOS11",
    isWhite: false,
    contactos: ["alan", "turing"],
    tarjeta: {
        marca: "apple",
        almacenamiento: 64,
    }
};

movil.anyo = 2020;

console.log(movil.tarjeta)
console.log(movil.modelo)


//Fechas
//Librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10) // para buscar fechas con milisegundos
console.log(fecha_milis);

const feach_cadena = new Date("02 10 1989");
console.log(feach_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()
console.log(dia, mes, anyo);


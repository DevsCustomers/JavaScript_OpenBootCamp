// Casos especificos para controlar los bucles 
//break - continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if(lista[i] === 3) {
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break;
    }
}


// Este es el ambito de un bucle
// Se refiere al alcance de las variables
console.log(i);

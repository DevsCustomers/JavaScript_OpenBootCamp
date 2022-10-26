// Sentencias switch

let nota = 5;

switch (nota) {
    case 5:
        console.log("Buen trabajo; eres sobresaliente!");
        break;
    case 4:
        console.log("Buen trabajo, podrias hacerlo mejor la proxima");
        break;
    case 3:
        console.log("Has obtenido una nota promedio");
        break;
    case 2:
        console.log("No has aprobado la materia");
        break;
    case 1:
        console.log("No has estudiado nada, hechale ganas la proxima vez");
        break;    
    default:
        console.log("ERROR");
        break;
    }
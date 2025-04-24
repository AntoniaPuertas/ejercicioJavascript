//pedir al usuario un número del 1 al 7
//mostrar por consola: el día de la semana que corresponda

let entrada = prompt("Introduce un número del 1 al 7");

switch(entrada){
    case '1': 
        console.log("Lunes");
        break;
    case '2':
        console.log("Martes");
        break;
    case '3':
        console.log("Miércoles");
        break;
    case '4':
        console.log("Jueves");
        break;
    case '5':
        console.log("viernes");
        break;
    case '6':
    case '7':
        console.log("Fin de semana");
        break;
    default:
        console.log("Los datos son incorrectos");
}
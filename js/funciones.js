// //funcion simple
// function sumar(){
//     console.log(2 + 2);
// }

// sumar();
// sumar();
// sumar();

// //Parámetros y argumentos
// //la función sumar2 suma dos números que le lleguen por parámetro y los muestra por consola
// function sumar2(num1, num2){
//     console.log(num1 + num2);
// }

// sumar2(4, 30);
// sumar2(45, 90);

// //funciones que devuelven valores
// //sumar3 devuelve la suma de los dos parámetros 
// function sumar3(num1, num2){
//     return num1 + num2;
// }

// let resultado = sumar3(5, 23);

// let edad1 = 10;
// let edad2 = 20;

// let sumaEdades = sumar3(edad1, edad2);

//pedir nombre y edad al usuario
let nombre = prompt("Dime tu nombre");
let edad = prompt("Dime tu edad");


//Crear una función que reciba un nombre y una edad y devuelva un mensaje diciendo si el usuario puede sacar el carnet de conducir o no
function crearMensaje(nombre, edad){
    let resultado = "";
    if(edad >= 18){
        resultado = `${nombre} puedes sacar el carnet de conducir`;
    }else{
        resultado = `${nombre} no tienes edad suficiente`;
    }
    return resultado;
}

let mensaje = crearMensaje(nombre, edad);
document.getElementById("mensaje").textContent = mensaje;
for (let i = 0; i < 5; i++) {
    console.log("Iteración número:", i);
}



//array va entre corchetes y sus elementos van separados por comas 
//se accede a ellos por su índice que comienza en 0
const frutas = ["manzana", "pera", "melocotón"];
//objetos van entre llaves y sus propiedades van separadas por comas
//se accede a ellos por su nombre
const frutas2 = {
    nombre: "manzana"
}


console.log(frutas.length);

for(let i = 0 ; i < frutas.length; i++){
    console.log("Elemento número:", i, "es:", frutas[i]);
}

for(let i = frutas.length - 1; i >= 0; i--){
    console.log("Elemento número:", i, "es:", frutas[i]);
}

//crear un bucle for que muestre los números del 1 al 10
//crear un bucle que muestre la tabla de multiplicar del 5

for(let contador = 1; contador <= 10; contador++){

    console.log("5 x " + contador + " = " + 5 * contador);

}


//pedir el número al usuario
//let numero = prompt("Dime un número");
//intento pasar lo que haya en la variable numero a un número entero
//si lo consigue en numero habrá un número entero
//si no lo consigue en numero habrá un NaN (not a number)
// numero = parseInt(numero);
// console.log(numero);

// if(isNaN(numero)){
//     alert("No has introducido un número");
// }else{
//     document.getElementById("mensaje").textContent = "Voy a mostrar la tabla de multiplicar de: " + numero;

//     let resultadotxt = "";
//     for(let i = 1; i <= 10; i++){
//         resultadotxt += numero + " x " + i + " = " + numero * i + "<br>";
//     }
//     document.getElementById("resultado").innerHTML = resultadotxt;
// }

//pedir al usuario la edad de su mascota y mostrar la edad en años humanos
//1 año de perro = 7 años humanos

//Realizar las siguientes validaciones:
//que sea un número
//que sea mayor que 0

let edadMascota = prompt("Dime la edad de tu mascota");

edadMascota = parseInt(edadMascota);

if(Number.isInteger(edadMascota) && edadMascota > 0 && edadMascota < 30){
    document.getElementById("resultado").textContent = "La edad de tu mascota en años humanos es: " + edadMascota * 7;   
}else{
    alert("No has introducido una edad válida"); 
}

//Bucle while
//se ejecuta mientras la condición sea verdadera
// let contador = 0;
// while(contador < 5){
//     console.log("Iteración número:", contador);

//     contador++;
// }

//mostrar por consola utilizando el bucle while los 100 primeros números pares comenzando por 0
let pares =  0;
while(pares <= 100){
    console.log("Número par:", pares * 2);
    pares ++;
}

//bucle do while
//se ejecuta al menos una vez y luego comprueba la condición
let contador2 = 0;
do{
    console.log("contador:" + contador2);
}while(contador2 < 5);


let esCorrecta = false;
do{
    
}while(esCorrecta == false);


















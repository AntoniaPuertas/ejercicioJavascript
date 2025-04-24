/**
 * Ejercicio 1:
 * Crea un objeto llamado persona con las propiedades: nombre, edad y profesión.
 * Luego muestra cada propiedad en la consola por separado
 */

/**
 * Ejercicio 2:
 * Añade un método al objeto persona que devuelva un string con los valores de sus propiedades: "Hola, soy Mari Sol, tengo 28 años y soy informática"
 */

const persona = {
    nombre: "Mari Sol",
    edad: 28,
    profesion: "Informática", 
    presentacion: function() { 
        return "Hola, soy " + this.nombre + ", tengo " + this.edad + " y soy " + this.profesion;
    }
}

console.table(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);
console.log(persona.presentacion());

/**
 * Ejercicio 3:
 * Crea un objeto llamado coche con las propiedades: marca, modelo y año.
 * Añade un método que calcule cuántos años tiene el coche basado en el año actual
 */

//new Date() devuelve la fecha actual
//new Date().getFullYear() devuelve el año actual


const coche = {
    marca: "Opel",
    modelo: "Omega",
    anyo: 1980,
    antiguedad: function(){
        const anyoActual = new Date().getFullYear();
        const anyos = anyoActual - this.anyo;
        return anyos;
    } 
}
document.getElementById("mensaje").textContent = `Marca: ${coche.marca}, Modelo: ${coche.modelo}, Antigüedad: ${coche.antiguedad()} años`;

/**
 * Ejercicio 4:
 * Crea un objeto llamado tienda que contenga un array de productos
 * Cada producto debe ser un objeto con las propiedades: nombre y precio
 * Añade un método para calcular el precio total de todos los productos
 */
const tienda = {
    productos: [
        {nombre: "Monitor 32 pulgadas", precio: 200.00},
        {nombre: "Teclado Gaming", precio: 45},
        {nombre: "Ratón", precio: 10},
        {nombre: "Silla", precio: 120},
    ],
    calcularTotal: function(){
        let total = 0;
        this.productos.forEach( item => {
            total = total + item.precio;
        })
        return total;
    }
}

// console.log(tienda.productos[0].nombre);
// console.log(tienda.productos[2].precio);

console.log(tienda.calcularTotal());

//calcular la suma de todos los elementos del array

const precios = [200, 32, 25, 80, 120];
let total = 0;
precios.forEach(item => {
    total = total + item;
})
console.log(total);

//calcular el producto de todos los elementos del array
let producto = 1;
precios.forEach(item => {
    producto = producto * item;
})
console.log(producto);

//Calcular el mayor de los elementos del array
let resultado = precios[0];
precios.forEach(item => {
    if(item > resultado){
        resultado = item;
    }
})

//Calcular la media de los elementos del array

let media = total / precios.length;

const frutas = ["manzana", "pera", "melocotón"];
//comprobar si elemento está en el array
let elemento = "pera";
let posicion = -1;
let existe = false;
frutas.forEach( (index, item) => {
    if(item == elemento){
        existe = true;
        posicion = index;
    }
})
console.log(existe);

//comprobar utilizando el  método include()
let existe2 = frutas.includes(elemento);

/**
 * Ejercicio 10:
 * Crea un objeto llamado carrito que contenga un array de productos.
 * Añade métodos para agregar productos, eliminar productos y calcular el total del carrito
 */
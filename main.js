// Declarando una funcion
/*
function saludar () {
    console.log("Hola");
    console.log("Chau");


}

// Llamando una funcion

saludar();



// Otro ejemplo

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre:");
    alert("Tu nombre es: " + nombre);
    saludar()

}

solicitarNombre();
*/


// Declarar una funcion con parametros
/*
function solicitarNombre(unaVariable) {
    alert("Tu nombre es: " + unaVariable);
}

solicitarNombre("Juan");
let nombre = "Juan";
solicitarNombre(nombre)
let name = prompt("Ingrese su nombre:")
solicitarNombre(name);
solicitarNombre(prompt("Ingrese su nombre:"));
*/

//Otro ejemplo
/*
function nombreCompleto(nombre1, nombre2, apellido) {
    let nombre = nombre1 + " " + nombre2 + " " + apellido;
    alert ("Tu nombre completo es: " +nombre);

}

nombreCompleto("Tomas", "A.", "Torregiani");
let a1 = prompt("Ingrese su primer nombre");
let a2 = prompt("Ingrese su segundo nombre");
let a3 = prompt("Ingrese su apellido");
nombreCompleto(a1, a2, a3);
*/
/*
function sumar(valor1, valor2) {
    let resultado = valor1 + valor2;
    alert("La suma es: " + resultado)
}

sumar(20, 30);
*/

// Declaramos una funcion con return
/*
function sumar(valor1, valor2) {
    return valor1 + valor2;
}
let resultado = sumar (20, 50);
alert ("El resultado de la suma es: " + resultado);
*/

// Ejemplo IVA
/*
function aplicarDescuento(importe) {
    importe = importe * 1.21; // Aplicar IVA
    if (importe > 15000) { // Verifico si supero los 15k pesos hacemos el 10% dcto
        importe = importe * 0.9 // Hago el 10 % de descuento
        console.log("Descuento aplicado")
    }

    return importe; // Devuelvo el importe final
}
let importe = parseFloat(prompt("Ingrese un importe:"));
let resultado = aplicarDescuento(importe)
alert("El total a pagar es: $" + resultado)
*/

// Ejemplo calculadora
/*
function calcular(valor1, valor2, operacion) {
    switch(operacion) {
        case "+": 
            return valor1+valor2
             break;
        case "-":
            return valor1-valor2;
            break;
        case "*":
            return valor1*valor2;
            break;
        case "/":
            return valor1/valor2;
            break;
            default:
                return 0; 

    }
}

let resultado = calcular(20,5, "gha")
alert ("El resultado es :" + resultado)

*/

// Variables globales y locales
/*
let valor = 1000; // Esto es una variable global
let valor2 = 5000000000; // Esto es una variable global
/*

function sumar(numero) {
    valor += numero;

    return valor;
}

let resultado = sumar (500)
console.log("Resultado: " + resultado);
*/
/*
function sumar() {
    let valor = parseFloat(prompt("Ingrese un numero: ")); // variable local
    let valor2 = parseFloat(prompt("Ingrese un valor"));

    return (valor + valor2);
}

let resultado = sumar()
console.log("Resultado: " + resultado);
console.log(valor2);
*/

// Funciones anonimas
/*

const suma = function (valor1, valor2) {return valor1 + valor2};
console.log("Suma: " + suma(500, 600))
*/

/*
const aplicarIVA = function (importe){return importe * 1.21}
console.log (aplicarIVA(10000));
*/

// Funciones flecha
/*
const suma  = (valor1, valor2) => {

    return valor1 + valor2;
}

console.log(suma(500, 700 ));
*/

// Ejemplo aplicado
/*
const suma = (valor1, valor2) => {return valor1 + valor2}
const resta = (valor1, valor2) => {return valor1 - valor2}
const iva = (valor) => { return valor * 0.21}
const precioProducto = 10000;
const descuento = 1000;

let precioIVA = iva(precioProducto); //2100
let precioConIVA = suma(precioProducto, precioIVA); // 12100
let precioConDescuento = resta(precioConIVA, descuento);

alert ("Total a Pagar: $" + precioConDescuento);
*/
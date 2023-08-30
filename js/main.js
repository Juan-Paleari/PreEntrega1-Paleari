// Mi simulador interactivo consta en calcular el precio final de un producto en cuotas, como asi también el valor de estas cuotas. Use un funcion, condicional (if) y bucle (while)
let precio, cuotas;

while (true) {
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 6 (10% de recargo), 12 (20% de recargo), 18(30% de recargo) o 24(40% recargo)"));

    if ([6, 12, 18, 24].includes(cuotas)) {
        break;
    } else {
        alert("La cantidad de cuotas no es válida, deben ser 6, 12, 18 o 24");
    }
}

function precioFinal() {
    let resultado;
    let resultado2;
    
    if (cuotas === 6) {
        resultado = precio * 1.10;
        resultado2 = (precio / cuotas).toFixed(2);
    } else if (cuotas === 12) {
        resultado = precio * 1.20;
        resultado2 = (precio / cuotas).toFixed(2);
    } else if (cuotas === 18) {
        resultado = precio * 1.30;
        resultado2 = (precio / cuotas).toFixed(2);
    } else if (cuotas === 24) {
        resultado = precio * 1.40;
        resultado2 = (precio / cuotas).toFixed(2);
    }
    
    alert("El precio final es: " + resultado + " siendo " + resultado2 + " el valor de cada cuota.");
}

precioFinal();




function contarMayoresQue(numeros, limite) {
    let cant = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite) {
            cant++;
        }
    }
    return cant;
};
function mostrarDiasSobre(dias, ventas, limite) {
    console.log("Dias por encima del promedio:");
    for (let i = 0; i < dias.length; i++) {
        if (ventas[i] > limite) {
            console.log(dias[i] + ": $" + ventas[i]);
        }
    }
};
let dias8 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let ventas8 = leerVentas(dias8);
let promedioExacto = calcularPromedio(ventas8);
let promedioRedondeado = Math.round(promedioExacto);
console.log("Promedio diario: $" + promedioRedondeado);
mostrarDiasSobre(dias8, ventas8, promedioRedondeado);
console.log("Total: " + contarMayoresQue(ventas8, promedioRedondeado) + " dias");
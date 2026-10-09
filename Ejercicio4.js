function leerVentas(dias) {
    let ventas = [];
    for (let i = 0; i < dias.length; i++) {
        let venta = Number(prompt("Venta del " + dias[i] + ":"));
        ventas.push(venta);
    }
    return ventas;
};
function calcularTotal(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};
function mostrarReporte(dias, ventas) {
    for (let i = 0; i < dias.length; i++) {
        console.log(dias[i] + ": $" + ventas[i]);
    }
    console.log("Total semana: $" + calcularTotal(ventas));
};
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventasSemana = leerVentas(diasSemana);
mostrarReporte(diasSemana, ventasSemana);
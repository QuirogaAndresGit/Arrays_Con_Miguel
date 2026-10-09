function buscarPosicionMayor(numeros) {
    let idxMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[idxMayor]) {
            idxMayor = i;
        }
    }
    return idxMayor;
};
function buscarPosicionMenor(numeros) {
    let idxMenor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[idxMenor]) {
            idxMenor = i;
        }
    }
    return idxMenor;
};
let dias5 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas5 = leerVentas(dias5);
let idxMayor = buscarPosicionMayor(ventas5);
let idxMenor = buscarPosicionMenor(ventas5);
let dif = ventas5[idxMayor] - ventas5[idxMenor];
console.log("Mejor día: " + dias5[idxMayor] + " ($" + ventas5[idxMayor] + ")");
console.log("Peor día: " + dias5[idxMenor] + " ($" + ventas5[idxMenor] + ")");
console.log("Diferencia: $" + dif);
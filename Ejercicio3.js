function leerNumeros(cantidad) {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(Number(prompt("Numero " + (i + 1) + ":")));
    }
    return numeros;
};
function obtenerUltimo(numeros) {
    return numeros[numeros.length - 1];
};
function mostrarMedio(numeros) {
    let len = numeros.length;
    if (len % 2 !== 0) {
        let idxMedio = Math.floor(len / 2);
        console.log("Del medio: " + numeros[idxMedio]);
    } else {
        let idx1 = (len / 2) - 1;
        let idx2 = len / 2;
        console.log("Del medio: " + numeros[idx1] + " y " + numeros[idx2]);
    }
};
let totalNums = Number(prompt("Cuantos números?"));
while (totalNums < 1 || isNaN(totalNums)) {
    totalNums = Number(prompt("Debe ingresar al menos 1. Cuantos números?"));
};
let listaNumeros = leerNumeros(totalNums);
console.log("Primero: " + listaNumeros[0]);
console.log("Último: " + obtenerUltimo(listaNumeros));
mostrarMedio(listaNumeros);
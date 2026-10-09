function esPar(numero) {
    return Math.abs(numero) % 2 === 0;
};
function filtrarPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            pares.push(numeros[i]);
        }
    }
    return pares;
};
function filtrarImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!esPar(numeros[i])) {
            impares.push(numeros[i]);
        }
    }
    return impares;
};
let entradaNums = [];
for (let i = 0; i < 8; i++) {
    entradaNums.push(Number(prompt("Numero " + (i + 1) + ":")));
};
let resPares = filtrarPares(entradaNums);
let resImpares = filtrarImpares(entradaNums);
let txtPares = resPares.length > 0 ? unirConComas(resPares) : "(ninguno)";
let txtImpares = resImpares.length > 0 ? unirConComas(resImpares) : "(ninguno)";
console.log("Pares (" + resPares.length + "): " + txtPares);
console.log("Impares (" + resImpares.length + "): " + txtImpares);
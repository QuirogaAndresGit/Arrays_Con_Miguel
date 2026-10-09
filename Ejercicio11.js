function eliminarRepetidos(numeros) {
    let unicos = [];
    for (let i = 0; i < numeros.length; i++) {
        let val = numeros[i];
        if (!existeEnLista(unicos, String(val))) {
            unicos.push(val);
        }
    }
    return unicos;
};
let diezNumeros = [];
for (let i = 0; i < 10; i++) {
    diezNumeros.push(Number(prompt("Número " + (i + 1) + ":")));
};
let sinRep = eliminarRepetidos(diezNumeros);
let eliminados = diezNumeros.length - sinRep.length;
console.log("Sin repetidos: " + unirConComas(sinRep));
console.log("Se eliminaron " + eliminados + " repetidos");
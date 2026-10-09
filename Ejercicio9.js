function invertir(lista) {
    let nuevoArray = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        nuevoArray.push(lista[i]);
    }
    return nuevoArray;
};
let nPalabras = Number(prompt("Cuantas palabras?"));
let palabrasOriginales = [];
for (let i = 0; i < nPalabras; i++) {
    palabrasOriginales.push(prompt("Palabra " + (i + 1) + ":"));
};
let palabrasInvertidas = invertir(palabrasOriginales);
console.log("Original: " + unirConComas(palabrasOriginales));
console.log("Invertido: " + unirConComas(palabrasInvertidas));
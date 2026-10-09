function rotarDerecha(lista, k) {
    let n = lista.length;
    if (n === 0) return [];
    let rotado = [];
    for (let i = 0; i < n; i++) {
        rotado.push(null);
    }
    
    for (let i = 0; i < n; i++) {
        let nuevaPosicion = (i + k) % n;
        rotado[nuevaPosicion] = lista[i];
    }
    return rotado;
};
let nPersonas = Number(prompt("Cuantas personas?"));
let filaOriginal = [];
for (let i = 0; i < nPersonas; i++) {
    filaOriginal.push(prompt("Persona " + (i + 1) + ":"));
};
let kRotaciones = Number(prompt("Cuantas posiciones rotar?"));
let filaRotada = rotarDerecha(filaOriginal, kRotaciones);
console.log("Fila original: " + unirConComas(filaOriginal));
console.log("Fila rotada: " + unirConComas(filaRotada));
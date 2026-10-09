function contarPorEstrellas(calificaciones) {
    let contadores = [0, 0, 0, 0, 0];
    for (let i = 0; i < calificaciones.length; i++) {
        let val = calificaciones[i];
        contadores[val - 1] += 1;
    }
    return contadores;
};
function repetirCaracter(caracter, veces) {
    let res = "";
    for (let i = 0; i < veces; i++) {
        res += caracter;
    }
    return res;
};
let calificaciones = [];
for (let i = 1; i <= 10; i++) {
    let cal = Number(prompt("Calificacion " + i + ":"));
    while (cal < 1 || cal > 5 || isNaN(cal)) {
        cal = Number(prompt("Invalida. Calificaciin " + i + " (1 a 5):"));
    }
    calificaciones.push(cal);
};
let frecuencias = contarPorEstrellas(calificaciones);
for (let i = 0; i < frecuencias.length; i++) {
    let numEstrellas = i + 1;
    let cant = frecuencias[i];
    let barra = repetirCaracter("*", cant);
    let espacio = cant > 0 ? " " : "";
    console.log("Estrellas " + numEstrellas + ": " + barra + espacio + "(" + cant + ")");
};
let posMayor = buscarPosicionMayor(frecuencias);
console.log("Más frecuente: " + (posMayor + 1) + " estrellas");
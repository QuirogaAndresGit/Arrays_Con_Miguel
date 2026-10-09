function leerNotaValida(numero) {
    let nota = Number(prompt("Nota" + numero + ":"));
    while (nota < 0 || nota > 5) {
        console.log("mota invalida, debe de estar entre 0 y 5");
        nota = Number(prompt("Nota" + numero + ":"));
    }
    return nota;
};
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
    }
    return suma / numeros.length;
};
function unirConComas(lista) {
    let texto = "";
    for ( let i = 0; i < lista.length; i++)
{        texto = texto+lista[i];if (i < lista.length - 1){
    texto=texto + ", ";
    }}
    return texto;
};
let notas = [];
for (let i = 1; i <=5; i++) {
    let notaIngresada = 
    leerNotaValida(i);
    notas.push(notaIngresada);
};
let promedio = calcularPromedio(notas);
calcularPromedio(notas);
console.log("Notas: " + unirConComas(notas));
console.log("Promedio; "+ promedio.toFixed(1));
if (promedio >= 3,0){
    console.log ("El grupo que logro pasar");
} else {
    console.log("El grupo que no logro pasar");
}
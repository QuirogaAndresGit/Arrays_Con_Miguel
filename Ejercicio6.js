function existeEnLista(lista, valor) {
    let encontrado = false;
    let i = 0;
    while (i < lista.length && !encontrado) {
        if (lista[i].toLowerCase() === valor.toLowerCase()) {
            encontrado = true;
        }
        i++;
    }
    return encontrado;
};
let listaInvitados = ["ana", "carlos", "luisa", "pedro", "sofia"];
let entraron = 0;
let rechazados = 0;
let nombreIngresado = prompt("Nombre:");
while (nombreIngresado !== null && nombreIngresado.toLowerCase() !== "fin") {
    if (existeEnLista(listaInvitados, nombreIngresado)) {
        console.log(nombreIngresado + " puede entrar");
        entraron++;
    } else {
        console.log(nombreIngresado + " no esta en la lista");
        rechazados++;
    }
    nombreIngresado = prompt("Nombre:");
};
console.log("Entraron: " + entraron);
console.log("Rechazados: " + rechazados);
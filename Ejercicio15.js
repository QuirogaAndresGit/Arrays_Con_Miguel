function obtenerEnvioGratis(distancias) {
    return distancias.filter((dist) => dist <= 3);
};
function contarConEnvio(distancias) {
    let paganEnvio = distancias.filter((dist) => dist > 3 && dist <= 10);
    return paganEnvio.length;
};
function buscarPrimeroFuera(distancias) {
    return distancias.find((dist) => dist > 10);
};
let cantPedidos = Number(prompt("Cuantos pedidos?"));
let distancias = [];
for (let i = 0; i < cantPedidos; i++) {
    distancias.push(Number(prompt("Distancia " + (i + 1) + ":")));
};
let gratis = obtenerEnvioGratis(distancias);
let dePago = contarConEnvio(distancias);
let primeroFuera = buscarPrimeroFuera(distancias);
console.log("Envio gratis (" + gratis.length + "): " + unirConComas(gratis));
console.log("Pagan envio: " + dePago);
if (primeroFuera !== undefined) {
    console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
} else {
    console.log("Todos los pedidos están en cobertura");
};
function calcularConIva(precio) {
    return Math.round(precio * 1.19);
};
function aplicarIvaConMap(precios) {
    return precios.map((precio) => calcularConIva(precio));
};
function aplicarIvaConFor(precios) {
    let resultado = [];
    for (let i = 0; i < precios.length; i++) {
        resultado.push(calcularConIva(precios[i]));
    }
    return resultado;
};
let cantProds = Number(prompt("Cuantos productos?"));
let preciosBase = [];
for (let i = 0; i < cantProds; i++) {
    preciosBase.push(Number(prompt("Precio " + (i + 1) + ":")));
};
let preciosFinalesMap = aplicarIvaConMap(preciosBase);
let preciosFinalesFor = aplicarIvaConFor(preciosBase);
console.log("Sin IVA: " + unirConComas(preciosBase));
console.log("Con IVA: " + unirConComas(preciosFinalesMap));
console.log("Total con IVA: $" + calcularTotal(preciosFinalesMap));
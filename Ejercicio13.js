function mostrarLista(productos) {
    console.log("Lista del mercado:");
    productos.forEach((producto, i) => {
        console.log((i + 1) + ". " + producto);
    });
    console.log("Total: " + productos.length + " productos");
};
let cant13 = Number(prompt("Cuantos productos?"));
let prods13 = [];
for (let i = 0; i < cant13; i++) {
    prods13.push(prompt("Producto " + (i + 1) + ":"));
};
mostrarLista(prods13);
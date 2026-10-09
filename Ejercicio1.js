function leerProductos(cantidad) {
    let productos = [];
    for (let i = 0; i < cantidad; i++) {
        let prod = prompt("Producto " + (i + 1) + ":");
        productos.push(prod);
    }
    return productos;
}

function mostrarLista(productos) {
    console.log("Lista del mercado:");
    for (let i = 0; i < productos.length; i++) {
        console.log((i + 1) + ". " + productos[i]);
    }
    console.log("Total: " + productos.length + " productos");
}

let numProductos = Number(prompt("Cuantos productos?"));
let listaMercado = leerProductos(numProductos);
mostrarLista(listaMercado);
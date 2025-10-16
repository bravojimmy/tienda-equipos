const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((prod, idx) => {
        const item = document.createElement('li');
        item.textContent = prod;
        lista.appendChild(item);
    });
}

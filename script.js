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
.icono-facebook {
    width: 34px;
    height: 34px;
    margin-left: 12px;
    vertical-align: middle;
    transition: filter .2s;
}
.icono-facebook:hover {
    filter: brightness(0.7);
}
.red-social {
    text-decoration: none;
}

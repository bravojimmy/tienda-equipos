const detallesProductos = {
  'Laptop ABC': {
    imagen: 'pc1.jpg',
    nombre: 'Laptop ABC',
    descripcion: 'Intel i5, 8GB RAM, 512GB SSD',
    precio: '$600'
  },
  'PC Gamer XYZ': {
    imagen: 'pc2.jpg',
    nombre: 'PC Gamer XYZ',
    descripcion: 'Ryzen 5, 16GB RAM, RTX 4060',
    precio: '$1200'
  }
  // Agrega más productos aquí...
};

function mostrarDetalle(nombre) {
    const prod = detallesProductos[nombre];
    if (prod) {
        document.getElementById('detalle-producto').innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" style="width:100px; margin-bottom:12px;">
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <span style="font-weight:bold; color:#032;">${prod.precio}</span>
        `;
        document.getElementById('modal-detalle').style.display = 'block';
    }
}

function cerrarModal() {
    document.getElementById('modal-detalle').style.display = 'none';
}

// Para cerrar el modal al

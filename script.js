const detallesProductos = {
  'AMDAthlon': {
    imagen: 'AMDAthlon_3000G.jpg',
    nombre: 'AMD Athlon',
    descripcion: 'AMD Athlon 3000G',
    precio: 'S/220'
    atributos: {
        'Color': 'Negro',
        'Procesador': 'Intel i5',
        'Memoria RAM': '8GB',
        'Disco SSD': '512GB',
        'Pantalla': '15"',
        'Batería': '6 horas'
    }
  },
  'Audifono': {
    imagen: 'AUDIFONO_TE-8037N.jpg',
    nombre: 'Audifono',
    descripcion: 'Audifono Teros',
    precio: 'S/45'
  }
  // Agrega más productos aquí...
};

function mostrarDetalle(nombre) {
    const prod = detallesProductos[nombre];
    if (prod) {
      let tabla = `<table class="tabla-atributos">`;
        for (const clave in prod.atributos) {
            tabla += `<tr><td>${clave}</td><td>${prod.atributos[clave]}</td></tr>`;
        }
        tabla += `</table>`;  
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



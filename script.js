const detallesProductos = {
  'AMDAthlon': {
    imagen: 'AMDAthlon_3000G.jpg',
    nombre: 'AMD Athlon',
    descripcion: 'AMD Athlon 3000G',
    precio: 'S/220',
    atributos: {
        'Socket': 'AM4 AMD',
        'Nucleos': '2',
        'Subprocesos': '4',
        'Frecuencia Base': '3.5 Ghz',
        'Procesador Grafico': 'AMD Radeon Vega 3',
        'TDP': '35 watt'
    }
  },
  'Audifono': {
    imagen: 'AUDIFONO_TE-8037N.jpg',
    nombre: 'Audifono',
    descripcion: 'Audifono Teros',
    precio: 'S/45',
    atributos: {
        'Color': 'Negro y Rojo',
        'Procesador': 'Ryzen 5',
        'Memoria RAM': '16GB',
        'Tarjeta gráfica': 'RTX 4060',
        'Disco SSD': '1TB',
        'Fuente': '650W'
    }
  }
  // Agrega más productos aquí...
};

function mostrarDetalle(nombre) {
    const prod = detallesProductos[nombre];
    if (prod) {
        // Construye la tabla de atributos
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
            <hr>
            ${tabla}
        `;
        document.getElementById('modal-detalle').style.display = 'block';
    }
}

function cerrarModal() {
    document.getElementById('modal-detalle').style.display = 'none';
}

// Para cerrar el modal al






const detallesProductos = {
  'AMDAthlon': {
    imagen: 'AMDAthlon_3000G.jpg',
    nombre: 'Procesador AMD',
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
    descripcion: 'Audifono Teros 8037N',
    precio: 'S/45',
    atributos: {
        'Marca': 'TEROS',  
        'Color': 'Negro',
        'Interfaz': 'Por cable',
        'Conector': 'USB-A',
        'Longitud cable': '2 Mt ± 0.15 Mt'
    }
  },
  'ComboTE-4062N': {
    imagen: 'tecladoTE-4062N.jpg',
    nombre: 'Combo Teclado + Mouse',
    descripcion: 'Combo Teros TE-4062N',
    precio: 'S/35',
    atributos: {
        'Marca': 'TEROS',  
        'Color': 'Negro',
        'Interfaz': 'USB',
        '#Teclas': '105',
        'Dimensiones Teclado': '40 x 14 x 2.5 cm',
        'Dimensiones Mouse': '19.5 x 6 x 3.5 cm',
        'Longitud cable': '1.5 Mt'
    }
  },
  'RAMElite8GB': {
    imagen: 'RAMELITE8GB.jpg',
    nombre: 'Memoria RAM',
    descripcion: 'RAM Elite Group 8GB',
    precio: 'S/100',
    atributos: {
        'Marca': 'Elite Group',  
        'Modelo': 'Elite',
        'Capacidad': '8GB',
        'Tipo': 'DDR3',
        'Frecuencia': '1600Mhz',
        'Estandar': 'PC3-12800',
        'Voltaje': '1.35V'
    }
  },
  'epson664': {
    imagen: 'epson664Negro.jpg',
    nombre: 'Tinta Epson',
    descripcion: 'Epson 664',
    precio: 'S/40',
    atributos: {
        'Marca': 'EPSON',  
        'Color': 'Negro, Cian, Magenta y Yellow',
        'Original': 'SI',
        'Cantidad(ml)': '70ml',
        'Rendimiento': '4000 paginas',
        'Impresoras Compatibles': [
        "L110", "L120", "L121", "L200", "L210", "L220",
        "L300", "L310", "L350", "L355", "L365", "L375", "L380", "L395", "L396",
        "L455", "L475", "L495", "L555", "L565", "L575", "L1300"
    ]      
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















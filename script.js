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
        let tabla = `<table class="tabla-atributos">`;
        for (const clave in prod.atributos) {
            let valor = prod.atributos[clave];
            tabla += `<tr><td>${clave}</td><td>`;
            if (Array.isArray(valor)) {
                tabla += `<ul class="lista-impresoras">`;
                valor.forEach(item => { tabla += `<li>${item}</li>`; });
                tabla += `</ul>`;
            } else {
                tabla += valor;
            }
            tabla += `</td></tr>`;
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

const productosPorCategoria = {
  "SSD": [
    {
     "Kingston A400 240GB"
    },
    "Kingston A400 240GB",
    "Kingston KC600 512GB",
    "Hiksemi 480GB",
    "Biwin 240GB",
    "MSI Spatium S270 1TB"
  ],
  "Memoria RAM": [
    {
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
    "Kingston Fury 8GB DDR4",
    "Corsair Vengeance 16GB DDR4",
    "Teamgroup Elite 4GB DDR3",
    "XPG Gammix 8GB DDR4",
    "Kingston Fury 16GB DDR5"
  ],
  "Mainboard": [
    "Gigabyte B550M DS3H",
    "MSI PRO B760M-A",
    "Asrock H510M-HVS",
    "Asus PRIME A320M-K",
    "Gigabyte H410M S2"
  ],
  "Procesadores": [    
    "Intel Core i3 10100F",
    "AMD Ryzen 5 5600G",
    "Intel Core i5 12400",
    "AMD Ryzen 3 3200G",
    "Intel Core i7 12700"
  ],
  "Fuentes": [
    "Antryx Reactor 650W",
    "DeepCool DQ850-M-V2",
    "Cooler Master MWE 500W",
    "Gigabyte GP-P750GM",
    "Thermaltake Smart 600W"
  ]
};

function mostrarProductos(categoria) {
  const productos = productosPorCategoria[categoria];
  let html = `<h3>${categoria}</h3><div class="productos-listado">`;
  if (productos && productos.length > 0) {
    productos.forEach((prod, idx) => {
      html += `
        <div class="card-producto" onclick="mostrarModal('${categoria}', ${idx})">
          <img src="${prod.imagen}" alt="${prod.nombre}" class="prod-img">
          <div>
            <h4>${prod.nombre}</h4>
            <p class="prod-precio">${prod.precio}</p>
            <p class="prod-desc">${prod.descripcion}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
  } else {
    html += '<p>No hay productos disponibles en esta categoría.</p>';
  }
  document.getElementById("listado-productos").innerHTML = html;
}

function mostrarModal(categoria, idx) {
  const prod = productosPorCategoria[categoria][idx];
  document.getElementById('detalle-producto').innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}" style="width:110px; margin:12px 0;">
    <h3>${prod.nombre}</h3>
    <p class="prod-precio">${prod.precio}</p>
    <p>${prod.descripcion}</p>
    <!-- Puedes agregar más detalles aquí si lo deseas -->
  `;
  document.getElementById('modal-producto').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal-producto').style.display = 'none';
}
window.onclick = function(event) {
  const modal = document.getElementById('modal-producto');
  if (event.target == modal) {
    cerrarModal();
  }
}





















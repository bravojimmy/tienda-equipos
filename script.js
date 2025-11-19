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






















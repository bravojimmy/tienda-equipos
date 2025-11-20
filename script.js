const productosPorCategoria = {
  "SSD": [
    {
      nombre: "Kingston A400 240GB",
      imagen: "img/ssd1.jpg",
      precio: "S/ 110",
      descripcion: "SSD rápido y confiable para mejorar el rendimiento de tu PC."
    },
    {
      nombre: "Kingston KC600 512GB",
      imagen: "img/ssd2.jpg",
      precio: "S/ 205",
      descripcion: "SSD con cifrado avanzado y gran capacidad de almacenamiento."
    }
  ],
  "Memoria RAM": [
    {
      nombre: "Kingston Fury 8GB DDR4",
      imagen: "img/ram1.jpg",
      precio: "S/ 79",
      descripcion: "Memoria DDR4 ideal para gaming y multitarea."
    },
    {
      nombre: "Corsair Vengeance 16GB DDR4",
      imagen: "img/ram2.jpg",
      precio: "S/ 150",
      descripcion: "Alto rendimiento y estabilidad para tu computadora."
    }
  ],
  "Mainboard": [
    {
      nombre: "Gigabyte B550M DS3H",
      imagen: "img/mainboard1.jpg",
      precio: "S/ 330",
      descripcion: "Placa madre compatible con procesadores AMD Ryzen."
    },
    {
      nombre: "MSI PRO B760M-A",
      imagen: "img/mainboard2.jpg",
      precio: "S/ 420",
      descripcion: "Placa ideal para equipos Intel de 12° generación."
    }
  ],
  "Procesadores": [
    {
      nombre: "Intel Core i3 10100F",
      imagen: "img/procesador1.jpg",
      precio: "S/ 330",
      descripcion: "Procesador de 4 núcleos para oficina y casa."
    },
    {
      nombre: "AMD Ryzen 5 5600G",
      imagen: "img/procesador2.jpg",
      precio: "S/ 550",
      descripcion: "Excelente rendimiento y gráficos integrados."
    }
  ],
  "Fuentes": [
    {
      nombre: "Antryx Reactor 650W",
      imagen: "img/fuente1.jpg",
      precio: "S/ 210",
      descripcion: "Fuente de poder confiable para equipos gamer y oficina."
    },
    {
      nombre: "Cooler Master MWE 500W",
      imagen: "img/fuente2.jpg",
      precio: "S/ 150",
      descripcion: "Fuente económica ideal para PC de escritorio."
    }
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
          <h4>${prod.nombre}</h4>
          <p class="prod-precio">${prod.precio}</p>
          <p class="prod-desc">${prod.descripcion}</p>
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
  `;
  document.getElementById('modal-producto').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-producto').style.display = 'none';
}

const productosPorCategoria = {
  "SSD": [
    {
      nombre: "Kingston A400 240GB",
      imagen: "img/ssd1.jpg",
      precio: "S/ 110",
      descripcion: "SSD rápido y confiable para uso general."
    },
    {
      nombre: "Kingston KC600 512GB",
      imagen: "img/ssd2.jpg",
      precio: "S/ 205",
      descripcion: "SSD con encriptación y excelente desempeño."
    }
    // Puedes agregar más productos (recuerda guardar imágenes en 'img/')
  ],
  // Haz lo mismo para las demás categorías
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
  `;
  document.getElementById('modal-producto').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-producto').style.display = 'none';
}

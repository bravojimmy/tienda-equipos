const productosPorCategoria = {
  "SSD": [
    {
      nombre: "SSD BIWIN 256GB",
      imagen: "img/BWIN256GB473310.jpg",
      precio: "$ 35.50",
      descripcion: "SSD rápido y confiable para mejorar el rendimiento de tu PC.",
      especificaciones: {
        capacidad: "256GB",
        velocidad_lectura: "550 MB/s",
        velocidad_escritura: "470 MB/s",
        interfaz: "Sata 2.5 Pulg."
      },
      disponibilidad: "En stock",
      garantia: "1 año"
    },
    {
      nombre: "SSD Kingston 500GB",
      imagen: "img/kingston500gbnvme452106.jpg",
      precio: "$ 64.00",
      descripcion: "SSD con cifrado avanzado y gran capacidad de almacenamiento.",
      especificaciones: {
        capacidad: "500GB",
        velocidad_lectura: "5000 MB/s",
        velocidad_escritura: "3000 MB/s",
        interfaz: "PCI-E 4.0 x4 con NVMe",
        dimensiones: "larco, ancho, alto: 8.00 x 2.20 x 0.38 cm"
      },
      disponibilidad: "En stock",
      garantia: "1 año"
    },
    {
      nombre: "SSD Vulkan Z 512GB",
      imagen: "img/ssd512GBTeamGroup399458.jpg",
      precio: "$ 62.00",
      descripcion: "SSD rapido, confiable y compatible.",
      especificaciones: {
        capacidad: "512GB",
        velocidad_lectura: "540 MB/s",
        velocidad_escritura: "470 MB/s",
        interfaz: "Sata 2.5 Pulg."
      },
      disponibilidad: "En stock",
      garantia: "1 año"
    },
    {
      nombre: "SSD Western Digital Green SN350 250GB",
      imagen: "img/ssdwd250gb422501.jpg",
      precio: "$ 47.00",
      descripcion: "SSD que acelera el rendimiento de tu computadora.",
      especificaciones: {
        capacidad: "250GB",
        velocidad_lectura: "2400 MB/s",
        velocidad_escritura: "1500 MB/s",
        interfaz: "PCI-E 3.0 x4 con NVMe 1.3."
      },
      disponibilidad: "En stock",
      garantia: "1 año"
    }
  ],
  "Memoria RAM": [
    {
      nombre: "TEAMGROUP 8GB DDR4",
      imagen: "img/team8GBDDRSODIM387129.jpg",
      precio: "$35.00",
      descripcion: "Memoria DDR4 ideal para acelerar optimizar una laptop.",
      especificaciones: {
        capacidad: "8GB",
        tipo: "DDR4",
        velocidad: "3200MHz",
        latencia: "CL22",
        voltaje: "1.2V"
      },
      disponibilidad: "En stock",
      garantia: "1año"
    },
    {
      nombre: "TEAMGROUP 8GB DDR3",
      imagen: "img/TeamgroupSODIM8gb342759.jpg",
      precio: "$35.50",
      descripcion: "Alto rendimiento y estabilidad para tu laptop.",
      especificaciones: {
        capacidad: "8GB",
        tipo: "DDR3L",
        velocidad: "1600MHz",
        latencia: "CL11",
        voltaje: "1.35V",
        formato: "SO-DIMM"
      },
      disponibilidad: "En stock",
      garantia: "1 año"
    }
  ],
  "Mainboard": [
    {
      nombre: "Gigabyte B550M DS3H",
      imagen: "img/mainboard1.jpg",
      precio: "S/ 330",
      descripcion: "Placa madre compatible con procesadores AMD Ryzen.",
      especificaciones: {
        chipset: "AMD B550",
        socket: "AM4",
        formato: "Micro ATX",
        slots_ram: "2 (DDR4 64GB)",
        slots_m2: "2",
        usb_3_1: "4 puertos"
      },
      disponibilidad: "En stock",
      garantia: "3 años"
    },
    {
      nombre: "MSI PRO B760M-A",
      imagen: "img/mainboard2.jpg",
      precio: "S/ 420",
      descripcion: "Placa ideal para equipos Intel de 12° generación.",
      especificaciones: {
        chipset: "Intel B760",
        socket: "LGA1700",
        formato: "Micro ATX",
        slots_ram: "2 (DDR5 96GB)",
        slots_m2: "3",
        usb_3_2: "6 puertos"
      },
      disponibilidad: "En stock",
      garantia: "3 años"
    }
  ],
  "Procesadores": [
    {
      nombre: "Intel Core i3 10100F",
      imagen: "img/procesador1.jpg",
      precio: "S/ 330",
      descripcion: "Procesador de 4 núcleos para oficina y casa.",
      especificaciones: {
        nucleos: "4 núcleos",
        hilos: "8 hilos",
        frecuencia_base: "3.6 GHz",
        frecuencia_turbo: "4.3 GHz",
        tdp: "65W",
        socket: "LGA1200"
      },
      disponibilidad: "En stock",
      garantia: "3 años"
    },
    {
      nombre: "AMD Ryzen 5 5600G",
      imagen: "img/procesador2.jpg",
      precio: "S/ 550",
      descripcion: "Excelente rendimiento y gráficos integrados.",
      especificaciones: {
        nucleos: "6 núcleos",
        hilos: "12 hilos",
        frecuencia_base: "3.9 GHz",
        frecuencia_turbo: "4.6 GHz",
        tdp: "35W",
        socket: "AM4",
        gpu_integrada: "Radeon Vega 7"
      },
      disponibilidad: "En stock",
      garantia: "3 años"
    }
  ],
  "Fuentes": [
    {
      nombre: "Antryx Reactor 650W",
      imagen: "img/fuente1.jpg",
      precio: "S/ 210",
      descripcion: "Fuente de poder confiable para equipos gamer y oficina.",
      especificaciones: {
        potencia: "650W",
        certificacion: "80 Plus Bronze",
        ventilador: "120mm",
        conectores_pci_e: "2x 8-pin",
        conectores_sata: "4",
        ruido: "Silenciosa"
      },
      disponibilidad: "En stock",
      garantia: "2 años"
    },
    {
      nombre: "Cooler Master MWE 500W",
      imagen: "img/fuente2.jpg",
      precio: "S/ 150",
      descripcion: "Fuente económica ideal para PC de escritorio.",
      especificaciones: {
        potencia: "500W",
        certificacion: "80 Plus Bronze",
        ventilador: "120mm",
        conectores_pci_e: "1x 6-pin",
        conectores_sata: "3",
        tipo: "No modular"
      },
      disponibilidad: "En stock",
      garantia: "2 años"
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
  
  // Generar especificaciones HTML
  let especificacionesHTML = '';
  if (prod.especificaciones) {
    especificacionesHTML = '<div class="especificaciones"><h4>ESPECIFICACIONES TECNICAS</h4><ul>';
    for (const [clave, valor] of Object.entries(prod.especificaciones)) {     
      const etiqueta = clave.replace(/_/g, ' ');
      let palabra = etiqueta.slice(1);
      let mayus = etiqueta.charAt(0).toUpperCase() + palabra;
      especificacionesHTML += `<li style="text-align: left;"><strong>${mayus}:</strong> ${valor}</li>`;
    }
    especificacionesHTML += '</ul></div>';
  }

  document.getElementById('detalle-producto').innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}" class="modal-img">
    <h3>${prod.nombre}</h3>
    <p class="prod-precio-modal">${prod.precio}</p>
    <p class="descripcion-modal">${prod.descripcion}</p>
    
    ${especificacionesHTML}
    
    <div class="info-adicional">
      <p><strong>📦 Disponibilidad:</strong> <span class="disponibilidad">${prod.disponibilidad}</span></p>
      <p><strong>🛡️ Garantía:</strong> ${prod.garantia}</p>
    </div>
    
    <button class="btn-whatsapp" onclick="consultarWhatsapp('${prod.nombre}', '${prod.precio}')">💬 Consultar por WhatsApp</button>
  `;
  document.getElementById('modal-producto').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-producto').style.display = 'none';
}

function consultarWhatsapp(nombre, precio) {
  const mensaje = `Hola, me interesa: ${nombre} (${precio})`;
  const url = `https://wa.me/51993404913?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

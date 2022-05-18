import { listaProductos } from "../../services/product-services.js";

const administradorBtn = document.querySelector("[data-administrador-btn]");
const salirBtn = document.querySelector("[data-logout-btn]")

administradorBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location = "nuevo.html";
})

salirBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location = "index.html";
})

const adminContent = document.querySelector('.administrador__contenido');

const tarjetaAdmin = (imagen, titulo, precio, id, categoria) => {
    const tarjeta = document.createElement('div');
    const contenidoDiv = 
    `<div class="tarjeta__img-contenido">
        <i class="fa-solid fa-trash borrar"></i>
        <i class="fa-solid fa-pen editar"></i>
        <img src="${imagen}" alt="${titulo}" class="tarjeta__img">
    </div>
    <p class="tarjeta__descripcion">${titulo}</p>
    <p class="tarjeta__precio">$ ${precio}</p>
    <p class="tarjeta__id">#${id}</p>
    <p class="tarjeta__categoria">Categoria: ${categoria}</p>`;
    tarjeta.innerHTML = contenidoDiv;
    tarjeta.classList.add("caja")
    return tarjeta;
}

listaProductos().then((data)=>{
    data.forEach(producto => {
        adminContent.appendChild(tarjetaAdmin(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria))
    })
})
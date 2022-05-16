import { listaProductos } from "../../services/product-services.js";

const starWars = document.querySelector('.star-wars');
const consolas = document.querySelector('.consolas');
const diversos = document.querySelector('.diversos');

export const tarjetaProducto = (imagen, titulo, precio, id, categoria) => {
    const tarjeta = document.createElement('div');
    const contenidoDiv = 
    `<img src="${imagen}" alt="${titulo}" class="caja__img">
    <p class="caja__descripcion">${titulo}</p>
    <p class="caja__precio">$ ${precio}</p>
    <a href="producto.html?id=${id}&category=${categoria}" class="caja__link">Ver producto</a>`;
    tarjeta.innerHTML = contenidoDiv;
    tarjeta.classList.add("caja")
    return tarjeta;
}

listaProductos().then((data) => {
    data.forEach(producto => {
        if(producto.categoria == "Star Wars"){
            starWars.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria));
        }
        if (producto.categoria == "Consolas"){
            consolas.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria));
        }
        if (producto.categoria == "Diversos"){
            diversos.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria));
        }
    });
})

// tarjetas para seccion administrador

const adminContent = document.querySelector('.administrador__contenido');

export const tarjetaAdmin = (imagen, titulo, precio, id, categoria) => {
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


import { listaProductos } from "../../services/product-services.js";

const starWars = document.querySelector('.star-wars');
const consolas = document.querySelector('.consolas');
const diversos = document.querySelector('.diversos');

const tarjetaProducto = (imagen, titulo, precio, id) => {
    const tarjeta = document.createElement('div');
    const contenidoDiv = 
    `<img src="${imagen}" alt="${titulo}" class="caja__img">
    <p class="caja__descripcion">${titulo}</p>
    <p class="caja__precio">$ ${precio}</p>
    <a href="producto.html" class="caja__link" id="${id}">Ver producto</a>`;
    tarjeta.innerHTML = contenidoDiv;
    return tarjeta;
    
}

listaProductos().then((data) => {
    data.forEach(producto => {
        if(producto.categoria == "Star Wars"){
            starWars.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id));
        }
        if (producto.categoria == "Consolas"){
            consolas.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id));
        }
        if (producto.categoria == "Diversos"){
            diversos.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id));
        }
    });
})
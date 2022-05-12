import { listaProductos } from "../services/product-services.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

const producto = (id) => {
    const productSection = document.querySelector(".producto");
    const divImagen = document.createElement("div");
    const divContenido =document.createElement("div")
    listaProductos().then((data) => {
        data.forEach(product => {
            if (product.id == id){
                divImagen.innerHTML = `<img src="${product.imagen}" alt="${product.titulo}" class="producto__img">`
                divContenido.innerHTML = `<h2 class="producto__titulo">${product.titulo}</h2>
                <p class="producto__precio">$${product.precio}</p>
                <p class="producto__descripcion">${product.descripcion}</p>`
                divImagen.classList.add('producto__img-contenedor')
                divContenido.classList.add('producto__contenido')
                productSection.appendChild(divImagen);
                productSection.appendChild(divContenido);
            }
        });
    })
}


producto(id)
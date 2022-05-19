import { listaProductos } from "../../services/product-services.js";

const searchInput = document.querySelector("[data-search-input]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listaProductos().then(data => data.forEach(producto => {
        console.log(producto.titulo)
    }))
});

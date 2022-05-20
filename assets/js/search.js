import { listaProductos } from "../../services/product-services.js";
import { tarjetaProducto } from "../../controllers/products-controller.js";

const searchInput = document.querySelector("[data-search-input]");
const searchBtn = document.querySelector("[data-search-btn]");
const searchSection = document.querySelector(".search");
const main = document.querySelector("main")

searchInput.addEventListener("keypress", (e)=>{
    if (e.key==="Enter"){
        searchBtn.click();
        e.preventDefault();
    }
})

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    listaProductos().then(data => data.forEach(producto => {
        if((producto.titulo).toLowerCase().includes((searchInput.value).toLowerCase())){
            main.classList.add("oculto");
            searchSection.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria));
        }
        
    }))


});
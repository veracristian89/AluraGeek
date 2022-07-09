import { listaProductos } from "../../services/product-services.js";
import { tarjetaProducto } from "../../controllers/products-controller.js";

const searchInput = document.querySelector("[data-search-input]");
const searchBtn = document.querySelector("[data-search-btn]");
const searchBtnRespon = document.querySelector("[data-search-btn-respon]")
const searchSection = document.querySelector(".search");
const main = document.querySelector("main");
const tituloBusquedaContenedor = document.querySelector(".titulo__busqueda");
const titulo=document.createElement("h3")
const loginBtn = document.querySelector("[data-login-btn]");

function tituloBusqueda(busqueda) {
    
    if(titulo.innerHTML == "" || !titulo.innerHTML.includes(busqueda)){ 
        titulo.innerHTML = "";
        titulo.classList.add("titulo__busqueda");
        tituloBusquedaContenedor.appendChild(titulo);
        titulo.innerHTML = `Resultados para la busqueda: ${busqueda}`;
    } 
}

searchInput.addEventListener("keypress", (e)=>{
    if (e.key==="Enter"){
        searchBtn.click();
        e.preventDefault();
    }
})

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchSection.innerHTML ="";
    listaProductos().then(data => data.forEach(producto => {
        if((producto.titulo).toLowerCase().includes((searchInput.value).toLowerCase()) || (producto.categoria).toLowerCase().includes((searchInput.value).toLowerCase())){
            tituloBusqueda(searchInput.value)
            main.classList.add("oculto");
            searchSection.appendChild(tarjetaProducto(producto.imagen, producto.titulo, producto.precio, producto.id, producto.categoria));
        }
        
    }))
});

searchBtnRespon.addEventListener("click", (e)=>{
    e.preventDefault();
    loginBtn.classList.add("oculto");
});
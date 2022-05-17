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
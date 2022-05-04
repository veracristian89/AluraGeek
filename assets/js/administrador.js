const administradorBtn = document.querySelector("[data-administrador-btn]");

administradorBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.href = "../nuevo.html"
})
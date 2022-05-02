const contactoBtn = document.querySelector("[data-contacto-btn]");

const textoInput = document.querySelector("[data-contacto-texto]");


function ValidandoNombre(){
    const nombreInput = document.querySelector("[data-contacto-nombre]");
    nombre = nombreInput.value
    const exp = /^[a-zA-Z\s]+$/g;
    if(!exp.test(nombre)){
        alert("ingrese un nombre valido")
    }

}

contactoBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    ValidandoNombre();
});


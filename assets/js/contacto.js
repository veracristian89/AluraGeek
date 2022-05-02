const contactoBtn = document.querySelector("[data-contacto-btn]");

const textoInput = document.querySelector("[data-contacto-texto]");


function ValidandoNombre(){
    let nombreInput = document.querySelector("[data-contacto-nombre]");
    const exp = /^[a-zA-Z\s]+$/g;
    if(!exp.test(nombreInput.value)){
        alert("ingrese un nombre valido")
    }
    nombreInput.value = ""

}

contactoBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    ValidandoNombre();
});


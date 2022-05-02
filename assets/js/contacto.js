const contactoBtn = document.querySelector("[data-contacto-btn]");

function validandoContacto(){
    const nombreInput = document.querySelector("[data-contacto-nombre]");
    const textoInput = document.querySelector("[data-contacto-texto]");

    const exp = /^[a-zñA-ZÑ\s]+$/g;

    if(nombreInput.value == "" || textoInput.value == "") {
        alert ("el campo nombre y mensaje no pueden estar vacios")
    }else if(!exp.test(nombreInput.value)){
        alert("ingrese un nombre valido")
    }else if ( ((nombreInput.value).length > 40) || ((textoInput.value).length > 120) ){
        alert("nombre: maximo 40 caracteres, mensaje: maximo 120 caracteres")
    }else{
        nombreInput.value = ""
        textoInput.value = ""
    }
}


contactoBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    validandoContacto();
});


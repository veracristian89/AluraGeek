const entrarBtn = document.querySelector("[data-entrar-boton]");
const claveInput = document.querySelector("[data-clave-input]");
const mailInput = document.querySelector("[data-mail-input]");

function camposValidos() {
    const regexp = /(\w+@[a-zñA-ZÑ_]+?\.[a-zñA-ZÑ]{2,6})/g
    if(mailInput.value == "" || claveInput.value == ""){
        alert("el campo mail y clave no pueden estar vacios")
        return false
    }else if(!regexp.test(mailInput.value)){
        alert("igrese un mail valido")
        return false
    }else{
        return true;
    }

}

entrarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const mailAdmin = "admin@email.com"
    const passAdmin = "admin123"

    if(camposValidos() && (mailInput.value != mailAdmin || claveInput.value != passAdmin)){
        alert("mail o clave incorrectos")
    } else if((mailInput.value == mailAdmin || claveInput.value == passAdmin)) {
        window.location.href ="/administrador.html"
    }
});
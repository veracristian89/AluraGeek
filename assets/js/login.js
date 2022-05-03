const loginBtn = document.querySelector("[data-entrar-boton]");
const claveInput = document.querySelector("[data-clave-input]");

function validandoMail() {
    const mailInput = document.querySelector("[data-mail-input]");
    const regexp = /(\w+@[a-zñA-ZÑ_]+?\.[a-zñA-ZÑ]{2,6})/g
    
    if(mailInput.value == ""){
        alert("el campo mail no puede estar vacio")
    }else if(!regexp.test(mailInput.value)){
        alert("igrese un mail valido")
    }

}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validandoMail();

});
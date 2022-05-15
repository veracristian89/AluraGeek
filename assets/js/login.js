import { datosUsuario } from "../../services/user-services.js";

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


entrarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    datosUsuario().then(data => {
        if (camposValidos() && (data.email != mailInput.value || data.pass != claveInput.value)){
            alert("datos incorrectos")
        }else if(data.email == mailInput.value || data.pass == claveInput.value){
            window.location ="administrador.html"
        }
    })
    
});
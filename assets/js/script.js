const entrarBtn = document.querySelector("[data-entrar-boton]")

function validandoMail(){
    const mailImput = document.querySelector("[data-mail-input]")
}
function validandoClave(){
    const claveInput = document.querySelector("[data-clave-input]")
}


entrarBtn.addEventListener("click", function(event){
    event.preventDefault();
    alert("click en boton entrar");
});
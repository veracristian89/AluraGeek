const loginBtn = document.querySelector("[data-login-btn]");

const irAlLogin = () =>{
    window.location = "login.html"
}

loginBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    irAlLogin();
})

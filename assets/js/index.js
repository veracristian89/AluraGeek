const loginBtn = document.querySelector("[data-login-btn]");

const irAlLogin = () =>{
    window.location.href = "/login.html"
}

loginBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    irAlLogin();
})
const setup = () => {
    let btnLogin = document.querySelector(".btnLogin");
    btnLogin.addEventListener("click", login);
};

const login = () => {
    let username = document.querySelector(".inputUsername>.txtUsername").value;
    let password = document.querySelector(".inputPassword>.txtPassword").value;
    console.log(username);
    console.log(password);
}

window.addEventListener("load", setup);
const setup = () => {
    let btnSendMail = document.querySelector(".sendMail>.btnSendMail");
    btnSendMail.addEventListener("click", sendMail);
};

const sendMail = () => {
    let mail = document.querySelector(".emailPrompt>.txtEmail").value;
    console.log(mail);
};

window.addEventListener("load", setup);
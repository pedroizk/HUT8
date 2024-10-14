const inputUsername = document.querySelector(".name");
const inputPassword = document.querySelector(".pass");

const ativarBotao = document.querySelector(".Bl");

function active() {
    return console.log("Username: "+inputUsername.value +"\n Password: " + inputPassword.value);

}

ativarBotao.addEventListener('click', active);
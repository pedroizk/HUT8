const Badd = document.querySelector(".add");
const div = document.querySelector(".seila");
const body = document.querySelector("body");

function somar() {
    if(div.innerHTML < 10) {
    div.innerHTML = parseInt(div.innerHTML) + 1;
    }
};

if (Badd) {
    Badd.addEventListener('click', somar);
};

    // let lista = ["uva", "tomate", "banana", "abacate"];

    // for(let i =0; i < lista.length  ; i++)
    // {
    //     body.innerHTML += `<li> ${lista[i]} </li>`;
    // };
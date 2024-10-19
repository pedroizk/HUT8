const cImg = document.querySelectorAll(".gridImagens ul li img");
const imgPrincipal = document.querySelectorAll(".imgPrincipal img");

cImg.forEach((element) => {
    element.addEventListener('click', pegaURL);
});


function pegaURL(event) {
    if(event) {
        const target = event.target;
        const fonte = target.src;
        console.log('click');
        funcaoTroca(fonte);
    };
};

function funcaoTroca(varSrc) {
    imgPrincipal[0].src = varSrc;
};
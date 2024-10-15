const bola = document.querySelector(".circulo");

function moveBola(event) {
    bola.style.left = `${event.x}px`;
    bola.style.top = `${event.y}px`;
    
};


window.addEventListener('mousemove', moveBola);
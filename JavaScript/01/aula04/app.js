const bot = document.querySelector(".Bl");

function more() {
    const inf = document.querySelector("p");

    return inf.classList.toggle('act');
}

bot.addEventListener('click', more);
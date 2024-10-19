const navUl = document.querySelectorAll("nav ul li a");
newArray = Array.from(navUl);


function sorter(event) {
    const item = event.target;
    if(document.URL === item.href)
    {
        item.style.backgroundColor = "black";
        item.style.color = "white";

    }
    else{
        return console.log("Not this one");
    }
};

for(let i = 0; i < newArray.length; i++) {
    newArray[i].addEventListener('click', sorter);
};

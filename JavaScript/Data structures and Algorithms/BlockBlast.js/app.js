var matriz = Array(8).fill().map(() => Array(8).fill(0));
/* the matriz is initialized by the fill and the map function,
the fill function fills every index with a map function
that creates a array of size 8, filled with 0 
*/
const gameblock = document.getElementById('gameblock');


for(let i = 0; i < matriz.length; i++)
{
    for(let j = 0; j < matriz[i].length; j++)
        gameblock.innerHTML += `<div class='blocks'> </div>` 
}

const squares = document.querySelectorAll('.blocks');

function changeColor(event) {
    if(event.target.style.backgroundColor == "blue") 
    {
        event.target.style.backgroundColor = "#212121";
    }
    else 
    {
    event.target.style.backgroundColor = "blue";
    event.target.classList.add('full');
    console.log(event);
    }

}

squares.forEach(element => {
    element.addEventListener('click', changeColor, oncontextmenu);
});

/* 
['click', 'contextmenu', 'dbclick', 'DOMActivate', 'DOMMouseScroll', 'mousedown',
    'mouseenter', 'mouseleave' , 'mousemove', 'mouseout'
]*/

var rows = [[],[],[],[],[],[], [], []];
var columns = [[],[],[],[],[],[], [], []];
for(let i = 0; i < matriz.length; i++)
{
    for(let j = 0; j < matriz.length; j++)
    {
        rows[i].push(squares[j + (i * 8)]); 
        columns[j].push(squares[j + (i * 8)]); 
    }
    console.log(rows[i]);
}

const blocosHandler = document.querySelectorAll('.randomBlock img');
const gridDivs = document.querySelectorAll('.grid .div'); // Divs da grade

blocosHandler.forEach((element) => {
    element.setAttribute('draggable', 'false'); // Desativa o drag nativo

    element.addEventListener('mousedown', (event) => {
        event.preventDefault();

        // Posição inicial do mouse e do bloco
        const startX = event.clientX;
        const startY = event.clientY;
        
        // Offset entre o bloco e o cursor
        const rect = element.getBoundingClientRect();
        const offsetX = startX - rect.left;
        const offsetY = startY - rect.top;

        function moveBlock(e) {
            element.style.position = 'fixed';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;

            // Verifica se o bloco está sobre uma div da grade
            const hoveredDiv = document.elementFromPoint(e.clientX, e.clientY);

            if (hoveredDiv && hoveredDiv.classList.contains('div')) {
                hoveredDiv.classList.add('full'); // Adiciona a classe full se a div é parte da grid
            }
        }

        // Move o bloco ao mover o mouse
        window.addEventListener('mousemove', moveBlock);

        // Quando o mouse é solto, remove o listener de movimento
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', moveBlock);
        }, { once: true });
    });
});






let points = 0;

let interval = setInterval(() => {
    rows.forEach((row, rowIndex) => {
        let isRowFull = row.every(block => block.classList.contains('full')); // Check if all blocks in the row have 'full' class
        

        if (isRowFull) {
            console.log(`FULL ROW at index: ${rowIndex}`);
            row.forEach(element => {
                element.style.backgroundColor = '#212121';
                console.log('full row')
                element.classList.remove('full');
            });

        }
    }
    )
    columns.forEach((column, columnIndex) => {
    let isColumnFull = column.every(block => block.classList.contains('full'));

        if (isColumnFull) {
            console.log(`FULL COLUMN at index: ${columnIndex}`);
            column.forEach(element => {
                element.style.backgroundColor = '#212121';
                element.classList.remove('full');
            });

        }
    });
}, 100);



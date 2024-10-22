var matriz = Array(8).fill().map(() => Array(8).fill(0));
/* the matriz is initialized by the fill and the map function,
the fill function fills every index with a map function
that creates a array of size 8, filled with 0 
*/
const gameblock = document.getElementById('gameblock');

for(let i = 0; i < matriz.length; i++)
{
    for(let j = 0; j < matriz[i].length; j++)
        gameblock.innerHTML += `<div> </div>`
    
}
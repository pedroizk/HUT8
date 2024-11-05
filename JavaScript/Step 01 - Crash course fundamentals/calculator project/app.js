const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result');   
const equal = document.querySelector('.resultEqual');
const zera = document.querySelector('.zera');
let arrayCalc = [];
var counter = 0;

function getter(event) {
    // Put the elements on the calculator screen
    result.innerHTML += `${event.target.innerHTML}`;

    //Get the number and pushes into a array
    if(isNaN(Number(event.target.innerHTML)) === false)
    {
        if(arrayCalc[counter] === undefined)
            {
                arrayCalc[counter] = event.target.innerHTML;
            } 
        else {
            arrayCalc[counter] += event.target.innerHTML;
        }
    }
    else {
        counter += 1;
        if((isNaN(Number(arrayCalc[arrayCalc.length - 1]))))
        {
            counter -= 2;
            arrayCalc[counter] = event.target.innerHTML;
            result.innerHTML = result.innerHTML.slice(0, -2) + result.innerHTML.slice(-1);
            counter += 1;
        }
        else{
            arrayCalc[counter] = (event.target.innerHTML);
            counter += 1;
        }
    }
    console.log(arrayCalc);
    
}


buttons.forEach(e => {
    e.addEventListener('click', getter);
});

let prefix = 0;
let sufix = 0;
let signal = null;  
let resulting = null;
let a;

function calc() {
    for(let i = 0; i < arrayCalc.length; i++)
    {
        if(signal === null && resulting === null)
        {
            if(!isNaN(Number(arrayCalc[i])))
                {
                    prefix = Number(arrayCalc[i]);
                }
            else {
                signal = arrayCalc[i];
            }
        }
        
        else {
            if(!isNaN(Number(arrayCalc[i])))
            {
                sufix = Number(arrayCalc[i]);
                if (signal === '+') {
                    a = Number(prefix) + Number(sufix);
                } else if (signal === '-') {
                    a = Number(prefix) - Number(sufix);
                } else if (signal === '*') {
                    a = Number(prefix) * Number(sufix);
                } else {
                    a = Number(prefix) / Number(sufix);
                } 
                resulting = a;
                prefix = resulting;
                result.innerHTML = `${resulting}`
                sufix = null;
            }
            else{
                signal = arrayCalc[i];
        }   

    }

}
console.log(resulting)
arrayCalc.splice(0, arrayCalc.length);
arrayCalc.push(String(resulting));
counter = 0;
signal = null;
resulting = null;
a = null;
}
equal.addEventListener('click', calc);




function zeraB() {
    result.innerHTML = '';
    arrayCalc.splice(0, arrayCalc.length);
    console.log(arrayCalc);
    resulting = null;
    a = null;
    counter = 0;
}


zera.addEventListener('click', zeraB);
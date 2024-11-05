// Data types -> String, numbers, boolean, null, undefined, Symbol

const name = 'Pedro'; 
const age = 30;
const rating = 4.5; // It is still an int
const isCool = true;
const x = null; 
const y = undefined;
let z; // defined as undefined

console.log(typeof rating);

// Strings
const name1 = 'Ana';
console.log('My name is ' + name1);
console.log(`My name is ${name1}`);
name1.length
name1.toUpperCase()
name1.substring(0, 5);
names = 'Pedro, Ana';
names.split(', ');

// Arrays

const numbers = new Array(1,2,3,4,5) // new is a constructor
// or
const numbers2 = [1,2,3,4,5];

numbers2.push('Alala');
numbers2.unshift('Alolo');
console.log(numbers2);

Array.isArray(numbers)


// Object literals

const person = {
    firstName: 'John',
    LastName: 'Martins',
    address: {
        street: 'Cidade de evora',
        number: 82,
    }
}

const todos = [
    {
        id: 1,
        text: 'Take trash out',
        isCompleted: true,
    }
    ,
    {
        id: 2,
        text: 'talking',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'fly',
        isCompleted: false,
    }
    
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// Loop types

// for loops
for(let i = 0; i < 10; i++)
{

}

// While loop
while (x == false)
{

}

// Python loop

for(let todo of todos)
{

}


// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted != false;
})

console.log(todoCompleted);

// Conditionals 

// the base conditionals if -> else if -> else is equal to C

// JS aditionals 
const ziz = 10;

const color  = ziz > 10 ? 'red': 'blue';
// if ziz > 10 then color = red, else color = blue;


switch(color ) {
    case 'red': 
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('neither red or blue');
}

//Functions 

function addNums(param1, param2) {
    return param1 + param2;
}

console.log(typeof addNums(1,2 ));

// Arrow function 

const addNums2 = (num1, num2) => num1+ num2; // Arrow functions are functions that can be called without a previous function initialization
// It is a more concise way of creating functions, it can be called by using the variable name, or in other ways depending in how you initialized it
console.log(addNums2(1,2));

// Constructing objects

// Without classes -> the JS native way
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

Person.prototype.getFullName = function () { // prototypes are methods to objects, they are not initialized when the class itself is created, but it can be accessed
    return this.firstName + ' ' + this.lastName;
}

const Pedro = new Person('Pedro', 'Izkovitz', '26-09-2005')
console.log(Pedro.getFullName());

// Classes

class Person2 {
    constructor(firstName, lastName, dob) { // Constructor is the function that is called when you initiate a new object
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() { // These are the same as the prototypes, but the syntax is closer to other programming languages
        return this.firstName + ' ' + this.lastName;
    }
}

const Pedro2 = new Person2('Pedro', 'Izkovitz', '26-09-2005');



// DOM  ----------------------------------------------------------

// Single selectors

const singleID = document.getElementById('id');
const singleTAG = document.querySelector('.class (many others)');

// Multiple selectors

const nodeList = document.querySelectorAll('.class --')

// Events
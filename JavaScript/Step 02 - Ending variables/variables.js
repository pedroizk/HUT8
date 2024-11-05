// As already seen in the crash course, there is 03 ways to declare variables in JS

let var1 = 'Hello'; // -> This way you initiate a variable with limited scope + can be changed in other parts of the code

const var2 = 'world'; // -> This way you also initiate a variable with limited scope, but it can't be changed

var var3 = '!!'; // -> Oldest way of the three, has global scope and can be changed;

// Naming varriables

/* 
A variable needs to have at least these 04 elements to be considered good

1- Human language, needs to be readable
2- Try to not abreviate too much, you need to understand it's meaning by reading it
3- Do not use too common names, it needs to be specific
4- Needs to have a pattern for the team to understand

*/

// Data types

// Strings
/* 
Special characters
\n 	New line
\r 	In Windows text files a combination of two characters \r\n represents a new break, 
while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
\', \", \` 	Quotes
\\ 	Backslash
\t 	Tab
\b, \f, \v 	Backspace, Form Feed, Vertical Tab – mentioned for completeness, 
coming from old times, not used nowadays (you can forget them right now).
*/

// Some of the methods

let str = 'Welcome to this place';
str.length // gets the extension of the string
str.indexOf('Welcome') // gets the index of a character or word
str.startsWith('to'); // Checks to see if the strings starts with determined word or character
str.includes('place'); // Checks to see if the word is included in the string
str.endsWith('hi'); // Checks to see if the string ends with ->
str.slice(0, 2); // Slice the string starting by the first parameter that is the index

// Undefined

/*
1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. 
Even before a single line of code is executed JS engine assigns undefined to the variables.

2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

4.Remember undefined !== not defined.
*/

// if you do
console.log(x);
var x = 7;

// if you try to check the value of x, it`s value is going to be undefined. Why?
// -> that is because of hoisting, the first javascript tries to get the space for all variables, and then functions, and then it assign its values.


// Bigint

let largeNumber = Number.MAX_SAFE_INTEGER;
let smallestNumber = Number.MIN_SAFE_INTEGER;

console.log(largeNumber);
console.log(smallestNumber);

console.log(Number.isSafeInteger(largeNumber));

largeNumber += 2;

console.log(largeNumber);
console.log(Number.isSafeInteger(largeNumber));

// That is why you need to use Bigint, to have more safety at calculating number above the one exposed at MAX_SAFE_INTEGER
// To introduce a Bigint, there is 02 ways

let p = BigInt(1231231231231231);
let y = 123123213123n;



// Symbol

// Symbol is a new data type, it's purpose is to be a more reservate data type

const a = Symbol();

console.log(typeof a);

const character = {
    name: 'Pedro',
    Age: '19',
    Balance: 'xxxx',
    ID: '1234',
}

for(const key of  Object.keys(character))
{
    console.log(key);
};

// If you want to hide the ID per example ->

const characterHidden = {
    name: 'Pedro',
    Age: '19',
    Balance: 'xxxx',
    [Symbol('ID')]: '1234', // Now it can't be iterated by normal methods since the ID is not a string anymore
}

for(const key of  Object.keys(characterHidden))
    {
        console.log(key);
    };

// You can also make a object iterable

const characterIterable = {
    [Symbol.iterator]: function* () {
        yield 1,
        yield 2,
        yield 'abacate';
    },
}

for(const i of characterIterable) {
    console.log(i);
}
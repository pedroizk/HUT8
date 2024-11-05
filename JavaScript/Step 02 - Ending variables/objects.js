// On this topic I will try to understand the objects in JavaScript
// https://javascript.info/object
// https://www.youtube.com/watch?v=lo7o91qLzxc
// https://www.youtube.com/watch?v=rLPwCAqyCAE


// Part 01: Plain objects
// Objects are used to store collections of data, it's structure is made as follow

// Constructing prototypes
let objectMode01 = {
    name: 'Pedro', // this is a property, the property is made by using a 'key:value' the key is a string that can be called to acces the value
    age: 19,
    surnames: ['Martins', 'Izkovitz'],
    favBev: {
        coffe: true,
        water: true,
    }
}

let objectMode02 = new Object(); // this is an empty cabinet
// these objects can store any type of primitive data types


// Functions
// Objects can have metohds (fucntions)
objectMode02 = {
    sayHello: function() {
        console.log("Hello!");
    },
}
objectMode02.sayHello();
// You can call your propertys using dots or brackets, keep in mind that brackets are more powerful than dots

console.log(objectMode01['surnames'][0]);
console.log(objectMode01.surnames[0]);

// Inheritance
// You can use the object constructure just like a class in other languages

//First you need a base object

const vehicle = {
    wheels: 4,
    engine: () => {
        return console.log('Vruuummm');
    }
}

let truck = Object.create(vehicle);
console.log(truck.wheels);

truck = {
    year: '2024',
}
truck.doors = 5;
truck['oil'] = 'regular';
// You can introduce new property in both of these ways
console.log(truck);

// additional operators
delete truck.year // deletes the property
if('doors' in truck) { // checks to see if the key exists
    console.log('TRUE');
}
else {
    console.log('FALSE');
}




// Some object methods
console.log(Object.keys(truck));
console.log(Object.values(truck));


// For LOOPS

for(let key in truck)
{
    console.log(truck);
    console.log(truck.key);
}

// Destructing objects

const jobs = {
    doctor: 'Eduardo',
    engineer: 'Otavio',
    lawyer: 'Olivio',
}

const {doctor:variableName} = jobs;
console.log(variableName);
// Here we are getting the value of the key doctor from the object jobs, and putting its value onto a variable named variableName


// Part 02: Object Constructing and Prototypes

// Objects can be constructer using functions

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
} // this is a 'class', this is the older version of making a class with JS

// after this you can construct other objects using this function, the object will inherit the methods

const Pedro = new Person('Pedro', 'Izkovitz');
console.log(Pedro);


// You can think of the introductiong of the class on the line 103 as the __init__ function in Python, it will be called when you create a new object

// Prototypes
// Prototypes are like functions inside the class, they are methods that can be called by the dot method

Person.prototype.hello = function(){
    return `Hello, my name is ${this.firstName + " " + this.lastName}`;
} // this is just one of the ways to make a prototype

console.log(Pedro.hello());

let sayHi = {
    say: 'hi!',

}

Person.__proto__ = sayHi;

console.log(Pedro.say);

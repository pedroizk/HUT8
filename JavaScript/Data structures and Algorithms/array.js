// Understanding arrays in javascript - Pedro Izkovitz

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/* A array in JavaScript as everything else is a OBJECT. And has a lot of methods. For some reason the ARRAY in JS is not homogeneous
   you can put a string and an int in the same array */


// 1. U can copy an array by using the from method

let array1 = [1,2,"almoco",4,5];
console.log(array1);

let array2 = Array.from(array1);
console.log(array2);

// 2. There are lots of built-in methods to arrays
console.log(array1.length) // => checks the size of the array
console.log(array1.join('')) // => concatenates in a string all the elements in th array
console.log(array1.slice(2)) // => used to take apart one of the values inside the array. the syntax START and END can be used
console.log(array1.indexOf(1)) // finds the index of something. there are variation indexOfLast indexOfFirst\
array1.splice(4,1, 'chorume');
console.log(array1) // replaces one item at index four to -> chorume


// PUSH and POP
array1.push('abacate') // now 'abacate' is part of the array. 
array1.pop() // takes out the last element of a array


// 3. if you set a element to a array 
array1[10] = 'clarabela';
console.log(array1);

// 4. forEach() method
array1.forEach((element) => console.log(element));
// You can use the forEach for arrays of objects too. the foreach does not return anything, it just uses a callback function
array1.forEach((element, index) => {
   console.log(`${index}: ${element}`); // the forEach does not visit empty slots at all
}
)

// 5. new fors
for (const item of array1) {
   
}


// 6. map method
const maping1 = array1.map((x) => x + 1);
console.log(maping1) // takes a teporary variable as the array item.

// Explanation Iterative methods
/* Most iterative methods in JS receive a callback function as argument
   1. The element, 2. the index, 3. the array
*/
// Understanding the arrow  function on JS 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/* The arrow function is a anonymous function, it does not accept methods nor can be created with constructors.
*/

const soma = (v1, v2) => {return v1 + v2};
console.log(soma(1, 2));

const sqr = n => {return n*n};
console.log(sqr(3));
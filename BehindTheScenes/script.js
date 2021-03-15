'use strict';

/*=================== Scope and socpe chain ===================================*/

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); // Global variable - Did Variable lookup

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Work with scope chain
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Michael'; // Creating a new variable, because it is in another scope, with same name alredy used
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!'; // change of output's variable value, no problem
    }
    // console.log(str); // Impossible to acess with scope chain
    console.log(millenial); // Work beacuse variables declared com var (< ES6) can be use in all function - function scope
    // add(2, 3); // Can be use only in block scope defined - IF "strict mode" is defined
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'jonas';
calcAge(1991); // Function called after 'firstName' was declared, so it's okay
// console.log(age); // Impossible to acess with scope chain
// printAge();// Impossible to acess with scope chain

/*========================= Hoisting and TDZ ===================================*/

// -Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// - Functions
console.log(addDelc(2, 3));
// console.log(addExpr(2, 3)); // Not work
// console.log(addArrow(2, 3)); // Not work

function addDelc(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
// console.log(numProducts); // var defined after function called = undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

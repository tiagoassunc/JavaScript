'use strict';

//=================== Scope and socpe chain ===================================

/* function calcAge(birthYear) {
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
 */
//========================= Hoisting and TDZ ===================================

/* // -Variables
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
console.log(z === window.z); */

/*========================= This keyword ===================================*/

/* console.log(this); // Window - this of global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // Undefined , function this keyword - because strict mode, without strict mode like 'console.log(this);' show global object
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window because arrow do not have the this keyword, so insted use the this of his parent function/scope
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // In method the this keyword is the object calling the method (jonas.method)
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // Point to matilda that is the object calling the method

const f = jonas.calcAge; // Possible to do cause function is a value
f(); // do not work because no one is calling, is just a regular function = undefined, undefined.year = error */

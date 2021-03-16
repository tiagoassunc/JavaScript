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

/*========================= Regular VS arrow functions===================================*/

/* // var firstName = 'Matilda'; // variables declared with var create properties on the global object

const jonas = {
  // This is a Object literal, != code block, so do not have your own scope
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    //const self = this; //  self or that, to use a variable as this
    //const isMillenial = function () {
    //console.log(self);
    //console.log(self.year >= 1981 && self.year <= 1996);
    // //console.log(this.year >= 1981 && this.year <= 1996); // ///Undefined because is a regular function even though it's /////inside a method
    //};

    // Solution 2
    const isMillenial = () => {
      // Work because arrow function use this of parent, in this case calcAge so this = jonas
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet(); // = Hey Matilda
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  // Just exist in regular functions
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 8); */

/*========================= Regular VS arrow functions===================================*/

/* let age = 30; // Primitive (boolean, number, string)
let oldAge = age;
age = 31; // Stored in call stack, so creat another adress value
console.log(age);
console.log(oldAge);

const me = {
  // Consts are only imutable for primitive values, not reference values (like object, functions)
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27; // storied in heap, so change the object value
console.table('Friend:', friend); // age 27
console.table('Me:', me); // age 27 */

/* ===================================================================== */

/* // Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Refernece types
const jessica = {
  firsName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {} // Do not work because u changing de path object

//Copying objects
const jessica2 = {
  firsName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // Creating a new object merged jessica and {} with same variables
jessicaCopy.lastName = 'Davis'; // Changing lastName variable of the new object

jessicaCopy.family.push('Mary'); // Pushed in both objects even thoug it was pushed just in jessicaCopy
jessicaCopy.family.push('Jhon');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy); */

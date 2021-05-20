//// OPP Object-Oriented Programming ////
'use strict';

/// Constructor Functions and the new Operator ///

// Initializate with Capital letters
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this ↓
  // this.calcAge = function () {
  //   console.log(2021 - this.birthYear);
  // };
};

// Calling constructto with 'new'
// What happen => 1. New empty {} object is created
// 2. function is called, this (keyword) = {}
// 3. New object {} is linked to a prototype
// 4. function automatically return {}
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const tiago = new Person('Tiago', 2001);
const jack = new Person('Jack', 1975);
console.log(tiago, jack);

console.log(jonas instanceof Person); // Checkinh if is a instance of function constructor
const jay = { firstName: 'Jay', birthYear: 1999 };
console.log(jay instanceof Person);

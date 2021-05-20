//// OPP Object-Oriented Programming ////
'use strict';

/// Constructor Functions and the new Operator ///

// Initializate with Capital letters
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName; // this points -> object itself
  this.birthYear = birthYear; // this points -> object itself

  // Never do this ↓ => cause creat a function to every object created
  // this.calcAge = function () {
  //   console.log(2021 - this.birthYear);
  // };
};

// Calling constructor with 'new'
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

/// Prototypes ///

// All objects creat by the constructor function inherit (acces) all methods and properties
console.log(Person.prototype); // All Constructor Functions has a Prototype property (Object)
Person.prototype.calcAge = function () {
  // Do this -> creat only one copy of this function => that objects can acess (ihnreritance)
  console.log(2021 - this.birthYear);
}; // ↓
jonas.calcAge();
tiago.calcAge();

console.log(tiago.__proto__); // prototype of object
console.log(tiago.__proto__ === Person.prototype); // prototype of object === prototype property of constructor function
console.log(Person.prototype.isPrototypeOf(tiago)); // Checking if is a prototype of an object
console.log(Person.prototype.isPrototypeOf(Person)); // Person.prototype means => Prototype Of all Objects created/Linked

// Setting properties
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, tiago.species);

// Own property => declared on object itself NOT on Prototype property (ihnreted)  ↓
console.log(tiago.hasOwnProperty('firstName')); // Checking own property
console.log(tiago.hasOwnProperty('species')); // Checking own property

/// Prototypal Inheritance on Built-In Objects ///

console.log(tiago.__proto__); // Up in prototype chain => prototype property of Person
console.log(tiago.__proto__.__proto__); // Up in prototype chain => prototype property of Object
console.log(tiago.__proto__.__proto__.__proto__); // Up in prototype chain => reaches the top so = null
console.log(Person.prototype.constructor); // Points back to Person

// Prototype of constructor (Array, Object, fuctions, HTMLHeadingElement etc) = protype of all objects created by that constructor
const arr = [3, 5, 8, 2, 3, 5, 3, 8, 2, 2]; // new Array === []
console.log(arr.__proto__); // All methods that we can acces => ihnretance from prototype
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
// Creating methods on Array.protype
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// Exemplae of a enourmous prototype chain __proto__
const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

//// OPP Object-Oriented Programming ////
'use strict';

/* /// Constructor Functions and the new Operator ///

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

/// Static Methods ///
// ↓ Static Methods is attached to the constructor => Arry.from (Not [].from) or Number.parseFloat(12) (not 12.parseFloat())
Person.hey = function () {
  console.log('Hey there 👋🏾');
  console.log(this);
};
Person.hey();
// So Not ihnreted ERROR => jonas.hey()

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
console.log(arr.__proto__); // All methods that we can acces => inheritance from prototype
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

/// ES6 Classes ///

// 1. Classes are NOT hoisted (can't use before declaration on code)
// 2. Class are first-class citizes (Can pass and return in functions)
// 3. Classes are executed in strict mode ↓

// Classe => Continue implementing prototype inheritance behind the scenes with a better syntax
// Class expression ↓
// const Person = class{}

// Class declaration ↓
class PersonCl {
  constructor(fullName, birthYear) {
    // Properties
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods => Added to .prototype property (outside constructor)
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  /// Setters and Getters ///
  // Just like a regular method that we set on the prototype => create a property
  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists => ( Usin as validation => common case)
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // Using _fullName to creat another variable => without conflict with fullName => _ convention
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName; // Return _fullName in fullName variable
  }

  /// Static Methods ///
  // NOT added to the .prototype property
  static hey() {
    console.log('Hey there 👋🏾');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica Davis', 1969);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// Creating methods in Class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

const walter = new PersonCl('Walter White', 1995);
PersonCl.hey();

/// Setters and Getters ///

// Assessor properties
const account = {
  owner: 'Jonas',
  movements: [200, 250, 120, 300],

  get latest() {
    // Method turn result as a property
    return this.movements.slice(-1);
  },

  // Need exactly one parameter ↓
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); // Get => Read as property
account.latest = 50; // Set => set as property
console.log(account.movements);

/// Object.create ///

// Use essentially to manually SET the PROTOTYPE of an OBJECT
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear); // All persons creat will have this __proto__
  },

  // SIMULATES the constructor ↓
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto); // Prototype ihnreritance in a different way
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // Equal PersonProto that is the protype of object

const sarah = Object.create(PersonProto);
// Non manually way of set the properties ↓
sarah.init('Sarah', 1979);
sarah.calcAge(); */

////// Inheritance Between "Classes" //////

/* /// Constructor Functions ↓ ///
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Setting (.call) this keyword to the object that will be create
  this.course = course;
};
// Create a empty prototype objetc => need to be first add methods
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

// Inspecting
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// Visual prototype chain
console.log(mike instanceof Student); // Both true cause are linked
console.log(mike instanceof Person); // Both true cause are linked
console.log(mike instanceof Object); // Both true cause are linked

// Fixing constructor
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

/* /// ES6 Classes ///

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 👋🏾');
    console.log(this);
  }
}

// extends prototype to child class
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Allways before
    super(fullName, birthYear); // Constructor function of the parent
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old but as a student i feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const vittoria = new StudentCl('Vittoria Rappella', 2002, 'Medicine');
vittoria.introduce();
vittoria.calcAge();

/// Object.create ///

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay Creed', 1930, 'Computer Science');
jay.introduce();
jay.calcAge(); */

///// Another Class Example /////
///// Encapsulation: Protected Properties and Methods /////
///// Encapsulation: Private Class Fields and Methods ↓ ///// => FUTURE

// 1)Public fields => gonna be in all instances
// 2) Private fields
// 3) Public methods
// 4) Private methods
class Account {
  // 1)Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected propertie => convention _
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`thanks for oppen a new account, ${owner}.`);
  }

  // 3) Public methods Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  //   return true;
  // }
}
const acc1 = new Account('Tiago', 'R$', 6666);
console.log(acc1);

// acc1.movements.push(650);
// acc1.movements.push(-250);
// acc1.approveLoan(1000);

acc1.deposit(650);
acc1.withdraw(150);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(123));

/*
 PART 01 
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let fistName = "Tiago";
console.log(fistName); */



/* 
 PART 02
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); */



/* 
 PART 03
const birthYear = 1991;
// birthYear = 1990;
//const job;

// not use more
var job = "programmer";
job = "teacher";
console.log(job) */



/* 
 PART 04
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'jonas';
const lastName = "Schemedtmann";
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;// x = x + 1
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */



/* 
 PART 05
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x,y;
x = y = 25 - 10 -5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */



/* 
 PART 06
const firstName = 'Tiago';
const job = 'programmer';
const birthYear = '2001';
const year = 2037

const tiago = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(tiago);

const tiagoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(tiagoNew)

console.log(`Just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String with
multiple
lines`); */


/* 
 PART 07
const age = 17;

if(age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait ${yearsLeft} year(s) :)`);
}

const birthYear = 2010;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); */



/* 
 PART 08
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + 'years old'); // +
console.log('23' - '10' - 3); // -, /, *, >, <
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n); // 10 */



/* 
 PART 09
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Tiago'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
} */



/* 
 PART 10
const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { // 23 === 23
  console.log('Cool! 23 is a amazing number!');
} else if(favourite === 7) {
  console.log('7 is also a cool number');
} else if(favourite === 9) {
  console.log('9 is also a cool number');
} else {
   console.log('Number is not 23 or 7 :(')
}

if(favourite !== 23) console.log('Why not 23?'); */



/* 
  PART 11
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//if(shouldDrive) {
//  console.log('Sarah is able to drive!')
//} else {
//  console.log('Some else should drive...')
//} 

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Some else should drive...')
} */



/* 
 PART 12
const day = 'sunday';

switch(day) {
  case 'monday': //day ==='monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day');
}

//const day = 'monday';

if(day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday') {
  console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if(day === 'friday') {
  console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday' ) {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day');
} */



/* 
  PART 13 ("The conditional ternary operator")
const age = 15;
// age >= 18 ? console.log('I like to drink wine 🍷'):
//console.log('I like to drink water 💧');

const drink = age>= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine🍷'
} else {
  drink2 ='water💧';
}
console.log(drink2)

console.log(`I like to drink ${age>= 18 ? 'wine🍷' : 'water💧'}`); // Usin in ${} becouse ternary produce value and if else not, just actions*/


/*============================ :D ===================================================================*/


'use strict'; //stric mode, mode to avoid bugs

/* 
 PART 14 - Stric mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534; */



/* 
  PART 15 - Functions 01
// define function
function logger() {
  console.log('My name is Tiago');
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
  const juice = `Juice with 🍎${apples} apples and 🍊 ${orange} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice); */



/* 
  PART 16 Function declaration VS Function expression
// function declaration (you can call before declare)
function calcAge1(birthYear) { // (birthYear) = parameter
  return 2021 - birthYear;
}
const age1 = calcAge1(2001); // (2001) = argument

// function expression "anonymous function" (you can't call before declare)
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1, age2); */



/* 
 PART 17 - Arrow functions
// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2002)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement}`
}

//console.log(yearsUntilRetirement(prompt("Ano de nascimento"), prompt("Primeiro nome")));
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */



/* 
  PART 18 - Functions calling other functions
function cutFruitPieces(fruit){
  return fruit * 10;
}

function fruitProcessor(apples, oranges) {
  const applePieces =cutFruitPieces(apples);
  const orangePieces =cutFruitPieces(oranges);

  const juice = `Juice with 🍎${applePieces} pieces of apples and 🍊 ${orangePieces} pieces of oranges.`
  return juice;
}

console.log(fruitProcessor(2, 3)); */



/* 
  PART 19 - functions review
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎈`);
    return -1;
  }
  
}
console.log(yearsUntilRetirement(1991, 'Tiago'));
console.log(yearsUntilRetirement(1970, 'Mike')); */



/* 
 Part 20 - Arrays 
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Thuz', 'Thales', 'Marcelo'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Scott';
console.log(friends);
// friends = ['Bob', 'Alice']

const fistName = 'Tiago';
const tiago = [fistName, 'Assunção', 2021 - 2001, 'programmer', friends];
console.log(tiago)

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages); */



/* 
  PART 21 - Basic array operations
// Add elements
 const friends = ['Michael', 'Steven', 'Peter'];
 const newLength = friends.push('Tiago');
 console.log(friends);
 console.log(newLength);

 friends.unshift('John');
 console.log(friends);

// Remove elements
 friends.pop();// Last
 const popped = friends.pop();
 console.log(popped);
 console.log(friends);

 friends.shift();
 console.log(friends);

 console.log(friends.indexOf('Steven'));
 console.log(friends.indexOf('Bob'));

 friends.push(23);
 console.log(friends.includes('Steven'));
 console.log(friends.includes('Bob'));
 console.log(friends.includes(23));

 if (friends.includes('Steven')) {
   console.log('You have a friend called Steven');
 } */



/* 
 PART 22 - Objects, Dot VS Bracket
const tiago = { // Object literally sintax
  firstName: 'Tiago',
  lastName: 'Assunção',
  age: 2021 - 2001,
  job: 'Programmer',
  friends: ['Marcelo', 'Thuz', 'Thales'],
  girlfriend: 'Vittoria'
}; // 5 propety firstName, lastName ...
//console.log(tiago);

console.log(tiago.lastName)
console.log(tiago['lastName']);

const nameKey = 'Name';
console.log(tiago['first' + nameKey]);
console.log(tiago['last' + nameKey]);
//console.log(tiago.'last' + nameKey); //Don't work XXX

const interestedIn = prompt('What do you want to know about Tiago ? Choose between firstName, lastName, age, job, friends and girlfriend');

if(tiago[interestedIn]) {
  console.log(tiago[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, friends and girlfriend')
}

tiago.location = 'Brasil';
tiago['twitter'] = '@asnammusa';
console.log(tiago);


console.log(`${tiago['firstName']} has ${tiago.friends.length} friends, and his best friend is called ${tiago.friends[0]}`); */



/* 
  PART 23 - Object Methods
  const tiago = {
  firstName: 'Tiago',
  lastName: 'Assunção',
  birthYear: 2001,
  job: 'Programmer',
  friends: ['Marcelo', 'Thuz', 'Thales'],
  girlfriend: 'Vittoria',
  hasDriversLicense: true,

   //calcAge: function(birthYear) { // Function attached to an object is called method
   // return 2021 - birthYear;
  //} 

   //calcAge: function() {
    // console.log(this);
    //return 2021 - this.birthYear;
  //} 

  //calcAge: function() {
    //this.age = 2021 - this.birthYear;
    //return this.age;
  //},

  getSummary: function() {
   /*  if(this.age >= 18) {
      return `${tiago.firstName + ' ' + tiago.lastName} is a ${tiago.age}-years old ${tiago.job}, and he has a driver's license ✅ 🚗`;
    } else {
      return `${tiago.firstName + ' ' + tiago.lastName} is a ${tiago.age}-years old ${tiago.job}, and he has not a driver's license ❌ 🚗`;
    } 
    return `${tiago.firstName + ' ' + tiago.lastName} is a ${tiago.age}-years old ${tiago.job}, and he has ${this.hasDriversLicense ? 'a ✅' : 'no ❌'} driver's license 🚗`;
  }
}; 

console.log(tiago.calcAge());

console.log(tiago.age);
console.log(tiago.age);
console.log(tiago.age);

console.log(tiago.getSummary()) */ 
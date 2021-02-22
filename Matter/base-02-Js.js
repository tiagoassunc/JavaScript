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
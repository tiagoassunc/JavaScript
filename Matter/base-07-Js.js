'use strict';

///////////////////////////////////////////////////////////////////////////////////////////////// Converting and Checking Numbers

/* console.log(23 === 23.0); // Only one data type for numbers - base 2 => allways decimal

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // Normal error of Js

// Conversion
console.log(Number('23'));
console.log(+'23'); // Type coercion

// Parsing
console.log(Number.parseInt('30px', 10)); // Work cause functions are too an object => Need to begin with number
console.log(Number.parseInt('e23', 10)); // ,10 => base 10

console.log(Number.parseInt('  2.5rem')); // Int
console.log(Number.parseFloat(' 2.5rem  ')); // Decimal

// Check if is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// BEST WAY OF CHECKING IF VALUE IS A NUMBER
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
 */

/////////////////////////////////////////////////////////////////////////////////////////////////Math and Rounding

/* console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // Do type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // Do type coercion

console.log(Math.min(5, 18, '23', 11, 2));

// Area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random numbers
console.log(Math.random()); // Number > 0 && Number <1
console.log(Math.random() * 6);
console.log(Math.trunc(Math.random() * 6) + 1); // Removing decimal part and + 1 to 6 appears

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 => 0...(max - min) => min...max
console.log(randomInt(10, 20));

// INT
// Rounding integers
console.log(Math.trunc(23.3)); // Just positive

// Just int
console.log(Math.round(23.3));
console.log(Math.round(24.9));

// Rounding up
console.log(Math.ceil(23.3));
console.log(Math.ceil(24.9));

// Rounding down
console.log(Math.floor(23.3));
console.log(Math.floor('24.9')); // Positive and negative != trunc

// DECIMAL
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2)); // + => to convert to number */

///////////////////////////////////////////////////////////////////////////////////////////////// The Remainder Operator

/* console.log(5 % 2); // 5 = 2 * 2 + 1
console.log(8 % 3);

// Even
console.log(6 % 2 === 0);

// Odd
console.log(5 % 2 !== 0);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(13));
console.log(isEven(514)); */

///////////////////////////////////////////////////////////////////////////////////////////////// Working with BigInt

/* // MAX value
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
// Bigger values are sometimes correct and sometimes wrong
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// BigInt => store numbers as large as we want
console.log(7895793874932874837739824782738n); // n => BigInt
console.log(BigInt(7895793874932));

// Operations
console.log(10000n + 1000n);
console.log(
  1467998326483165764587364583658365843658n * 8903849083209849408230000000n
);

const huge = 579347583459758349759435874n;
const num = 23;
console.log(huge * BigInt(num)); // need to transform variable value in big int

// Excepitions
console.log(20n > 15);
console.log(20n === 20); // Different primitive type
console.log(typeof 20n);
console.log(20n == ' 20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(10n / 3n); // Return closest bigint
console.log(10 / 3); */

///////////////////////////////////////////////////////////////////////////////////////////////// Creating Dates

// Creat a date
/* const now = new Date();
console.log(now);

console.log(new Date('Sat May 08 2021 12:34:03'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33)); // Corrects the date

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // time stamp */

/* // Workig with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // 0 based => 10 = Nov (11)
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142267780000));

console.log(Date.now()); // Now

future.setFullYear(2040); // ... */

///////////////////////////////////////////////////////////////////////////////////////////////// Operations With Dates

/* const future = new Date(2037, 10, 19, 15, 23);
//console.log(Number(future)); // Time stamp
console.log(+future); // Time stamp

// Calc days passed
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // Absolute / Seconds - minutes - hours - days

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1); */

///////////////////////////////////////////////////////////////////////////////////////////////// Internationalizing Numbers (Intl)

const num = 8049589043.45;

const options = {
  style: 'currency', // unit, percent
  unit: 'mile-per-hour', // Celcius, mile-per-hour
  currency: 'EUR',
  //useGrouping: false,
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

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

console.log(5 % 2); // 5 = 2 * 2 + 1
console.log(8 % 3);

// Even
console.log(6 % 2 === 0);

// Odd
console.log(5 % 2 !== 0);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(13));
console.log(isEven(514));

'use strict';

//////////////////////////////// Converting and Checking Numbers ////////////
console.log(23 === 23.0); // Only one data type for numbers - base 2 => allways decimal

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // Normal error of Js

// Conversion
console.log(Number('23'));
console.log(+'23'); // Type coertion

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

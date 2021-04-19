'use strict';

/*========================== Simple Array Methods ====================================================*/

/* let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // Creat new array with part off the selected array
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // Negative starts from the end
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Just a copy
console.log([...arr]); // Just a copy

// SPLICE
// console.log(arr.splice(2)); // change the original array, do the same as slice
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Reverse the array, mutate the original array

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // Concatenate arrays
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); // Join in a string with a separeter that we deine
// And all others */

/*========================== Looping Arrays: forEach ====================================================*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1} you deposited ${movement}`);
  else console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`); // Math to get without the sign
}

console.log('------ forEach --------'); // FOREACH ---------------------------

movements.forEach(function (move, i, arr) {
  // FIRST ALWAYS TE CURRENT ELEMENT - SECOND ALWAYS CURRENT INDEX - THIRD ALWAYS ARRAY
  // Higher order function that requires a callback function | loop over array and execute callbak in each interation
  if (move > 0)
    console.log(
      `Movement ${i + 1} you deposited ${move}. You all movemets was ${arr}`
    );
  else
    console.log(
      `Movement ${i + 1} you withdrew ${Math.abs(
        move
      )}. You all movemets was ${arr}`
    );
}); */

/*========================== forEach With Maps and Sets ====================================================*/

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, Set) {
  console.log(`${_}: ${value}`);
});

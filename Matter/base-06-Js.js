'use strict';

/*========================== Simple Array Methods ====================================================*/

let arr = ['a', 'b', 'c', 'd', 'e'];

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
// And all others

'use strict';

/*========================== More Ways of Creating and Filling Arrays ====================================================*/

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Creating
const x = new Array(7);
console.log(x);

// Filling - Empty arrays
//x.fill(1);
x.fill(1, 3, 5); // Number to fill, begin, end
console.log(x);

// Filling arrays
arr.fill(23, 4, 6);
console.log(arr);

// Array.from - use length and map method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ because we don't need the parameter but need i, second parameter
console.log(z);

/*========================== Sorting Arrays ====================================================*/

/* // SORT => put arrays in alphabetical order - MUTATES THE ORIGINAL ARRAY
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// SORT NUMBERS => put arrays in numeric order
// Return < 0, A, B (keep order)
// Return > 0, B, A (switch order)

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

//Simple way
movements.sort((a, b) => a - b);

//Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return +1;
});
console.log(movements); */

/*========================== flat and flatMap ====================================================*/

/* // FLAT => Transform in one big array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // Two level of nasting (2)

// Creating balance of  all movements
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// flat
const balance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(balance);

// FLATMAP => combines flat and map
const balance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(balance2); */

/*========================== some and every ====================================================*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

console.log(movements);
// INCLUDES => check equalities
console.log(movements.includes(-130));

// SOME => Search for a condition returns true or false
const anyDeposits = movements.some(mov => mov > 3000);
console.log(anyDeposits);

//EVERY => all elements comply the condition returns true
console.log(account4.movements.every(mov => mov > 0));
console.log(movements.every(mov => mov > 0));

// Separate callback => use to refactoring
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

/*========================== The find Method ====================================================*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const firstWithdrwal = movements.find(mov => mov < 0); // find => Just the first element in array that satisfy that condition
console.log(firstWithdrwal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// With for of loop
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
} */

/*========================== The Magic of Chaining Methods ====================================================*/

/* const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); */

/*========================== The reduce Method ====================================================*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   // First paramether alwas the accumulator, like a snow ball
//   console.log(`Interation number ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // the start value of accumulator
// console.log(balance);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const maxMovement = movements.reduce(
  (acc, cur) => (cur > acc ? (acc = cur) : (acc = acc)),
  0
);
console.log(maxMovement); */

/*========================== The filter Method ====================================================*/
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); */

/*========================== The map Method ====================================================*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   // Converting euro to usd (usign eurToUsd)
//   return mov * eurToUsd; // The new array
//   // return 23;
// });
// Doing with arrow, not normal function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

// Doing the same with for
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// Return a arr of strings
const movementsDecripstion = movements.map(
  (mov, i) =>
    `Movement ${i + 1} you ${mov > 0 ? 'deposited' : 'wirhdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDecripstion); */

/*========================== forEach With Maps and Sets ====================================================*/

/* // Map
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
}); */

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

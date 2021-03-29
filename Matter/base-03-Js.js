'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  // Better sintax of functions in object literals
  order(StarterIndex, mainIndex) {
    // Give the object as an single argument, and destructuring in 'function ()' - the order is not important
    return [this.starterMenu[StarterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1, // '=1' default value
    mainIndex = 0,
    time = '20:00',
    addres,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },

  // Usual function in object
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(mainIngredient);
    console.log(otherIngridients);
  },
};

/*========================== Looping Objects , Keys, Values Entries====================================================*/
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Property ENTRIES - Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// Destructuring in a loop, using keys and value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*========================== Optional Chaining (?.) ====================================================*/

/* // IF EXISTS
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);
//console.log(restaurant.openingHours.mon.open);

// WHIT optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // Using [day] because using variable name as property name
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// Arrays
const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];
//const user = [];
console.log(user[0]?.name ?? 'User array empty'); */

/*========================== Looping Arrays (The for-of loop) ====================================================*/

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]); */

/*========================== The Nulish Coalescing Operator (??) ====================================================*/

/* // Work in a wrong way because 0 is a false value
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Work correctly showing 0, because (??) Nullish: null and undefined, (NOT 0 an '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/*========================== Short Circuiting (&& and ||) ====================================================*/
/* console.log('----- OR ------');
// Use ANY data type, return ANY data type, short-circuiting (return the first true value || the last false value)
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND ------');
console.log(0 && 'Jona'); // Thes AND operator short circuiting the first false
console.log(7 && 'Jonas'); // And if no flase value return the last true value

console.log('Hello' && 23 && null && 'Tiago');

// Praticle example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms'); */

/*========================== Rest Pattern and Parameters ====================================================*/

/* // SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // Shows 1,2, [3,4,5] Putting 3,4,5 in others array

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  // Rest
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}; // Rest parameters
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // Spread

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // Showing a main ingredient and array of others ingredients
restaurant.orderPizza('mushrooms'); */

/*========================== The Spred Operator  ====================================================*/

/* // Similar with destructuring, simple way to use arrays and objects data outside them, but we do not creat new variables

const arr = [7, 8, 9]; // Adding new elements at arr begin
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Spred take all the values of arr and rite them individualy - Without '...' = [1, 2, Array(3)]
console.log(newArr);

console.log(...newArr); // Turn elements individuals
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Adding new ar with main menu and other Strings
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Works in all ITERABLES,: arrays, strings, maps sets. NOT objects
const str = 'Silvia';
const letters = [`${str}'s letters`, ...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Assunção`); // Do not work, multiple values separed by a "," are only expected on build arrays and pass arguments in functions

// Scapes = "\'" = ' - Ex: 'Don\' do this'
// Real word example
const ingredients = [
  //prompt("Lets's make pasta! Ingredient 1?"),
  //prompt("Lets's make pasta! Ingredient 2?"),
  //prompt("Lets's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }; // Copy end adding things in objects
console.table(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurant.name); */

/*========================== Destructuring Objects ====================================================*/
/* restaurant.orderDelivery({
  time: '22:30',
  addres: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  addres: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant; //Putting object variables in global variables
console.table(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; //Putting object variables in global variables and change variables name
console.log(restaurantName, hours, tags);

// Default values

const { menu = [], starterMenu: starters = [] } = restaurant; // Setting default value, without it we get undefined
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// Let or const {a,b} = obj does not work and {a, b} = obj returns a error (Unexpected token '='), cause Js expect a code block
({ a, b } = obj);
console.log(a, b); // 23  7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/*========================== Destructuring Arrays ====================================================*/

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // Destructuring the array

let [main, , secondary] = restaurant.categories; // Skping the Pizzeria
console.log(main, secondary);

// const temp = main; // Switching main and secundary, without destructuring
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); // Switching main and secundary, using destructuring

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]]; // Nested = arr inside arr
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); // Destructuring inside destructuring

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

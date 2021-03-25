'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (StarterIndex, mainIndex) {
    // Give the object as an single argument, and destructuring in 'function ()' - the order is not important
    return [this.starterMenu[StarterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, // '=1' default value
    mainIndex = 0,
    time = '20:00',
    addres,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(
      `The main ingredient chosen was ${mainIngredient} and the add-ones was ${otherIngridients} .`
    );
    console.log(mainIngredient);
    console.log(otherIngridients);
  },
};

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

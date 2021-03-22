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
};

/*========================== Destructuring Objects ====================================================*/
restaurant.orderDelivery({
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
console.log(o, c);

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

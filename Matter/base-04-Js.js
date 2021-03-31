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

/*========================== Sets ====================================================*/
const ordersSet = new Set([
  //Unique and no index (no way getting values out of Set)
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Duplicade values gone, like arrays are iterables, order are irrelevant
console.log(new Set('Tiago'));

console.log(ordersSet.size); // In this case how many different meals we have

console.log(ordersSet.has('Pizza')); // Show if contains
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread'); // Add
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); // Delete
//ordersSet.clear(); // Delete all
console.log(ordersSet);

// Iterable, so we can loop over them
for (const order of ordersSet) console.log(order);

//Example - remove duplicade values of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Just staff, cause is alredy a iterable
// Spread operator work in all iterables - Converting Set in Array
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // Show how many different works we have in arr

console.log(new Set('Tiago').size); // how many different letters are in my name (String is also a iterable)

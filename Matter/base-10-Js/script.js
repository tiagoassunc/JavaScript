//// Importing module ////
console.log('Importing module');

// named import
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// Importing all => similar to the class functionality
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// default import
// import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js'; // avoid mix both
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);
console.log(cart);

/* //// The Module Pattern ////
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); */

/* //// CommonJS Modules ////

// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
})

// Import
const {addTocart} = require('./shoppingCart.js') */

//// Introduction to NPM ////

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import cloneDeep, { constant } from 'lodash';

const state = {
  cart: [
    { product: 'bread', quanty: 5 },
    { product: 'pizza', quanty: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// Parcel state maintain
if (module.hot) {
  module.hot.accept();
}

//// Configuring Babel and Polyfilling ////
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

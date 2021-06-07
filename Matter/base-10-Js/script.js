// Importing module
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

'use strict';

const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(Number(plane[1]));
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // indexof = position number
console.log(airline.lastIndexOf('r')); // lats position (of 'r')
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // slice() = Get part of an string - Return new string
console.log(airline.slice(4, 7)); // End on 7, this case on the espace

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Slice - beginning last word string + 1 to remove espace, finishing nothing, goes ultil final

console.log(airline.slice(-2)); // Start from the end
console.log(airline.slice(1, -1)); // Star position 2 ende in position last -1

const checkMiddleSeat = function (seat) {
  // B and E are the meddle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('Thats a middle seat ✈ 😥')
    : console.log('Thats not a middle seat ✈ ✈️');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); // Works because Js convert that string primitive to string object with same content, and in thet object methods are call - BOXING

console.log(new String('jonas')); // Object
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1)); // Turns back to string

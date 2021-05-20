//// Object Oriented Programming (OOP) ////
'use strict';

/* Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  console.log(`${this.make} going at ${this.speed + 10}`);
  return (this.speed += 10);
};
Car.prototype.break = function () {
  console.log(`${this.make} going at ${this.speed - 5}`);
  return (this.speed -= 5);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.break();
mercedes.break();
mercedes.break();
mercedes.accelerate();

/* Object Oriented Programming (OOP) */
'use strict';

/* Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(`${ford.make} starting at ${ford.speedUS} mi/h`);

ford.acelerate();
ford.acelerate();
ford.acelerate();
ford.acelerate();
ford.acelerate();
ford.break();
ford.break();
ford.acelerate();

ford.speedUS = 50;
console.log(ford);

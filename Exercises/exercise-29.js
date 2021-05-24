/* Object Oriented Programming (OOP) */
'use strict';

/* Your tasks:
1. Re-create previous Challenge, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${this.speed + 10}`);
    this.speed += 10;
    return this;
  }

  break() {
    console.log(`${this.make} going at ${this.speed - 5}`);
    this.speed -= 5;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EvCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  break() {
    this.speed -= 5;
    this.#charge++;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} charge at ${this.#charge}% :)`);
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge); // => Private propertie
rivian.accelerate().chargeBattery(50).accelerate().accelerate().break();
console.log(rivian.speedUS);

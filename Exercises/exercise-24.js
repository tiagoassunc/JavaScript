'use strict';

/* Rewrite the 'calcAverageHumanAge' function from Challenge 23, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

const calcAverageHumanAge = function (ages) {
  const avarageDogs =
    ages
      .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter(dogHumanAge => dogHumanAge >= 18)
      .reduce((counter, age) => counter + age, 0) /
    ages.filter(dogHumanAge => dogHumanAge > 2).length;

  console.log(avarageDogs);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-10, 90]; //Test Array, creat by me
const finalTemperatures = mergeArrays(temperatures, temperatures2); // Used on the function that a creat to concat arrays not method ".concat()"

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temo array
// - Subtract min from max () and return it

const calcTempAmplitude = function (temps) {
  let max = finalTemperatures[0];
  let min = finalTemperatures[0];

  for (let i = 0; i < finalTemperatures.length; i++) {
    const curTemp = finalTemperatures[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(
    `The maximum temperature of the arrey given was ${max} 🔥.`,
    `\nThe minimum temperature of the arrey given was ${min} ❄️.`,
    `\nSo the current temperature amplitude is ${max - min} 🌡️.`
  );
  return max - min;
};

console.log(calcTempAmplitude(mergeArrays(temperatures, temperatures2)));

//------------ Function that I creat----------------

/* IGNORE -   */ function mergeArrays(array1, array2) {
  let finalArray = [];
  for (let i = 0; i < array1.length; i++) {
    finalArray.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    finalArray.push(array2[i]);
  }
  return finalArray;
}
// mergeArrays(temperatures, [0.1, 0.2, 0.3]);

// PROBLEM 2:
// Function should now recive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const finalTemperatures = t1.concat(t2);

  let max = finalTemperatures[0];
  let min = finalTemperatures[0];

  for (let i = 0; i < finalTemperatures.length; i++) {
    const curTemp = finalTemperatures[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(
    `The maximum temperature of the arrey given was ${max} 🔥.`,
    `\nThe minimum temperature of the arrey given was ${min} ❄️.`,
    `\nSo the current temperature amplitude is ${max - min} 🌡️.`
  );
  return max - min;
};

console.log(calcTempAmplitudeNew(mergeArrays([3, -2, 1], [9, 5, 5])));

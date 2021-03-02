/* Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! */

const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const tips = [];
const totals = [];

function caltip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20
}

for (let i = 0; i < bills.length; i++) {
  tips.push(caltip(bills[i]));
  totals.push(bills[i] + tips[i]);
};

console.log(bills, tips, totals);


function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

calcAverage(totals)

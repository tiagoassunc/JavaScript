/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

function caltip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20
  }
//console.log(caltip(10));

const bills = [125, 555 , 44];
const tips = [caltip(bills[0]), caltip(bills[1]), caltip(bills[2])];
const total = [`${tips[0] + bills[0]}📖 :)`,`${tips[1] + bills[1]}📖 :)`,`${tips[2] + bills[2]}📖 :)`]
console.log(bills, tips, total);
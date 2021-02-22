/* Use the BMI example from exercise 06 , and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

const markMass = 78;
const johnMass = 92;
const markTall = 1.69;
const johnTall = 1.95;

/* const markMass = 95;
const johnMass = 85;
const markTall = 1.69;
const johnTall = 1.76; */

const markBMI = (markMass / (markTall * markTall) ); 
const jhonBMI = (johnMass / (johnTall * johnTall) );
const markHigherBMI = markBMI > jhonBMI;

if (markBMI > jhonBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${jhonBMI})!`);
} else {
  console.log(`John's BMI (${markBMI}) is higher than Mark's (${jhonBMI})!`);
}

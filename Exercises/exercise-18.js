'use strict';

/* Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data! */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/* 
// My way
  document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n'); // Separe strings by line change
  console.log(rows);
  for (const name of rows) {
    const lowerCase = name.toLowerCase().trim(); // Put all to lowercase and remove espaces
    const compositionOne = lowerCase.slice(
      // separe first word
      lowerCase[0],
      lowerCase.indexOf('_')
    );
    const compositionTwo = lowerCase.slice(lowerCase.indexOf('_'));
    const compositionTwoWords = compositionTwo.replace('_', '');
    const compositionTwoFinal = compositionTwoWords.replace(
      compositionTwoWords[0],
      compositionTwoWords[0].toUpperCase()
    );
    const camelCase = compositionOne + compositionTwoFinal;
    console.log(`${camelCase} ${'✅'.repeat(rows.indexOf(name) + Number(1))}`);
  }
}); */

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); // Separe strings by line change

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_'); // Separate strings,individually, first and second words, put in lowercase, remove espaces (with trim), separe the string by '_' character

    const output = `${first}${second.replace(
      // joining first and second with first letter replace to uppercase
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(
      `${output.padEnd(20)}${'✅'.repeat(rows.indexOf(row) + Number(1))}`
    );
  }
});

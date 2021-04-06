'use strict';

/* Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

console.log('==================== 01 =========================');
const events = new Set([]);
for (const [key, values] of gameEvents) {
  //console.log(values);
  events.add(values);
}
console.log(`The events that might ocure are :`, ...[...events]);

console.log('==================== 02 =========================');
gameEvents.delete(64);
console.log(...gameEvents);

console.log('==================== 03 =========================');
console.log(
  `An event happened, on avarege, every ${90 / gameEvents.size} minutes` // Size = length
);
const time = [...gameEvents.keys()].pop(); // Give us the last element
console.log(
  `An event happened, on avarege, every ${time / gameEvents.size} minutes`
);

console.log('==================== 04 =========================');
let strr = '';
for (const [key, values] of gameEvents) {
  key <= 45 ? (strr = 'FIRST') : (strr = 'SECOND');
  console.log(`[${strr} HALF] ${key}: ${values}.`);
}

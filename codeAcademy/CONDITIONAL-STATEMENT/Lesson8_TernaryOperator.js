// Conditional Statements
// Ternary Operator
// 10 min
// In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

// Take a look at the if...else statement example:

let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

// We can use a ternary operator to perform the same functionality:

isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");

// In the example above:

// The condition, isNightTime, is provided before the ?.
// Two expressions follow the ? and are separated by a colon :.
// If the condition evaluates to true, the first expression executes.
// If the condition evaluates to false, the second expression executes.
// Like if...else
// Preview: Docs Loading link description
// statements
// , ternary
// Preview: Docs Loading link description
// operators
//  can be used for conditions which evaluate to true or false.

// Challenge solution
let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

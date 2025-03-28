// If...Else Statements
// 4 min
// In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false.

// If we wanted to add some default behavior to the if statement, we can add an
// Preview: Docs Loading link description
// else statement
//  to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

if (false) {
  console.log("The code in this block will not run.");
} else {
  console.log("But the code in this block will!");
}

// Prints: But the code in this block will!

// An else statement must be paired with an if statement, and together they are referred to as an if...else statement.

// In the example above, the else statement:

// Uses the else keyword following the code block of an if statement.
// Has a code block that is wrapped by a set of curly braces {}.
// The code inside the else statement code block will execute when the if statement’s condition evaluates to false.
// if...else
// Preview: Docs Loading link description
// statements
//  allow us to automate solutions to yes-or-no questions, also known as binary decisions.

// Example challenge
let sale = true;

sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

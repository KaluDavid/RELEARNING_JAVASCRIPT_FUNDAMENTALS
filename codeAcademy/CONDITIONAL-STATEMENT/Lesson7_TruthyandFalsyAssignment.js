// Truthy and Falsy Assignment
// 8 min
// Truthy and falsy evaluations open a world of short-hand possibilities!

// Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let username = "";
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); // Prints: Stranger

// If you combine your knowledge of logical
// Preview: Docs Loading link description
// operators
//  you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

// let username = '';
// let defaultName = username || 'Stranger';

// console.log(defaultName); // Prints: Stranger

// Because || or
// Preview: Docs Loading link description
// statements
//  check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation

// Challenge solution
let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

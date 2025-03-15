/**
 * To deepen your understanding of JavaScript's `.filter()` method, here's a challenging task:

**Task: Complex Data Filtering**

You have an array of objects representing users, each with properties such as `name`, `age`, `email`, and `isActive`. Your goal is to filter this array to obtain a list of active users who are between the ages of 18 and 30 (inclusive) and have a valid email address. A valid email is defined as one that contains both '@' and '.' characters.

**Instructions:**

1. Define an array of user objects with the mentioned properties.

2. Use the `.filter()` method to create a new array that includes only the users who meet all the specified criteria.

3. Ensure that the original array remains unchanged.

**Considerations:**

- Think about edge cases, such as users with missing or malformed email addresses, ages outside the specified range, or inactive status.

- Remember that the `.filter()` method should return a new array without modifying the original one.

This exercise will test your ability to apply the `.filter()` method to complex data structures and reinforce your understanding of array manipulation in JavaScript.
 */

// Defining userDetails the Object
const userDetails = [
  { name: "Dhave", age: 10, email: "heisdhave@gmail.com", isActive: true },
  { name: "Jack", age: 24, email: "jackLord@gmail.com", isActive: true },
  { name: "Morgan", age: 18, email: "Morgan@gmail.com", isActive: true },
  { name: "Biggy", age: 29, email: "bigs.com", isActive: true },
  { name: "Michael", age: 25, email: "javaMichaelgmail.com", isActive: false },
  { name: "Jerry", age: 17, email: "jetKIng@gmailcom", isActive: false },
  { name: "Militant", age: 30, email: "Millitant@gmailcom", isActive: true },
  { name: "Ayodeji", age: 50, email: "jokes@gmail.com", isActive: true },
];

/**
 * Checking for;
 1️⃣ Active user i.e users whose value's true;
 2️⃣ users who are between the age of 18 and 30
 3️⃣ Valid emails - must contain '@' and '.'
  */

// const hey = "Hey bro".toLowerCase().includes("b" && "r");
// console.log(hey);

// let text = String.fromCharCode(72, 69, 76, 76, 79);
// let char = String.fromCharCode(65);

// console.log(text, char);

const validUsers = (age, isActive, email) => {
  return (
    age >= 18 &&
    age <= 30 &&
    isActive === true &&
    email.trim().includes("@") &&
    email.trim().includes(".")
  );
};

const isValid = userDetails.filter((el) =>
  validUsers(el.age, el.isActive, el.email)
);
console.log(isValid);

// Another approach
console.log(`Another Approach`);

const usersVal = userDetails.filter((user) => {
  return (
    user.isActive === true &&
    user.age > 18 &&
    user.age <= 30 &&
    user.email.trim().includes("@") &&
    user.email.trim().includes(".")
  );
});

console.log(usersVal);

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

const food = groceryList.slice(1, 2, 3);
console.log(food);

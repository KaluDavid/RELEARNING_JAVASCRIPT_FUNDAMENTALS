// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const screen = document.querySelector(".screen");

// function addNumbers(a, b) {
//   console.log(a + b);
//   screen.innerHTML = a + b;
// }

function addNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    screen.innerHTML = a + b;
  } else screen.innerHTML = parseInt(a) + parseInt(b);
}

button.addEventListener("click", () =>
  addNumbers(firstInput.value, secondInput.value)
);
button.add;
/**
 * Now this will print things in string e.g 2 + 2 = 22
 * because of our input that changes values into strings.
 *
 * But we can fix that by using
 * Right in our function.
 *
 * - We conditional check for a and b is they're numbers the we add them up using the typeof in javascript
 * - But if their interpreted as strings, We use the parse to convert strings to number
 *
 *
 */

"use strict";

// Javascript methods
// String methods
console.log("hey Buddy");

const name = "Dhave";
const friend = "Dandelion";
const someDude = " Oh, I know her";

//Lets apply js string methods
const sent = `${name.toLowerCase()} said ${someDude.trim()}, her name is `;
const together = sent.concat(friend.toUpperCase());

console.log(together);

// Object Methods
const person = {
  name: "Kalu",
  age: 25,
  country: "Nigeria",
};

console.log(Object.keys(person)); // returns an array of keys
console.log(Object.values(person)); //returns an array of values

// User-Defined Method'
const dawg = {
  fName: "David",
  age: "20",
  greet: function () {
    return `My name is ${this.fName}, I am ${this.age} years Old`;
  },
};
console.log(dawg.greet());
//The .greet() becomes a method

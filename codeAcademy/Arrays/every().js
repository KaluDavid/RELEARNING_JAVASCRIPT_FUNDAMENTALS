"use strict";
/**
  * 
  * Task: Validate Product Inventory

Imagine you're working for an e-commerce platform that maintains a list of products, each represented as an object with properties such as name, price, and inStock. Your goal is to ensure data integrity by verifying that all products meet certain criteria.

Requirements:

1️⃣ Product Structure: Each product is an object with the following properties:

🔸name: A string representing the product's name.
🔸price: A number indicating the product's price (in dollars).
🔸inStock: A boolean indicating whether the product is currently in stock.


2️⃣ Validation Criteria: Write a function that checks if all products in the inventory satisfy the following conditions:

🔸The name property should be a non-empty string.
🔸The price should be a positive number greater than zero.
🔸The inStock property should be a boolean value.


3️⃣Function Behavior: The function should return true if all products meet the above criteria; otherwise, it should return false.


#️⃣ Objective:

Implement the function to validate the product inventory using the .every() method. Ensure that the function accurately checks each product against the specified criteria and returns the correct boolean value.

This task will help you understand how to apply the .every() method to validate data structures in JavaScript.



  */
// 1️⃣ Product Structure

const products = [
  {
    name: "fish",
    price: 10,
    inStock: true,
  },
  {
    name: "bread",
    price: 2,
    inStock: true,
  },
  {
    name: "meat",
    price: 10,
    inStock: false,
  },
  {
    name: "egg",
    price: 1,
    inStock: false,
  },
];

// 2️⃣ Validation Criteria:
const criteria = () => {
  return products.every(
    (items) =>
      items.name.trim() !== " " &&
      items.price > 0 &&
      typeof items.inStock === "boolean"
  );
};

console.log(criteria());

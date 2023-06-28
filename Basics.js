// JS Basics

// Declare variables using the var, let, or const keywords
var name = 'John';
let age = 25;
const PI = 3.14159;

// Data types: string, number, boolean, undefined, null, object, symbol
let message = 'Hello';
let count = 10;
let isTrue = true;
let value = undefined;
let person = { name: 'John', age: 25 };
let symbol = Symbol('unique');

// ---------------------------------------------------------------------------

// Define a function that calculates the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Call the function and store the result in a variable
let result = sum(5, 10);
console.log(result); // Output: 15

// ---------------------------------------------------------------------------

// If statement
let number = 10;
if (number > 0) {
  console.log('Number is positive');
} else if (number < 0) {
  console.log('Number is negative');
} else {
  console.log('Number is zero');
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

// ---------------------------------------------------------------------------

// If statement
let number2 = 10;
if (number2 > 0) {
  console.log('Number is positive');
} else if (number2 < 0) {
  console.log('Number is negative');
} else {
  console.log('Number is zero');
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let counter2 = 0;
while (counter < 5) {
  console.log(counter2);
  counter2++;
}

// ---------------------------------------------------------------------------

// Create an array
let fruits = ['apple', 'banana', 'orange'];

// Access array elements
console.log(fruits[0]); // Output: 'apple'

// Add elements to the end of an array
fruits.push('grape');

// Iterate over array elements using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ---------------------------------------------------------------------------

// Create an object
let person2 = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
  };
  
  // Access object properties
  console.log(person2.name); // Output: 'John'
  
  // Modify object properties
  person2.age = 30;
  
  // Iterate over object properties using a for...in loop
  for (let key in person2) {
    console.log(key + ': ' + person2[key]);
  }

// ---------------------------------------------------------------------------

let message2 = 'Hello, world!';

// String length
console.log(message2.length); // Output: 13

// Accessing characters
console.log(message2[0]); // Output: 'H'

// Concatenation
let name3 = 'John';
let greeting = 'Hello, ' + name3 + '!';

// String methods
console.log(message2.toUpperCase()); // Output: 'HELLO, WORLD!'
console.log(message2.indexOf('world')); // Output: 7
console.log(message2.slice(0, 5)); // Output: 'Hello'

console.log("hello world");
// document.write('hello world');

// Types of Data
// primitive Data and non primitive Data types

// primitive DataTypes
// Number, String, Boolean, Undefined, Null, Symbol, BigInt.

// non primitive Data types
// Object, Array, Function, Date, RegExp.

// Working with Data Types and Variables
const Speed = 3000;
console.log(typeof Speed);

let Name = "I am a programmer";
Name = "I want to be a programmer";
console.log(Name);
console.log(typeof Name);

let Bool = true;
console.log(typeof Bool);

// let x;
let x = undefined;
console.log(typeof x);

let y = null;
console.log(typeof y);

const BigNumbers = 1234567890123456789012345678901234567890n;
console.log(typeof BigNumbers);

let musicObj = {
  Name: "Davido",
  Age: 29,
  KindOfMusic: "Afrobeats",
  country: "Nigerian",
};
console.log(typeof musicObj);
console.log(musicObj.Name, musicObj.Age, musicObj.KindOfMusic);

// Example of an array in JavaScript
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);
console.log(typeof fruits);

// Accessing array elements
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange

// Array length
console.log(fruits.length); // Output: 4

// Adding an element to the end of the array
fruits.push("grape");
console.log(fruits);

// Removing the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: grape
console.log(fruits);

// Iterating through an array
console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let Title = document.querySelector(".title");
console.log(Title);

Title.innerHTML = "JavaScript is a programming language";

// Using Variables to Create Messages
let firstName = "John";
let lastName = "Doe";
let age = 30;

// Concatenation
let message1 =
  "My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  age +
  " years old.";
console.log(message1);

// Template Literals
let message2 = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(message2);

// Updating the title with a variable
let newTitle = `JavaScript: ${firstName}'s Programming Journey`;
Title.innerHTML = newTitle;

// Asking for Information

let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");

// Displaying the information
console.log(`Hello, ${userName}! You are ${userAge} years old.`);

// Updating the title with user's name
Title.innerHTML = `JavaScript: ${userName}'s Programming Journey`;

// Conditional greeting based on age
if (parseInt(userAge) < 18) {
  console.log("You're still young! Keep learning!");
} else {
  console.log("Great to have you here! Let's dive deeper into JavaScript!");
}

// alert('eeee');

// Objects in javascript
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  hobbies: ["coding", "reading", "traveling"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);
console.log(person.greet());

// Array methods in javascripts
let musicians = [
  "Bili elish",
  "",
  "Micheal jordan",
  "mega stallion",
  "Ice spice",
];
musicians.shift(); // removes the first element of the array
console.log(musicians);

musicians.unshift("Davido"); // adds an element to the beginning of the array
console.log(musicians);

// Writing to a Web Page Using Arrays
document.write(musicians);

// Adding Logic and Control to Your Programs
// if else elseif

let friends = ["John", "Jane", "Doe", "Smith", "Johnson"];

if (friends.length > 5) {
  console.log("You have a large network of friends");
} else if (friends.length > 3) {
  console.log("You have little friends");
} else {
  console.log("You have a small network of friends");
}

// using the if function for a list
let fruitsItems = ["apple", "banana", "orange", "grape", "mango"];

if (fruitsItems.includes("apple")) {
  console.log("The list contains an apple");
} else {
  console.log("The list does not contain an apple");
}

// Equality and Inequality Symbols
// > greater Than
// < Less Than
// == equals to
// === datatype and value
// ! not
// !=  not equal to
// >= Greater than and equal to
// || or
// && and

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num1 < num2) {
  console.log("num1 is less than num2");
} else {
  console.log("num1 is equal to num2");
}

// TENARY OPERATOR
let a = 10;
let b = 20;
let result = a > b ? "a is greater than b" : "b is greater than a";
console.log(result);

// 30 === '30' ? console.log('yes') : console.log('no');
// 30 ==  '30' ? console.log('yes') : console.log('no');
// 30 !=  '30' ? console.log('yes') : console.log('no');

// using > and &&

let c = 10;
let d = 20;
let e = 30;

if (c > d && c > e) {
  console.log("c is the largest number");
} else if (d > c && d > e) {
  console.log("d is the largest number");
} else {
  console.log("e is the largest number");
}

// using or ||

let f = 10;
let g = 20;
let h = 30;

if (f > g || f > h) {
  console.log("f is the largest number");
} else if (g > f || g > h) {
  console.log("g is the largest number");
} else {
  console.log("h is the largest number");
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// switch statement in javascript

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// loops in javascript
// for loop, for in loop, for of loop, do loop, and do while loop, ,map

let school = ["Joseph", "Mattew", "Philip", "zeccarah"];
// for(let i = 0; i < school.length; i++){
//     const result = school[i]
//     console.log(result)
// }

// for in loop
for (const item in school) {
  console.log(school[item]);
}

let obj = { Name: "emmanuel", country: "Nigeria" };
for (const key in obj) {
  const element = obj[key];
  console.log(element);
}

console.log(obj.Name);

// for of loop

for (const element of obj) {
  const value = obj[element];
  console.log(value);
}

// while loop in javascript
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do while loop in javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

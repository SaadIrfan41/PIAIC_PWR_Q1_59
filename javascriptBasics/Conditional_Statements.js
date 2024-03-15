//Conditional statements in JavaScript are used to execute different code blocks based on whether a specified condition evaluates to true or false. There are primarily three types of conditional statements in JavaScript:

// if statement: It executes a block of code if a specified condition is true.
let num = 10

if (num > 0) {
  console.log('Number is positive')
}

// if...else statement: It executes one block of code if a specified condition is true and another block of code if the condition is false.
let num1 = -5

if (num1 > 0) {
  console.log('Number is positive')
} else {
  console.log('Number is non-positive')
}

// if...else if...else statement: It allows you to check multiple conditions and execute a corresponding block of code based on the first condition that evaluates to true.

let num2 = 0

if (num2 > 0) {
  console.log('Number is positive')
} else if (num2 < 0) {
  console.log('Number is negative')
} else {
  console.log('Number is zero')
}

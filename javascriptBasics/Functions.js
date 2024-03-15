//In JavaScript, functions are blocks of reusable code that can be called and executed at any point in a program. They allow you to encapsulate logic, promote code reuse, and improve maintainability. Here's a brief explanation of functions along with examples of various features:

//Arguments are values passed to a function when it is called.
//Parameters are the variables that are defined in the function's definition.

function greet(name) {
  console.log(`Hello, ${name}!`)
}

//Basic Function Declaration:
// You can define a function using the function keyword followed by a function name, parameters (if any), and the function body.

function greet(name) {
  console.log(`Hello, ${name}!`)
}

greet('Alice') // Output: Hello, Alice!

//Optional Parameters:
// You can define parameters in a function as optional by providing default values. This allows you to call the function without passing those parameters.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

greet() // Output: Hello, Guest!

//Default Parameters:
// Default parameters allow you to specify default values for function parameters if no value or undefined is passed.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

greet('Alice') // Output: Hello, Alice!
greet() // Output: Hello, Guest!

//Rest Parameters:
// Rest parameters allow you to represent an indefinite number of arguments as an array.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3, 4, 5)) // Output: 15

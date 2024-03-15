// Primitive vs Non Primitive (also known as reference types)
// Primitive Types: String, Number, Boolean, Undefined, Null
// Non Primitive Types: Object, Array, Function

//Primitive Types

// Number: Represents numeric data, including integers and floating-point numbers.

let num = 42 // Integer
let floatNum = 3.14 // Floating-point number

// String: Represents textual data enclosed within single quotes (') or double quotes (").

let str = 'Hello, world!' // Double-quoted string
let singleQuotedStr = 'Single quoted string' // Single-quoted string

// Boolean: Represents a logical value, either true or false.

let isTrue = true
let isFalse = false

// Undefined: Represents a variable that has been declared but hasn't been assigned a value yet.

let undefinedVar
console.log(undefinedVar) // Output: undefined

// Null: Represents an intentional absence of any value.

let nullVar = null
console.log(nullVar) // Output: null

// Primitive types are immutable, meaning their values cannot be changed after they are created. When you assign a new value to a variable holding a primitive type, you are creating a completely new value in memory.

let a = 10
a = 20

/*The value 10 assigned to variable a isn't explicitly "destroyed" or "deleted" by changing the value of a to 20. Instead, the variable a now holds the value 20, and the value 10 is no longer accessible through a.

JavaScript's garbage collector handles the memory management of values that are no longer referenced. When the value 10 is no longer referenced by any variable or part of the program, it becomes eligible for garbage collection, meaning the memory occupied by 10 can be reclaimed by the JavaScript engine for other purposes.

So, after the assignment a = 20, the value 10 is effectively "forgotten" by the variable a, and it may eventually be reclaimed by the garbage collector if there are no other references to it.*/

let num1 = 10
let num2 = num1 // num2 holds a copy of the value of num1
num1 = 20
console.log(num1) // Output: 20
console.log(num2) // Output: 10 (num2 still holds the original value of num1)

// Non-primitive Types (Reference Types):

// Object: Represents a collection of key-value pairs where keys are strings (or Symbols) and values can be of any data type, including other objects.

let person = {
  name: 'John',
  age: 30,
  country: 'USA',
}

// Arrays in JavaScript are specialized objects that have properties and methods specifically catered to handling ordered collections of data.

let numbers = [1, 2, 3, 4, 5]
// push pop unshift shift splice
numbers.push(6)
console.log(numbers)
numbers.pop()
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.shift()
console.log(numbers)

numbers.splice(2, 1)
console.log(numbers)

// Function: A callable object that can execute a set of statements when invoked.

function greet(name) {
  console.log(`Hello, ${name}!`)
}

greet('Alice') // Output: Hello, Alice!

// Date: Represents a specific moment in time.

let currentDate = new Date()
console.log(currentDate) // Output: Current date and time

// RegExp: Represents a regular expression for pattern matching.

let regex = /[a-zA-Z]+/
let str1 = 'Hello'
console.log(regex.test(str1)) // Output: true (checks if the string contains alphabetic characters)

// Non-primitive types are mutable, meaning their values can be changed after they are created. When you assign a non-primitive value to a variable, you're actually storing a reference to that value in memory, not the value itself. This means that when you change a property of an object, you're modifying the data that the reference points to, rather than creating a new value.

let obj1 = { name: 'John' }
let obj2 = obj1 // obj2 holds a reference to the same object as obj1
obj1.name = 'Alice'
console.log(obj1.name) // Output: 'Alice' (changed in obj1)
console.log(obj2.name) // Output: 'Alice' (same object as obj1, so obj2 reflects the change)
console.log(obj1 === obj2) // Output: true (obj1 and obj2 reference the same object)

//In JavaScript, loops are used to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops available:

//for loop: It iterates over a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
  console.log(i)
}

//while loop: It executes a block of code while a specified condition is true.

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

//do...while loop: It is similar to a while loop, but it always executes the block of code at least once before checking the condition.

let value = 0
do {
  console.log(i)
  i++
} while (i < 5)

//for...in loop: It iterates over the enumerable properties of an object.

const obj = { a: 1, b: 2, c: 3 }
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`)
}

//for...of loop: It iterates over iterable objects (e.g., arrays, strings).

const arr = [1, 2, 3]
for (let value of arr) {
  console.log(value)
}

// Starting from ES2015, you can use Object.keys(), Object.values(), or Object.entries() methods to get arrays of keys, values, or key-value pairs respectively, which can then be iterated over.

// Object.keys(): This method returns an array of a given object's own enumerable property names,

const keys = Object.keys(obj)
console.log(keys)

// Object.values(): This method returns an array of a given object's own enumerable property values,
const values = Object.values(obj)
console.log(values)

// Object.entries(): This method returns an array of a given object's own enumerable property [key, value] pairs,
const entries = Object.entries(obj)
console.log(entries)
// console.log(entries[1][1])

//Normal functions and arrow functions are both ways to define functions in JavaScript, but they have some differences in terms of syntax and behavior.

// Normal Function:
// Defined using the function keyword followed by a function name, parameters (if any), and a function body enclosed in curly braces {}.
// Can be used as constructor functions to create objects using new.
// Has its own this context, which is determined by how the function is called.
// Can be used as methods in objects.
// Bound to the arguments object, which contains all the arguments passed to the function.
// Suitable for methods that require access to their own this context or need to be used as constructors.

function greet(name: string) {
  return 'Hello, ' + name + '!'
}

//Arrow Function:
// Introduced in ES6, defined using a concise syntax with an arrow (=>) separating the parameters and the function body.
// Does not have its own this context; it lexically captures the this value from the surrounding code.
// Cannot be used as constructors; attempting to use new with an arrow function will throw an error.
// Does not have its own arguments object; it relies on the arguments of the surrounding non-arrow function.
// Suitable for short, one-liner functions and for functions where you want to preserve the lexical scope of this.

const greet2 = (name: string) => {
  return 'Hello, ' + name + '!'
}
const greet3 = (name: string) => 'Hello, ' + name + '!'

// In summary, normal functions and arrow functions serve similar purposes, but arrow functions offer a more concise syntax and lexically scoped this, while normal functions provide more flexibility and can be used as constructors. The choice between them depends on the specific requirements of your code and your personal preference.

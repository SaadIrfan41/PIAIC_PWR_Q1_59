// Examples Covered in this file are from Step 00-04 and 05f-06 (Excluding the 03a Modules import export part)

//strongly typed syntax
// let a: string = 'Hello World'
// console.log(a)
// let b: number = 5
// console.log(b)

// Manifest Typing vs Inferred Typing

// Manifest typing, as seen in languages like C or Java, requires explicit declaration of variable types. For example:

// This is a variable decleration in Java Code
// int a = 5; // Manifest typing: 'a' explicitly declared as an integer

// On the other hand, inferred typing, as observed in languages like TypeScript or Python, allows the compiler to deduce variable types based on their assigned values. For example:

//let a = 5; // Inferred typing: 'a' inferred as a number based on the assigned value
//console.log(a)

//This will give error ('string' is not assignable to type 'number'.)
// let a:number = 'Hello'

// Assignability Error

// let message = 'Hello World'
// message = 55
// console.log(message)

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
// if (true) {
// 	let z = 4;
// 	//use z
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z)

// Union Types

// let myname: string | null

// myname = null
// console.log(myname)

// myname = 'zia'
// console.log(myname)

// //myname = undefined; //Error
// //myname = 12; //Error

// You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;

// Any Type

// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK

// //Unknown Type

// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK

// // Assigning a value of type unknown to variables of other types

// let val: unknown;

// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error

// // Never Type

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }

// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }

// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }

// Explict Casting using the 'as' and '<>' syntax

// let myname: unknown = 'Zia'
// console.log((myname as string).length)
// console.log((<string>myname).length)

// let teacher = {
//   name: 'Zeeshan',
//   experience: '10',
// }
// console.log(teacher.name)
// console.log(teacher['experience'])
// // Type Declaration
// let student: {
//   name: string
//   age: number
// }
// student = {
//   name: 'Hira',
//   age: 30,
// }
// console.log(student['name'])
// console.log(student.age)
// let student: { name: string; age: number } = {
//   name: 'Hira',
//   age: 30,
// }
// console.log(student['name'])
// console.log(student.age)
// Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }
// let student: Student = {
//     name: "Hira",
//     age: 30
// }
// console.log(student['name'])
// console.log(student.age)
// Interfaces
// interface Manager {
//     name: string,
//     subordiates?: number
// }
// let storeManager: Manager = {
//     name: "Bilal"
// }
// Structural Typing
//In structural typing, compatibility is based on the structure or shape of types
// interface Ball {
//   diameter: number
// }
// interface Sphere {
//     diameter: number
// }
// let ball: Ball = { diameter: 10 }
// let sphere: Sphere = { diameter: 20 }
// sphere = ball
// ball = sphere
//  interface Tube {
//    diameter: number
//    length: number
//  }
//  let tube: Tube = { diameter: 12, length: 3 }
//  //tube = ball;//Error
//  ball = tube
// Nested Object Types
// type Author = {
//   firstName: string
//   lastName: string
// }
// type Book = {
//   author: Author
//   name: string
// }
// const myBook: Book = {
//   author: {
//     firstName: 'Zia',
//     lastName: 'Khan',
//   },
//   name: 'My Best Book',
// }
// Rules to Remember in structural typing
let myType = { name: 'Zia', id: 1 };
// Case 1 Order of the properties dosnt matter as long as they are present
myType = { id: 2, name: 'Tom' };
export {};
// Case 2 Can not add new properties like this, you have to follow a specific structure Given in Case 4
// myType = { id: 2, name: 'Tom', age: 22 }
// Case 3 Can not Remane a key
// myType = { id: 2, name_person: 'Tom' }
// Case 4  if you want to add x number of properties you need to follow this structure
// let x: { id: number; [x: string]: any }
// x = { id: 1, hello: 'Hello', world: 'World' }
// var x: { [x: string]: any }
// var y = { id: 1, fullname: 'Zia' }
// x = y
// console.log(x)
// Class Exercise
// var x: { foo: number };
// x = { foo: 1, baz: 2 };
// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };
// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;
// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;
// Intersection_Types
// interface Student {
//   student_id: number
//   name: string
// }
// interface Teacher {
//   teacher_Id: number
//   teacher_name: string
// }
// type intersected_type = Student & Teacher
// let obj1: intersected_type = {
//   student_id: 3232,
//   name: 'rita',
//   teacher_Id: 7873,
//   teacher_name: 'seema',
// }
// console.log(obj1.teacher_Id)
// console.log(obj1.name)

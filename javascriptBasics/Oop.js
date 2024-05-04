// Simple Object
// Note In JS an object  is a entity having  some Properties and methods also known as => (function)
// const student = {
//   name: 'Saad',
//   age: 28,
//   subjects: ['Computer Science', 'English', 'Physics'],
//   marks() {
//     // we use 'this' keyword to access the object properties
//     return `${this.subjects[0]} 90%,${this.subjects[1]} 80%,${this.subjects[2]} 70%`
//   },
//   // This below marks method is the same as above marks method, just a different way of writing methods inside object.

//   // marks: function () {
//   //   // // we use this keyword to access the object properties
//   //   return `${this.subjects[0]} 90%,${this.subjects[1]} 80%,${this.subjects[2]} 70%`
//   // },
// }

// In JS every Object  have a special  property called  Prototype
// Prototype Object has some predefined  properties and methods

// In JS type of a array is also an Object and it also  have a special  property called  Prototype, with its own special properties and methods. eg: Push,Pop,shift,unshift etc

// Lets se it inside our browser
// let students = ['Ali', 'Qasim', 'Umer', 'Faizan']

// Classes are templates used for creating objects.These objects have state (variable) and methods (functions).

// class Human {
//   eat() {
//     console.log('Eating')
//   }
//   pray() {
//     console.log('Praying')
//   }
//   sleep() {
//     console.log('Sleeping')
//   }
// }

// let person = new Human()

// We Need to seperate properties or methods in object with a coma but it not required in classes
// Below Object will give error in class because we are not seperating properties or methods with a coma.
// const obj = {
//   eat() {
//     console.log('Eating')
//   }
//   pray() {
//     console.log('Praying')
//   }
//   sleep() {
//     console.log('Sleeping')
//   }
// }

// Constructor in JS is a Special Method in classes which is called when class is initialized. If we dont provide a contructor then JS automatically creats one.

// setTimeout(() => {
//   console.log('World')
// }, 2000)
// setTimeout(() => {
//   console.log('Hello')
// }, 1000)

// class Human {
//   constructor(name) {
//     console.log('Constructor is Called')
//     this.me = name // Here by using the 'this' keyword we are creating a property inside the human class object
//     //me=name // Here by not using the 'this' keyword js will treat 'me' as a variable which is not define so it will throws an   error
//   }
//   eat() {
//     console.log(this.me, 'is Eating')
//   }
//   pray() {
//     console.log(this.me, 'is Praying')
//   }
//   sleep() {
//     console.log(this.me, 'is Sleeping')
//   }
// }
// let human = new Human('Saad')
// console.log(human)

// Inheritance in JS is the way of passing properties and methods from parents class to child class

//Note: If Child have the same property/method as its parent class, then the child class property/method will override the parent class property/method.(Also knows as Method Overriding)

// Note: 'super' keyword is used to access the parent class properties and methods.
// Note: To use the this keyword inside a Derived Class we must call the 'super' function to invoke the parents class constructor first.

class Employee {
  constructor(xyz) {
    console.log('Employee Constructor start')
    this.name = xyz
    console.log('Employee Constructor end')
  }
  eat() {
    console.log(this.name, ' is Eating')
  }
  pray() {
    console.log(this.name, ' is Praying')
  }
  work() {
    console.log(this.name, ' is Working')
  }
}

// let employee = new Employee('value')

class Manager extends Employee {
  constructor(name, dept) {
    console.log('Manager Constructor start')
    super(name)
    this.my_name = name
    this.dept = dept
    console.log('Manager Constructor end')
  }
  department() {
    console.log(this.my_name, 'is working in', this.dept)
  }
}

class Developer extends Manager {
  constructor(name, dept) {
    super(name)
    this.dept = dept
  }
  department() {
    console.log(this.name, 'is working in', this.dept)
  }
}
let manager = new Manager('Hamza', 'HR')
let developer = new Developer('Ali', 'IT')

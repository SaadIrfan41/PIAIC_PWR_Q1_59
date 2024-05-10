// 2 main diff between type and interface
let s = {
    color: 'red',
    sideLength: 10,
    sideWidth: 5,
};
// Check if 's' is of type 'ShapeType'
if ('color' in s) {
    // TypeScript recognizes 's' as 'ShapeType' here
    // Now you can get suggestions for 'ShapeType'
    console.log(s.color);
}
else {
    // TypeScript recognizes 's' as '{ sideLength: number }' here
    // Now you can get suggestions for '{ sideLength: number }'
    console.log(s.sideLength);
}
// Simple Representation of Classes in TS
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const person = new Person('John', 30);
console.log(person.greet());
// 4 Main Pillars of OOPS
//? 1. Abstraction:
//Abstraction is a concept that allows you to focus on the essential attributes and behaviors of an object while hiding the unnecessary details. It involves representing only the relevant characteristics of an object, and hiding the complex implementation details from the user.
//Let's break this down with a simple example:
// Consider a car. When you think about a car, you don't need to know every intricate detail of how the engine works or how the transmission shifts gears in order to drive it. Instead, you focus on the essential features like steering, accelerating, and braking.
// class Car {
//    brand: string
//    model: string
//    speed: number
//   constructor(brand: string, model: string) {
//     this.brand = brand
//     this.model = model
//     this.speed = 0
//   }
//    accelerate(): void {
//     this.speed += 10
//   }
//    brake(): void {
//     this.speed -= 10
//   }
//    getSpeed(): number {
//     return this.speed
//   }
// }
// // Create a car object
// const myCar: Car = new Car('Toyota', 'Camry')
// // Accelerate the car
// myCar.accelerate()
// // Get the current speed
// console.log('Current speed:', myCar.getSpeed())
//In this example:
// We have a Car class with attributes like make, model, and speed. We define methods like accelerate and brake to manipulate the speed of the car. The user interacts with the car object through these methods without needing to know how they are implemented internally. So, in essence, abstraction allows us to think about objects at a higher level of understanding, focusing on what they do rather than how they do it.
//? 2. Encapsulation
//In Encapsulation, the variables or data of a class are hidden from any other class and can be accessed only through any member function of their class in which they are declared. As in encapsulation, the data in a class is hidden from other classes, so it is also known as data-hiding.
//Let's consider a simple example where encapsulation is used to control access to sensitive data. Imagine we have a User class representing users in a system, and we want to ensure that the user's password is not directly accessible from outside the class.
// class User {
//   private username: string
//   private password: string
//   protected email?: string
//   constructor(username: string, password: string) {
//     this.username = username
//     this.password = password
//   }
//   // Method to authenticate user
//   authenticate(enteredPassword: string): boolean {
//     return enteredPassword === this.password
//   }
//   // Method to change password
//   changePassword(newPassword: string): void {
//     this.password = newPassword
//   }
// }
// class Admin extends User {
//   admin_name: string = 'admin'
//   admin_pass: string = 'admin'
//   constructor(username: string, password: string) {
//     super(username, password)
//     // this.username
//     // this.password
//   }
//   user_Email(email: string): string {
//     this.email = email
//     return this.email
//   }
// }
// // Create a user
// const user = new User('Ahmad Jafari', 'abcd1234')
// const admin = new Admin('Adnan Khan', '1234abcd')
// console.log(user.authenticate('12345678')) // Output: false
// console.log(user.authenticate('abcd1234')) // Output: true
// user.changePassword('Ab1234!?')
// console.log(user.authenticate('abcd1234')) // Output: false
// console.log(user.authenticate('Ab1234!?')) // Output: true
// // Cant access protected property 'email' outside of class
// // console.log(user.email); // Error
// console.log(admin.user_Email('admin@admin.com'))
// In this example, we have two classes: User and Admin, demonstrating encapsulation in TypeScript.
//? User Class:
// It contains private properties username and password, and a protected property email.
// The constructor initializes the username and password properties.
// It provides methods like authenticate() to verify the user's password and changePassword() to allow users to change their password.
// The password property is encapsulated as private, meaning it cannot be directly accessed or modified from outside the class.
// The email property is marked as protected, which means it can be accessed by subclasses but not from outside the class.
//? Admin Class (extends User):
// It extends the User class, inheriting its properties and methods.
// It has additional properties admin_name and admin_pass initialized to 'admin'.
// The constructor initializes the username and password using the super() method from the parent class.
// It defines a method user_Email() to set the email property inherited from the parent class.
//? Usage:
// We create instances of both User and Admin classes and demonstrate the usage of methods like authenticate() and changePassword().
// We observe that we cannot directly access the email property outside of the class due to its protected access modifier.
//? 3. Inheritance
//Inheritance in OOP is a concept where a new class (called a subclass or derived class) is created based on an existing class (called a superclass or base class). The subclass inherits attributes and behaviors (methods) from its superclass, allowing it to reuse and extend the functionality of the superclass.
//Using the Shape class example:
// Base class representing a generic shape
// class Shape {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   // Method to describe the shape
//   describe(): void {
//     console.log(`This is a shape at position (${this.x}, ${this.y}).`);
//   }
// }
//Here, Shape is the base class. It has properties like x and y, along with a method describe() to provide information about the shape.
// Derived class representing a circle
// class Circle extends Shape {
//   radius: number;
//   constructor(x: number, y: number, radius: number) {
//     super(x, y); // Call the constructor of the superclass (Shape)
//     this.radius = radius;
//   }
//   // Method to calculate area of the circle
//   area(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }
//In this example, Circle is the subclass, and it extends the Shape class. By using the extends keyword, Circle inherits all properties and methods from Shape. Additionally, Circle has its own property radius and method area() specific to circles.
//By utilizing inheritance, you can create a hierarchy of classes where subclasses inherit and extend the functionality of their superclass, promoting code reusability and maintaining a logical structure in your programs.
//? 4. Polymorphism
//Polymorphism in OOP refers to the ability of different objects to be treated as instances of a common superclass. Simply put, it allows objects of different classes to be treated as objects of a shared superclass. This enables more flexible and dynamic code, as different objects can respond to the same method call in different ways.
//Let's consider a real-world example involving shapes. We'll create a program that calculates the area of different shapes such as rectangles, circles, and triangles using polymorphism.
// Parent class
class Shape {
}
// Rectangle class
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Circle class
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
// Triangle class
class Triangle extends Shape {
    base;
    height;
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
// Function to calculate the area of any shape
function calculateShapeArea(shape) {
    return shape.calculateArea();
}
// Creating instances of different shapes
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
const triangle = new Triangle(4, 6);
// Using the function with different shape objects
console.log('Area of Rectangle:', calculateShapeArea(rectangle)); // Outputs: 50
console.log('Area of Circle:', calculateShapeArea(circle).toFixed(2)); // Outputs: 153.94
console.log('Area of Triangle:', calculateShapeArea(triangle)); // Outputs: 12
export {};
//In this example, Shape is the superclass, and Rectangle, Circle, and Triangle are its subclasses. They all implement the calculateArea() method differently according to their specific shapes. When we call calculateShapeArea() with different shape objects, polymorphism allows the correct version of calculateArea() to be called based on the type of shape passed. This demonstrates how polymorphism enables code to handle different types of objects in a unified manner.

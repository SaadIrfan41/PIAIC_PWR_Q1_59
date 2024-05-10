export class Student {
    name;
    studentID;
    coursesEnrolled;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateUniqueID();
        this.coursesEnrolled = [];
        this.balance = 1000;
    }
    enrollCourse(courseName) {
        this.coursesEnrolled.push(courseName);
        console.log(`${this.name} enrolled in ${courseName}.`);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            console.log(`${this.name} paid $${amount} towards tuition fees.`);
        }
        else {
            console.log('Insufficient balance.');
        }
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log('Courses Enrolled:');
        this.coursesEnrolled.forEach((course) => console.log(`- ${course}`));
        console.log(`Balance: $${this.balance}`);
    }
    generateUniqueID() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
}

import inquirer from 'inquirer'

export class Student {
  name: string
  studentID: number
  coursesEnrolled: string[]
  balance: number

  constructor(name: string) {
    this.name = name
    this.studentID = this.generateUniqueID()
    this.coursesEnrolled = []
    this.balance = 1000
  }

  enrollCourse(courseName: string) {
    this.coursesEnrolled.push(courseName)
    console.log(`${this.name} enrolled in ${courseName}.`)
  }

  viewBalance() {
    console.log(`Balance for ${this.name}: $${this.balance}`)
  }

  payTuition(amount: number) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount
      console.log(`${this.name} paid $${amount} towards tuition fees.`)
    } else {
      console.log('Insufficient balance.')
    }
  }

  showStatus() {
    console.log(`Name: ${this.name}`)
    console.log(`Student ID: ${this.studentID}`)
    console.log('Courses Enrolled:')
    this.coursesEnrolled.forEach((course) => console.log(`- ${course}`))
    console.log(`Balance: $${this.balance}`)
  }

  // Math.random gives you a number between 0-1
  // Add 10000 to it and you get a 5 digit number
  // Multiply by 90000 and you get a 5 digit random number
  // Use Math.floor to round down to the nearest whole number
  // You can use this to generate a unique ID for each student

  private generateUniqueID(): number {
    return Math.floor(10000 + Math.random() * 90000)
  }
}

import inquirer from 'inquirer'

class Student {
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
class Course {
  name: string
  instructor: string
  schedule: string
  capacity: number
  enrolledStudents: string[]

  constructor(
    name: string,
    instructor: string,
    schedule: string,
    capacity: number
  ) {
    this.name = name
    this.instructor = instructor
    this.schedule = schedule
    this.capacity = capacity
    this.enrolledStudents = []
  }
}

function addStudent() {
  inquirer
    .prompt([{ type: 'input', name: 'name', message: 'Enter student name:' }])
    .then((answers) => {
      const student = new Student(answers.name)
      console.log(`Student ${student.name} added with ID ${student.studentID}`)
      mainMenu(student)
    })
}

function enrollStudent() {
  // Implementation
}

function viewBalance(student: Student) {
  student.viewBalance()
  mainMenu(student)
}

function payFees() {
  // Implementation
}

function showStudentStatus(student: Student) {
  student.showStatus()
  mainMenu(student)
}

function mainMenu(student: Student | null) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: [
          'Add Student',
          'Enroll Student',
          'View Balance',
          'Pay Fees',
          'Show Student Status',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'Add Student':
          addStudent()
          break
        case 'Enroll Student':
          enrollStudent()
          break
        case 'View Balance':
          if (student) {
            viewBalance(student)
          }
          break
        case 'Pay Fees':
          payFees()
          break
        case 'Show Student Status':
          if (student) {
            showStudentStatus(student)
          }

          break
        case 'Exit':
          console.log('Exiting...')
          process.exit(0)
      }
    })
}

console.log('Welcome to Student Management System')
mainMenu(null)

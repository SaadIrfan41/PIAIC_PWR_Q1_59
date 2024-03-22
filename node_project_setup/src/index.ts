import inquirer from 'inquirer'

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'What is your age?',
  },
  {
    type: 'list',
    name: 'gender',
    message: 'What is your gender?',
    choices: ['Male', 'Female'],
  },
])

console.log(answers.name, 'is a', answers.age, 'years old', answers.gender)

// if (answers.age < 20) {
//   console.log('You are a Teenager')
// } else if (answers.age > 20 && answers.age < 50) {
//   console.log('You are an adult')
// } else {
//   console.log('You are OLD')
// }

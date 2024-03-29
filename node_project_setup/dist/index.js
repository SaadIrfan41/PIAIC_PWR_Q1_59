#! /usr/bin / env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        message: 'Enter first Number',
        type: 'number',
        name: 'firstnumber',
    },
    {
        message: 'Enter second Number',
        type: 'number',
        name: 'secondnumber',
    },
    {
        message: 'Choose Operator',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log('Please Select a Valid Operator');
}

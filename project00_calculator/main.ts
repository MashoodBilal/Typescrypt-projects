
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import chalk from "chalk";

console.log(chalk.redBright( "Calculator"))

let answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        Message: 'Please enter First number: '
    },
    {
        type: 'number',
        name: 'num2',
        Message: 'Please enter Second number: '
    },
    {
        type: 'list',
        name: 'operator',
        Message: 'Please select an operation: ',
        choices: ['+','-','*','/']
    }
])


let ans1;
    if (answer.operator === '+') {
    ans1 = answer.num1 + answer.num2
}else if (answer.operator === '-') {
    ans1 = answer.num1 - answer.num2
}else if (answer.operator === '*') {
    ans1 = answer.num1 * answer.num2
}else if (answer.operator === '/') {
    ans1 = answer.num1 / answer.num2
}

console.log(`Your calculated answer is ${ans1}`)



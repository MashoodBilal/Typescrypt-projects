import inquirer from "inquirer";
import chalk from "chalk";
import add from "./add.js";
import minus from "./sub.js";
import multiply from "./mul.js";
import divide from "./div.js";
console.log(chalk.redBright("Calculator"));
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
        choices: ['+', '-', '*', '/']
    }
]);
let ans1;
if (answer.operator === '+') {
    ans1 = add(answer.num1, answer.num2);
}
else if (answer.operator === '-') {
    ans1 = minus(answer.num1, answer.num2);
}
else if (answer.operator === '*') {
    ans1 = multiply(answer.num1, answer.num2);
}
else if (answer.operator === '/') {
    ans1 = divide(answer.num1, answer.num2);
}
console.log(`Your calculated answer is ${ans1}`);

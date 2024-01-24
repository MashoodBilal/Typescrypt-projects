#! user/bin/env node
import inquirer from "inquirer";
let num1 = Math.round(Math.random() * 10);
console.log(num1);
let guess = await inquirer.prompt({
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'
});
if (guess.numguess === num1) {
    console.log(" Your guess is right.");
    process.exit;
}
guess = await inquirer.prompt({
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'
});
if (guess.numguess === num1) {
    console.log(" Your guess is right.");
    process.exit;
}
guess = await inquirer.prompt({
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'
});
if (guess.numguess === num1) {
    console.log(" Your guess is right.");
    process.exit;
}

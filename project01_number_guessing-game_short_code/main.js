#! user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright(chalk.bold(chalk.underline("Try my new gussing game."))));
console.log(chalk.cyanBright(`Rule: You will have only Three tries to guess a number.`));
console.log(chalk.cyanBright(`Rule: You can choose numbers from 0 till 10.`));
let num1 = Math.round(Math.random() * 10);
for (let i = 0; i < 3; i++) {
    let guess = await inquirer.prompt({
        type: 'number',
        name: 'numguess',
        message: chalk.yellowBright('Guess your number:')
    });
    if (guess.numguess > 10 || guess.numguess < 0) {
        console.log(chalk.red(`WTF!! You have Cheated... I'm out! `));
        break;
    }
    if (num1 === guess.numguess) {
        console.log(chalk.green(`Congratulations!!!`));
        console.log(chalk.green(`You have guessed correctly!`));
        break;
    }
    else {
        console.log(chalk.redBright("Try again"));
    }
    if (i === 2) {
        console.log(chalk.red(`Sorry! You have lost the game... `));
    }
}

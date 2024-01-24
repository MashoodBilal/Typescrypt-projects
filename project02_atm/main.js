import inquirer from "inquirer";
import chalk from "chalk";
let username = "MashoodBilal";
let userPin = 1111;
const result = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter user ID: "
    },
    {
        type: "number",
        name: "pin",
        message: "Enter user PIN: "
    },
    {
        type: "list",
        name: "accType",
        choices: ["Saving", "Current", "Default"],
        message: "Select Account Type: "
    },
    {
        type: "list",
        name: "transectionType",
        choices: ["Fastcash", "Withdraw", "PayBill"],
        message: "Select function: ",
        when(result) {
            return result.accType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 1500, 2000, 3000, 4000, 5000, 10000],
        message: "Select Amount: ",
        when(result) {
            return result.transectionType === "Fastcash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount: ",
        when(result) {
            return result.transectionType === "Withdraw";
        }
    },
]);
let balanceAmount = Math.floor(Math.random() * 100000);
if (result.userId === username && result.pin === userPin) {
    console.log(chalk.green(`Your transection is successfull
`));
    console.log(chalk.magentaBright(`Your previous balance is: $${balanceAmount}
`));
    if (balanceAmount >= result.amount) {
        balanceAmount = balanceAmount - result.amount;
        console.log(chalk.magenta(`Your remaining amount is: $${balanceAmount}
    `));
    }
    else {
        console.log(chalk.red(`Insuffecint Balance.
    `));
    }
}
else {
    console.log(chalk.red(`Incorrect username or PIN`));
}
console.log(chalk.blue(`Thank You for using our services.`));
console.log(chalk.blue(`Please visit again.`));

#! user/bin/env node
import inquirer from "inquirer"
import { exit, exitCode } from "process"

let num1:number = Math.round(Math.random()*10)
console.log(num1)

let guess = await inquirer.prompt({
       
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'

})

if(guess.numguess === num1){
    console.log(" Your guess is right.");
    
}

guess = await inquirer.prompt({
       
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'

})

if(guess.numguess === num1){
    console.log(" Your guess is right.")
    process.exit
}
guess = await inquirer.prompt({
       
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'

})

if(guess.numguess === num1){
    console.log(" Your guess is right.")
    process.exit
}
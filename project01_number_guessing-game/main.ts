#! user/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import numguess from "./guess.js"
import function guess from "./guess.js"

let num1 = 4 //Math.round(Math.random()*10)
console.log(num1)



let i:number = 0

while ( i !== 3 ){
    
    guess 

    if(num1 === numguess){
        console.log("Your ans is correct.")
        break
    }
    
    for(i;i = 2; i++){
        console.log("Failed to guess number.")
        break
    } 
}

// console.log(guess.numguess)
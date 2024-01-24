import inquirer from "inquirer"

let us:number = 0
export async function guess(){
let guess:{numguess:number} = await inquirer.prompt({
       
    type: 'number',
    name: 'numguess',
    message: 'Guess your number:'

})
return guess.numguess
};
export default us;
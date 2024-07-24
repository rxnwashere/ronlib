// SAFE PASSWORD TESTER
// Code by Aarón Cano (GitHub: rxnwashere)

const prompt = require("prompt-sync")();
const validPass = true;
const numbers = /\d/;
const special = /[!$%&?¡¿*]/;

console.log("====SAFE PASSWORD TESTER====");
let password = prompt("Enter your password: ");

while (password.length < 12) {
    password = prompt("Your password isn't safe! Please enter a new password: ");
}

if(!(numbers).test(password)) {
    while(!(numbers).test(password)) {
        password = prompt("Your password isn't safe! Please enter a new password: ");
    }
}

else if(!(special).test(password)) {
    while(!(special).tes(password)) {
        password = prompt("Your password isn't safe! Please enter a new password: ");
    }
}

else {
    let yourPass = password;
    password = validPass;
    console.log(`Your password ${yourPass} is safe!!!`);
    console.log("====END====");
}
var inquirer = require("inquirer");
var fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name",
            name: "username"
        },
        {
            type: "password",
            message: "What is your password",
            name: "password"
        },
        {
            type: "password",
            message: "Please re-enter your password to confirm:",
            name: "confirm"
        },
        {
            type: "input",
            message: "Enter your zipcode, between [1 60000]:",
            name: "zipcode"
        },
        {
            type: "input",
            message: "Enter your income, between [1 1000000]:",
            name: "income"
        }
    ])
    .then(function(response) {

        if (response.confirm === response.password) {
            console.log("Password Successfully Enter!");
            fs.writeFileSync('userPassword.txt', JSON.stringify(response.password), function(err){

            });
        }
        else {
            console.log("You forgot your password already?!");           
        }        
    
    

        if ((response.zipcode <= 30000 && response.income < 100000) || (response.zipcode > 30000 && response.income < 100000)) {
            console.log("Sorry due to the information you enter, your kids will go to under privilege school.");
        }
        else if ((response.zipcode <= 30000 && response.income > 100000) || (response.zipcode > 30000 && response.income >= 100000)) {
            console.log("Congrats! Your kids will attend the privilege school.");
        }
    })


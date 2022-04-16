// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is your project named?'
    },
    {
        type: 'number',
        name: 'serial',
        message: 'Input Serial Number'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(`The user's response is: ${response}`);
            console.log(`The name of the project is ${response.project}`);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment")
            } else {
                console.error(error)
            }
        });

}

// Function call to initialize app
init();
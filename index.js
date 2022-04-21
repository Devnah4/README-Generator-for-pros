// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project",
    message: "What is your project named?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
    default: "Description",
  },
  {
    type: "input",
    name: "contents",
    message: "What are the contents of your project?",
    default: "none",
  },
  {
    type: "input",
    name: "installation",
    message: "What system needs to be installed?",
    default: 'none'
  },
  {
    type: "input",
    name: "usage",
    message: "Any Instructions?",
    deafult: 'none',
  },
  {
    type: "input",
    name: "credits",
    message: "Who else worked on this project?",
    default: "''",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your License:",
    choices: [
      "MIT",
      "APACHE 2.0",
      "GPL 3.0",
      "Boost Software License 1.0",
      "Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile('./README.md', generateMarkdown.data, (error) => {
    if (error) {
      throw error;
    } else {
      console.log("Successfully wrote to file!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(`The name of the project is ${response.project}`);
      console.log(`The user's response is: ${response.description}`);
      console.log(`The user's response is: ${response.contents}`);
      console.log(`The user's response is: ${response.installation}`);
      console.log(`The user's response is: ${response.usage}`);
      console.log(`The user's response is: ${response.credits}`);
      console.log(`The user's response is: ${response.license}`);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
      } else {
        console.error(error);
      }
    });
}

// Function call to initialize app
init();

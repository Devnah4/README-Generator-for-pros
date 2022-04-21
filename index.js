// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "contact",
    message: "What's a good way to reach you?",
    default: "None Available",
  },
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
    default: "none",
  },
  {
    type: "input",
    name: "usage",
    message: "Any Instructions?",
    deafult: "none",
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
  return fs.writeFile(fileName, data, (error) => {
    if (error) {
      throw error;
    } else {
      console.log("Successfully wrote to file!");
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(`github name: ${data.github}`)
      console.log(`contact info is: ${data.contact}`)
      console.log(`Project name is: ${data.project}`);
      console.log(`Description: ${data.description}`);
      console.log(`Contents: ${data.contents}`);
      console.log(`installation: ${data.installation}`);
      console.log(`usage: ${data.usage}`);
      console.log(`credits: ${data.credits}`);
      console.log(`license: ${data.license}`);
      return writeToFile('./utils/README.md', generateMarkdown(data));
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

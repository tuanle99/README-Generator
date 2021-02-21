// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project? ",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project(add double spaces for line break): ",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions(add double spaces for line break): ",
    name: "install",
  },
  {
    type: "input",
    message: "Usage information: ",
    name: "use",
  },
  {
    type: "input",
    message: "Contribution(add double spaces for line break):",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests",
    name: "test",
  },
  {
    type: "list",
    message: "License",
    name: "license",
    choices: ["MIT", "GPLv3", "AGPL", "No License"],
  },
  {
    type: "input",
    message: "Github username: ",
    name: "username",
  },
  {
    type: "input",
    message: "Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Instruction on how to reach me:",
    name: "additional_info",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err, result) {
    if (err) console.log("error", err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    let data = generateMarkdown(response);

    writeToFile(`./README.md`, data);
  });
}

// Function call to initialize app
init();

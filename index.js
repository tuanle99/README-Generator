const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "what is the title of your project? ",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions: ",
    name: "install",
  },
  {
    type: "input",
    message: "Usage information: ",
    name: "use",
  },
  {
    type: "input",
    message: "Who's contribute to this project: ",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests",
    name: "test",
  },
  {
    type: "list",
    message: "Choose your license type: ",
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err, result) {
    if (err) console.log("error", err);
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    let data = generateMarkdown(response);

    writeToFile(`./README.md`, data);
  });
}

init();

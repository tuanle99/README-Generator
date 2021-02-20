const fs = require("fs");
const inquirer = require("inquirer");

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer
  .prompt([
    {
      type: "input",
      message: "what is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Installation",
      name: "install",
    },
    {
      type: "input",
      message: "Usage",
      name: "use",
    },
    {
      type: "list",
      message: "License",
      name: "license",
      choices: [
        "I want it simple and permissive.",
        "I care about sharing improvements.",
        "No License.",
      ],
    },
    {
      type: "input",
      message: "Contribution",
      name: "contribution",
    },
    {
      type: "input",
      message: "Tests",
      name: "test",
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
      message: "Additional information on how to reach the user",
      name: "additional_info",
    },
  ])
  .then((response) =>
    fs.writeFile(
      `./README.md`,
      `
# ${response.title}

## Project Description

${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.install}

## Usage

${response.use}

## License

${response.license}
//do something depend on the license chooses


## Contributing

${response.contribution}

## Tests

${response.test}

## Questions

https://github.com/${response.username}

${response.email}
with instruction on how to contact with additional information

${response.additional_info}
`,
      (err) =>
        err
          ? console.log("There was an error!")
          : console.log("Successfully appended to file!")
    )
  );

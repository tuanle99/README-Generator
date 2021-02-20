const fs = require("fs");
const inquirer = require("inquirer");

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer
  .prompt([
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
      choices: ["MIT", "GPLv3", "AGPL"],
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
  ])

  .then((response) => {
    let license_choice = "";
    switch (response.license) {
      case "MIT":
        license_choice =
          "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
        break;
      case "GPLv3":
        license_choice =
          "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)";
        break;
      case "AGPL":
        license_choice =
          "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
        break;
    }

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

${license_choice}

## Contributing

${response.contribution}

## Tests

${response.test}

## Questions

https://github.com/${response.username}

${response.email}

${response.additional_info}
`,
      (err) =>
        err
          ? console.log("There was an error!")
          : console.log("Successfully appended to file!")
    );
  });

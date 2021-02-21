// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let license_choice = "";
  switch (license) {
    case "MIT":
      license_choice =
        "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]";
      break;
    case "GPLv3":
      license_choice =
        "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)]";
      break;
    case "AGPL":
      license_choice =
        "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)]";
      break;
    case "No License":
      license_choice = "";
      break;
  }
  return license_choice;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let license_choice = "";
  switch (license) {
    case "MIT":
      license_choice = "(https://choosealicense.com/licenses/mit/)";
      break;
    case "GPLv3":
      license_choice = "(https://opensource.org/licenses/)";
      break;
    case "AGPL":
      license_choice = "(http://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "No License":
      license_choice = "";
      break;
  }
  return license_choice;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  return `Licensed under the [${license}]${renderLicenseLink(license)} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge =
    renderLicenseBadge(data.license) + renderLicenseLink(data.license);

  let license = renderLicenseSection(data.license);
  return `# ${data.title}

  ${badge}

  ## Project Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.use}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  https://github.com/${data.username}
  
  ${data.email}
  
  ${data.additional_info}

  ## License
  ${license}

`;
}

module.exports = generateMarkdown;

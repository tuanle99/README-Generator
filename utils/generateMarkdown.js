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

function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  return `Licensed under the [${license}]${renderLicenseLink(license)} license`;
}

function generateMarkdown(data) {
  let badge =
    renderLicenseBadge(data.license) + renderLicenseLink(data.license);

  let license = renderLicenseSection(data.license);
  return `# ${data.title}

  ${badge}

  ## Project Description
  
  ${data.description}

  ![instructional video](assets/instructions_video.mkv)
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contributing)
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
  
  Github: https://github.com/${data.username}
  
  Email: ${data.email}
  
  ${data.additional_info}

  ## License
  ${license}

`;
}

module.exports = generateMarkdown;

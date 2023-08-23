// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache License Version 2.0"){
    return `![Static Badge](https://img.shields.io/badge/license-Apache-brightgreen)`
  } else if (license === "GNU GENERAL PUBLIC LICENSE Version 3"){
    return `![Static Badge](https://img.shields.io/badge/license-GNU-brightgreen)`
  } else if (license === "MIT License"){
    return `![Static Badge](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else {
    return ``
  }
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache License Version 2.0"){
    return `[Apache link](http://www.apache.org/licenses/)`
  } else if (license === "GNU GENERAL PUBLIC LICENSE Version 3"){
    return `[GNU link](https://www.fsf.org/)`
  } else if (license === "MIT License"){
    return `[MIT Link](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing)`
  } else {
    return ``
  }
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "Apache License Version 2.0"){
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === "GNU GENERAL PUBLIC LICENSE Version 3"){
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
    `
  } else if (license === "MIT License"){
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    `
  } else {
    return ``
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
  ${data.description}

## Table of Contents (Optional)
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}
  
## Credits
  ${data.credits}
  
## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
## How to Contribute
  ${data.contribute}
  
## Tests
  ${data.tests}

## Questions
  If you have any questions reach out to my email ${data.email} or my github https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;

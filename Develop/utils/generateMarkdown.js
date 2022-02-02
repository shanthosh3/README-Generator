// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }
  return `![Badge](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return '';
  } 
  return `
  * [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  } 
  return `
  ## License 
  This project has a ${license} license.
  `
}

// create table of contents logic here

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
 ## Description
 
 ${data.description}

 ## Table of Contents
 * [Installation](#Installation)
 * [Usage](#Usage)${renderLicenseLink(data.license)}
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [Questions](#Questions)
 
 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage} 
 ${renderLicenseSection(data.license)}
 ## Contribution
 ${data.contribution}

 ## Questions
 here is the link to my Github: [github.com/${data.github}]
 If you have any questions regarding the project please do not hesitate to contact me at:
 
  Email: [${data.email}] 
`;
}

module.exports = generateMarkdown;

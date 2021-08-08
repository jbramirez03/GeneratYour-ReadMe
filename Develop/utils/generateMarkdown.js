// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'GNU GPLv3'){
    return  `![license-badge](https://img.shields.io/badge/License-GNU-blueviolet)`
  } else {
    return `![license-badge](https://img.shields.io/badge/License-${license}-blueviolet)`
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `[${license}]: https://choosealicense.com/licenses/mit/`
  } else if(license === 'Apache'){
    return `[${license}]: https://choosealicense.com/licenses/apache-2.0/`
  } else if(license === 'GNU GPLv3'){
    return `[${license}]: https://choosealicense.com/licenses/gpl-3.0/`
  }else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## License
This Project is covered by the [${license}] license`;
  }else {
    return ``
  }
}

const renderTableContent = (license) => {
  if(license){
    return `- [License](#license)`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<h1 align="center">${data.title}</h1> 
  
[LinkedIn]: https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/
${renderLicenseBadge(data.license)}
![followers](https://img.shields.io/github/followers/jbramirez03?style=social)

${renderLicenseLink(data.license)}
## Summary
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderTableContent(data.license)}
- [Challenges](#challenges)
- [Technologies](#technologies)
- [Future development](#future-development)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.collaborators}<br><br>
[<img align="left" width="28px" alt="LinkedIn" src="https://user-images.githubusercontent.com/82244776/128110957-497edff3-59dc-41d6-89bc-be7570e441fe.png" />][LinkedIn]<br><br>
${renderLicenseSection(data.license)}
## Challenges
${data.challenges}
## Technologies
${data.technologies}
## Features
${data.features}
## Future Development
${data.future}
## How to Contribute
${data.contribute}
## Tests
${data.tests}
## Questions
If there are any questions about the project get in contact with me at my [Email](mailto:jason1287712@gmail.com)
`;

}

module.exports = {
  generateMarkdown,
};

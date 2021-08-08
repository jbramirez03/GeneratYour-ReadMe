// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What would you like to name your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your site?',
  },
  {
    type: 'input',
    name: 'collaborators',
    message: 'Who collaborated on your project?',
  },
  {
    type: 'list',
    message: 'What license would you like to use?',
    name: 'license',
    default: '',
    choices: ['MIT', 'Apache', 'GNU GPLv3'],
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are some features of your project?',
  },
  {
    type: 'input',
    name: 'challenges',
    message: 'What challenges did you face while making this project?',
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'What technoglogies were used in this project?',
  },
  {
    type: 'input',
    name: 'future',
    message: 'What plans do you have for future development?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can the community contribute to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Are there any tests available for your site?',
  },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    
    fs.writeFile(fileName,markdown.generateMarkdown(data),(err) => {
        err ? console.log(err) : console.log('Success!')
      });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", data);
        
})
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

// Declares initial variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Creates an object array with a list of questions to be presented to the user
const questions = [
  {
    type: 'input',
    message: 'What is the title for your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description for your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions on how to use this project.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List all contributors and third-party assets that require attribution. Enter "N/A" if this is a solo project that does not use any third-party assets that require attribution.',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'Choose the license for your project.',
    name: 'license',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New/Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
  },
  {
    type: 'input',
    message: 'What contribution guidelines would you like to set up for your project?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What test instructions would you like to set up for your project?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Enter your GitHub username.',
    name: 'GitHub',
  },
  {
    type: 'input',
    message: 'Enter your email address.',
    name: 'email',
  },
];

// This writes the file with all of the data gathered from the user.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), error => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Your README is ready!')
    }
  });
}

// This runs the initialization function.
function init() {
  inquirer.prompt(questions)
    .then(function(answers) {
      const fileName ='ExampleREADME.md'
        writeToFile(fileName, answers);
    });
}

// Function call to initialize app
init();

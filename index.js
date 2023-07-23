// Inquirer v.8.2.4 installed

// TODO: Create an array of questions for user input
// I'm doing this in a way that makes more sense.
inquirer
  .prompt([
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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New/Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

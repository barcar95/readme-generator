// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators in this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license for this project?',
        choices:['Apache License Version 2.0', 'GNU GENERAL PUBLIC LICENSE Version 3', 'MIT License', 'NONE']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution instructions?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },

];

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );  
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./dist/README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

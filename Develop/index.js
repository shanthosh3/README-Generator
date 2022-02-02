// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project?'
    },
    {
        type:'input',
        name: 'installation',
        message: 'Installation Steps?'
    },
    {
        type:'input',
        name: 'usage',
        message:'Instructions on how to Use?'
    },
    {
        type:'input',
        name: 'credits',
        message:'Who else collaborated on this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What was the license you used?',
        choices: ['Academic Free License v3.0', 'APACHE 2.0', 'Artistic license 2.0', 'BSD 2', 'Other']
    },
    {
        type: 'input',
        name:'contribution',
        message: 'how can I contribute to this project?'
    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();

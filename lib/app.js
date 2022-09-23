const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const Employee = require('./Employee.js');

const basicInfoQuestions = [
    {
        type: 'text',
        name: 'name',
        message: "Enter employee's name: "
    },
    {
        type: 'text',
        name: 'id',
        message: "Enter the employee's ID: "
    },
    {
        type: 'text',
        name: 'email',
        message: "Enter the empoyee's email: "
    }
]
const managerQuestions = {
    type: 'text',
    name: 'officeNumber',
    message: "Enter manager's office number: "
}
const engineerQuestions = {
    type: 'text',
    name: 'gitHub',
    message: "Enter engineer's gitHub username: "
}
const internQuestions = {
    type: 'text',
    name: 'school',
    message: "Entern intern's school: "
}
class app {
    initializeApp() {
        inquirer
            .prompt([{
                type: 'confirm',
                name: 'Welcome',
                message: "Welcome to Team Profile Generator. Do you want to add the Manager's info? "
            }
            ])
            .then((answers) => {
                if (answers.Welcome) {
                    this.addManager();
                } else {
                    this.selectEmployeeType();
                }
            })
    }
    async addManager() {
        await inquirer
            .prompt(basicInfoQuestions.concat(managerQuestions))
            .then(({ name, id, email, officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);
                console.log(manager)
            })
        this.selectEmployeeType();
    }
    async addEngineer() {
        await inquirer
            .prompt(basicInfoQuestions.concat(engineerQuestions))
            .then(({ name, id, email, gitHub }) => {
                const engineer = new Engineer(name, id, email, gitHub);
                console.log(engineer)
            })
        this.selectEmployeeType();
    }
    async addIntern() {
        await inquirer
            .prompt(basicInfoQuestions.concat(internQuestions))
            .then(({ name, id, email, school }) => {
                const intern = new Intern(name, id, email, school);
                console.log(intern)
            })
        this.selectEmployeeType();
    }
    async selectEmployeeType() {
        await inquirer
            .prompt({
                type: 'list',
                name: 'nextAction',
                message: "What would you like to do next?",
                choices: ['Add an engineer.', 'Add an intern.', 'Finish building Team.']
            })
            .then(({ nextAction }) => {
                console.log(nextAction)
                switch (nextAction) {
                    case 'Add an engineer.':
                        this.addEngineer();
                        break;
                    case 'Add an intern.':
                        this.addIntern();
                        break;
                    case 'Finish building Team.':
                        console.log("All employee's added to team roster.");
                        break;
                }
            })
    }
}
module.exports = app;
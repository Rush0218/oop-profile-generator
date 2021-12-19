//node modules 
const fs = require('fs');
const inquirer = require('inquirer');


//js team profiles 
const Engineer = require('./Employee.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

//html page
const Html = require('src/generateHTML.js');


const teamArr = [];

const addEmployee = () => {
    console.log(`
    =================
    Generating Team
    ================= 
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Pleae choose your role.',
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please input the name of the employee.',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter a valid name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: inputID => {
                if (inputID) {
                    return true;
                } else {
                    console.log('Please input a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address.",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please input a valid employee email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === 'Engineer',
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log('Please input a valid GitHub account for employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === 'Intern',
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log('Please input a valid University for employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the employee's office number if manager role.",
            when: (input) => input.role === 'Manager',
            validate: inputOffice => {
                if (inputOffice) {
                    return true;
                } else {
                    console.log("Please input the manager's correct office number!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: "Would you like to add more team profile's?",
            default: false
        }


    ])
        .then(data => {
            let(names, id, email, role, github, university, officeNum) = data;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(names, id, email, github);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(names, id, email, university);
                console.log(employee);
            } else if (role === 'Manager') {
                employee = new Manager(names, id, emial, officeNum);
                console.log(employee);
            }
            teamArr.push(employee);

            if (confirmEmployee) {
                return addEmployee(teamArr);
            } else {
                return teamArr;
            }
        })
};

//creat file with fs module
const generateFile = data => {
    fs.writeFile('dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("All team profiles have been successfully generated!")
        }
    })
    return generateFile;
}; 
//node modules 
const fs = require('fs');
const inquirer = require('inquirer');


//js team profiles 
const Engineer = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//html page
const generateHTML = require('./src/generateHTML.js');


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
            message: 'Please choose your role.',
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
            message: "Please enter the engineer's GitHub username.",
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
            name: 'university',
            message: "Please enter the intern's university.",
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
            message: "Please enter the manager's office number.",
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
            let { role, name, id, email, github, university, office, confirmEmployee } = data;
            let employee;

            if (role === 'Intern') {
                employee = new Intern(name, id, email, university);
                teamArr.push(employee)
                console.log(employee);
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                teamArr.push(employee);
                console.log(employee);
            } else {
                employee = new Manager(name, id, email, office);
                teamArr.push(employee);
                console.log(employee);
            }

            if (confirmEmployee) {
                return addEmployee(teamArr);
            } else {
                return teamArr;
            }
        })
};

//creat file with fs module
const writeFile = data => {
    fs.writeFile('dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("All team profiles have been successfully generated!")
        }
    })
};

addEmployee()
    .then(teamArr => {
        return generateHTML(teamArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err)
    }); 
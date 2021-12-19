const Employee = require('./lib/Employee.js');

class Intern extends Employee {
    constructor(
        name,
        id,
        email,
        university
    ) {
        super(name, id, email);

        this.university = university;
    }

    inputRole() {
        return 'Intern'
    }

    inputSchool() {
        return this.university;
    }
};

module.exports = Intern; 
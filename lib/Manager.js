const Employee = require('./lib/Employee.js');

class Manager extends Employee {
    constructor(
        name,
        id,
        email,
        officeNum
    ) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    inputRole() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNum;
    }
};

module.exports = Manager; 
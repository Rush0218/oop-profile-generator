const Employee = require('./Employee');

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

    inputOffice() {
        return this.officeNum;
    }
};

module.exports = Manager; 
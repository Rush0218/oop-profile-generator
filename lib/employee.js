class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    inputRole() {
        return 'Employee';
    }

    inputName() {
        return this.name;
    }

    inputID() {
        return this.id;
    }

    inputEmail() {
        return this.email;
    }

};

module.exports = Employee; 
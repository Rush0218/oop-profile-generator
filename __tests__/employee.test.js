const Employee = require('../lib/Employee.js');

//tests for creating employee object
test('generate employee objetct', () => {
    const employee = new Employee('Tre', 218, 'rush02@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test for employee name
test('employee name', () => {
    const employee = new Employee('Tre', 218, 'rush02@gmail.com');

    expect(employee.inputName()).toEqual(expect.any(String));
});

//test for employee id
test('employee id', () => {
    const employee = new Employee('Tre', 218, 'rush02@gmail.com');

    expect(employee.inputID()).toEqual(expect.any(Number));
});

//test for employee email
test('employee email', () => {
    const employee = new Employee('Tre', 218, 'rush02@gmail.com');

    expect(employee.inputEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('employee role', () => {
    const employee = new Employee('Tre', 218, 'rush02@gmail.com');

    expect(employee.inputRole()).toEqual('Employee');
});


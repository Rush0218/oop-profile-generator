const Manager = require('./Manager');

//test to create an manager object
test('generate manager', () => {
    const manager = new Manager('Tre', 218, 'rush02@gmail.com', 2);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

//test for role
test('employee role', () => {
    const manager = new Manager('Tre', 218, 'rush02@gmail.com', 2);

    expect(manager.inputRole()).toEqual('Manager');
}); 
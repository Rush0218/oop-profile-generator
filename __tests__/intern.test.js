const Intern = require('./Intern');

//test to create an intern object
test('generate intern', () => {
    const intern = new Intern('Tre', 218, 'rush02@gmail.com', 'UNC');

    expect(intern.university).toEqual(expect.any(String));
});

//test for school
test('generate intern', () => {
    const intern = new Intern('Tre', 218, 'rush02@gmail.com', 'UNC');

    expect(intern.inputSchool()).toEqual(expect.stringContaining(intern.university.toString()));
});

//test for role
test('employee role', () => {
    const intern = new Intern('Tre', 218, 'rush02@gmail.com', 'UNC');

    expect(intern.inputRole()).toEqual('Intern');
}); 
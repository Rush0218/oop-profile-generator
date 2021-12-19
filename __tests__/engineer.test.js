const Engineer = require('./Engineer');

//test to create an engineer object
test('generate engineer', () => {
    const engineer = new Engineer('Tre', 218, 'rush02@gmail.com', 'rush0218');

    expect(engineer.github).toEqual(expect.any(String));
});

//test for github
test('generate engineer', () => {
    const engineer = new Engineer('Tre', 218, 'rush02@gmail.com', 'rush0218');

    expect(engineer.inputGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//test for role
test('employee role', () => {
    const engineer = new Engineer('Tre', 218, 'rush02@gmail.com', 'rush0218');

    expect(engineer.inputRole()).toEqual('Engineer');
}); 
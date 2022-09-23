const Engineer = require('../lib/Engineer');

test('Creates an engineer object', () => {
    const engineer = new Engineer('John', "12345", "john@email.com", "johngitHub");
    expect(engineer.role).toBe('Engineer')
});
test('Checks for a gitHub username', () => {
    const engineer = new Engineer('John', "12345", "john@email.com", "JohngitHub")
    expect(engineer.gitHub).toEqual(expect.any(String))
});
test("get github username", () => {
    const engineer = new Engineer('John', '12345', 'john@email.com', 'JohngitHub');
    expect(engineer.getGitHub()).toEqual('JohngitHub');
})
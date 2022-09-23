const Manager = require('../lib/Manager');

test('Creates a manager object', () => {
    const manager = new Manager('John', '12345', 'John@gmail.com', 'JohnOffice');
    expect(manager.role).toBe('manager');
});
test('Checks for an office number', () => {
    const manager = new Manager('John', '12345', 'John@gmail.com', 'JohnOffice');
    expect(manager.officeNumber).toEqual(expect.any(String));
});
test("get office number", () => {
    const manager = new Manager('John', '12345', 'John@gmail.com', 'JohnOffice');
    expect(manager.getOfficeNumber()).toEqual('JohnOffice');
})
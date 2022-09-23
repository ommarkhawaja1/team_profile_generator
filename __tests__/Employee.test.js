const Employee  = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 1, 'john@gmail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('John')
    expect(employee.getName()).toEqual('John');
});

test('gets employee id', () => {
    const employee = new Employee('John', 1)
    expect(employee.getId()).toEqual(1);
});

test('gets employee email', () => {
    const employee = new Employee('John', 1, 'john@gmail.com')
    expect(employee.getEmail()).toEqual('john@gmail.com');
});
test('gets employee role', () => {
    const employee = new Employee('John', 1, 'john@gmail.com')
    expect(employee.getRole()).toEqual('Employee');
});
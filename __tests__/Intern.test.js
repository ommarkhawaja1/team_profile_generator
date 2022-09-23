const Intern = require("../lib/Intern");

test ("Creates an intern object", () => {
    const intern = new Intern('John', '12345', 'John@gmail.com', 'JohnSchool');
    expect(intern.role).toBe('intern');
});
test("Checks for a school name", () => {
    const intern = new Intern('John', '12345', 'John@gmail.com', 'JohnSchool');
    expect(intern.school).toEqual(expect.any(String));
});
test("get school name", () => {
    const intern = new Intern('John', '12345', 'John@gmail.com', 'JohnSchool');
    expect(intern.getSchool()).toEqual('JohnSchool');
})

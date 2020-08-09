const Employee = require('../lib/Emplyee');

test('creates an employee object', () =>{
    const employee = new Employee('Name');

    expect(employee.name).toBe('Name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});


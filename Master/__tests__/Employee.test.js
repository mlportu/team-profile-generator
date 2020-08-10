const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
    const employee = new Employee('Name');

    expect(employee.name).toBe('Name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee name', () =>{
    const employee = new Employee('Name');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee id', () =>{
    const employee = new Employee('Name');

    expect(employee.getId()).toBeGreaterThan(0);
});

test('gets employee email', () =>{
    const employee = new Employee('Name');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets the designated role of the employee', ()=>{
    const employee = new Employee('Name');

    expect(employee.getRole()).toBe('Employee');
});
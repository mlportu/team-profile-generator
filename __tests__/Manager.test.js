const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const manager = new Manager('Name');

    expect(manager.name).toBe('Name')
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
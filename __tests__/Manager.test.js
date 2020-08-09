const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const manager = new Manager('Mgr');

    expect(manager.name).toBe('Mgr')
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets assigned role', () =>{
    const manager = new Manager('Mgr');

    expect(manager.getRole()).toBe('Manager');
})
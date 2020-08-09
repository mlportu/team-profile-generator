const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const manager = new Manager('Mgr');

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.name).toBe('Mgr')
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee name', () =>{
    const manager = new Manager('Mgr');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets employee id', () =>{
    const manager = new Manager('Mgr');

    expect(manager.getId()).toBeGreaterThan(0);
});

test('gets employee email', () =>{
    const manager = new Manager('Mgr');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets assigned role', () =>{
    const manager = new Manager('Mgr');

    expect(manager.getRole()).toBe('Manager');
})
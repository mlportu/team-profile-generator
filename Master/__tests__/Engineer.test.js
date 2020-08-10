const Engineer = require('../lib/Engineer');
const { TestScheduler } = require('jest');

test('creates an Engineer object', () =>{
    const engineer = new Engineer ('Engineer');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github));
});

test("gets engineer's github account name", () =>{
    const engineer = new Engineer ('Engineer');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github))
});

test('gets the designated role of the engineer', ()=>{
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});
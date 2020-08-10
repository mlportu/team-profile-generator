const Intern = require('../lib/Intern');

test('creates an intern object', () =>{
    const intern = new Intern('Intern');

    expect(intern.name).toBe('Intern');
    expect(intern.school).toEqual(expect.stringContaining(intern.school));
});

test("gets intern's school information", ()=> {
    const intern = new Intern('Intern');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})

test('gets the designated role of the Intern', ()=>{
    const intern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');
});
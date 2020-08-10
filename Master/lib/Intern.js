const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = ''){
        super(name);

        this.school = 'School'
    };

    getSchool(){
        return this.school
    };

    getRole(){
        return "Intern"
    };
}

module.exports=Intern
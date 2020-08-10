const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = 999;
    };

    getRole(){
        return 'Manager'
    };
}

module.exports = Manager
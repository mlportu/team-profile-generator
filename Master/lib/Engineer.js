const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name = ''){
        super(name);

        this.github = 'github link'
    };

    getGithub(){
        return `https://github.com/${this.github}`
    };

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer
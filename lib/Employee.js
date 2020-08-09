class Employee {
    constructor(name = ''){
        this.name = name;
        this.id = 99999
        this.email = 'email';
    };

    getName(){
        return `${this.name}`
    };

    getId(){
        return this.id
    };

    getEmail(){
        return `${this.email}`
    };
    
    getRole(){
        return 'Employee'
    }
 }

module.exports = Employee

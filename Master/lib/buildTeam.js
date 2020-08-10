const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern')

function Team (){
    this.manager;
    this.engineer;
    this.intern;
};

Team.prototype.managerInfo = function(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What is your team manager's name?",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter your team manager's name");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:"What is your team manager's id?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter your mangaer's id");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"What is your team manager's email?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter your mangaer's email");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'officeNumber',
            message:"What is your team manager's office number?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter your mangaer's office number");
                    return false;
                }
            }
        }
    ])
    .then(({name, id, email, officeNumber}) => {
        this.manager = new Manager(name)
        this.buildTeam();
    })
}

Team.prototype.buildTeam = function() {
    inquirer.prompt({
            type:'list',
            message:"What is type of employee would you like to add?",
            name:'selectEmployee',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team'],
    })
    .then(({selectEmployee}) => {
        if(selectEmployee === 'Engineer'){
            this.engineerInfo();
        } else if(selectEmployee === 'Intern'){
            this.internInfo();
        } else{
            return false
        };
    })
}

Team.prototype.engineerInfo = function(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What is the Engineer's name?",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter the Engineer's name");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:"What is the Engineer's id?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please the Engineer's id");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"What is the Engineer's email?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter the Engineer's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message:'What is their Github account name?',
            validate: github =>{
                if(github){
                    return true;
                } else {
                    console.log("Please enter this engineer's github account name");
                    return false;
                }
            }
        }
    ])
    .then(({name}) => {
        this.engineer = new Engineer(name);

        this.buildTeam();
    })
};

Team.prototype.internInfo = function(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What is the Intern's name?",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter the Intern's name");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:"What is the Intern's id?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please enter the Intern's id");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"What is the Intern's email?",
            validate: idInput =>{
                if(idInput){
                    return true;
                } else {
                    console.log("Please the Intern's email");
                    return false;
                }
            }
        },
        {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend?',
        validate: school =>{
            if(school){
                return true;
            } else {
                console.log("Please enter this inter's school");
                return false;
            }
        }
        }
    ])
    .then(({name}) => {
        this.intern = new Intern(name);
       
        this.buildTeam();
    })
}
module.exports=Team
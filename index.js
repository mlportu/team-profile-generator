const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

function developTeam (){
    this.manager;
    this.egineer;
    this.intern;
}
developTeam.prototype.managerInfo = function(){
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
}


developTeam();
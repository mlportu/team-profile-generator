const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')


const managerInfo = () => {
    return inquirer.prompt([
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

const buildTeam = () => {
    return inquirer.prompt(
        {
            type:'list',
            message:"What is type of employee would you like to add?",
            name:'selectEmployee',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team'],
            validate: selEmp =>{
                if(selEmp){
                    return true;
                } else {
                    console.log("Please select an employee to add to the team");
                    return false;
                }
            }
        })
    .then(({selectEmployee}) => {
        if(selectEmployee === 'Engineer'){
            inquirer.prompt(
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
                })
        } else if(selectEmployee === 'Intern'){
            inquirer.prompt(
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
            })
        }
    })
}


managerInfo()
    .then(buildTeam)
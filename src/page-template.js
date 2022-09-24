const fs = require('fs');


function writeFile(fileContent) {
        new Promise((resolve, reject) => {
                fs.writeFile('../dist/index.html', fileContent, err => {
                        if (err) {
                                reject(err);
                                return;
                        }
                        resolve({
                                ok: true,
                                message: 'Roster created!',
                        })
                })
        });
}
function appendToHtml(fileContent) {
        fs.appendFile('../dist/index.html', fileContent, function (err) {
                if (err) throw err;
        });
}
const htmlStartingTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>My Team Roster</title>
</head>
<body>
        <header class="text-bg-danger p-3 mb-3">
                <h1 class="text-center ">MY TEAM</h1>
        </header>
        <main class="container">
                <div class='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2' id='roster'>
`
const htmlEndingTemplate = `
        </div>
        </main>
        </body>
</html>`;

const generateManagerCard = function (manager) {
        if (!manager) {
                return '';
        }
        return `
                        <div class="col">
                                <div class="card border-dark text-bg-light h-100 w-75">
                                        <h5 class="card-title card-header text-center text-bg-danger ">Manager</h5>
                                        <div class="card-body ">
                                                <div class="card-header">
                                                        ${manager.getName()}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">ID: ${manager.getId()}</li>
                                                        <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                                                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>`
}
const generateEngineerCard = function (engineer) {
        if (!engineer) {
                return '';
        }
        return `
                        <div class="col">
                                <div class="card border-dark text-bg-light h-100 w-75">
                                        <h5 class="card-title card-header text-center  text-bg-success">Engineer</h5>
                                        <div class="card-body">
                                                <div class="card-header">
                                                        ${engineer.getRole()}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                                                        <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
`
}
const generateInternCard = function (intern) {
        if (!intern) {
                return '';
        }
        return `
                        <div class="col">
                                <div class="card text-bg-light border-dark h-100 w-75">
                                        <h5 class="card-title card-header text-center text-bg-secondary">Intern</h5>
                                        <div class="card-body">
                                                <div class="card-header">
                                                        ${intern.getName()}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">ID: ${intern.getId()}</li>
                                                        <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                                                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
`
}

module.exports = { writeFile, appendToHtml, htmlStartingTemplate, htmlEndingTemplate, generateManagerCard, generateEngineerCard, generateInternCard }

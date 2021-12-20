//generate engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//generate intern card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">University: ${intern.university}</p>
            </div>
        </div>
    </div>
    `;
};


//generate manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">supervisor_account</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office: ${manager.officeNum}</p>
            </div>
        </div>
    </div>
    `;
};

//generate HTML page
const generatePage = function (employees) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-title mb-0 h1 w-100 text-center" id="navbar-text">Team</span>
                </nav>
            </header>
            <main>
                <div class="teamcontainer">
                    <div class="row justify-content-center" id="team-cards">
                        <!--Team Cards-->
                        ${employees}
                    </div>
                </div>
            </main>
            
        </body>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </html>
`
};

//function to generate html page depending on input
generateHTML = (data) => {

    //create an array for each team container
    dataArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.inputRole();

        //team member functions
        if (role === 'Engineer') {
            const engineer = generateEngineer(employee);

            dataArr.push(engineer);
        }

        if (role === 'Intern') {
            const intern = generateIntern(employee);

            dataArr.push(intern);
        }

        if (role === 'Manager') {
            const manager = generateManager(employee);

            dataArr.push(manager);
        }
    }
    const team = dataArr.join('');
    const generateTeam = generatePage(team);
    return generateTeam;
};

module.exports = generateHTML; 
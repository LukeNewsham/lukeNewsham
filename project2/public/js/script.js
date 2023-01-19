// GLOBAL VARIABLES -----------------------------------------

let GLOBAL_departments = []
let GLOBAL_locations = []
let GLOBAL_employees = []

let GLOBAL_chosenDepartment = 0

let GLOBAL_hightestEmployeeID = 0
let GLOBAL_hightestDepartmentID = 0
let GLOBAL_hightestLocationID = 0

let GLOBAL_employeeAddUpdate = ''
let GLOBAL_departmentAddUpdate = ''
let GLOBAL_locationAddUpdate = ''

let employeeForm = document.getElementById('employeeForm')
let departmentForm = document.getElementById('departmentForm')
let locationForm = document.getElementById('locationForm')

let departmentsXValues = [];
let departmentsYValues = [];
var departmentsBarColors = [];

let locationsXValues = [];
let locationsYValues = [];
var locationsBarColors = ['rgb(120, 189, 221)'];

let departmentsChart;
let locationsChart;

























// Load all database data (run on first load) ----------------------------------------

function loadDatabase(departmentSort, locationSort) {

    //Reset chosen department as all
    GLOBAL_chosenDepartment = 0
    getEmployees(GLOBAL_chosenDepartment)

    let employees = GLOBAL_employees

    // loadDatabase CRUD 2: Get departments and add data throughout site
    $.ajax({
        dataType: "json",
        url: `php/getAllDepartments.php`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {

                //Add all onto departments
                let departments = result.data
                departments.unshift({ id: '0', name: 'All', locationID: '0' })

                //Sort if sort has an option
                if (departmentSort) {
                    let columnData = departmentSort.column
                    if (departmentSort.column === 'id') {
                        columnData = parseInt(columnData)
                    }
                    if (departmentSort.order === 'asc') {
                        departments.sort((a, b) => a[columnData] > b[columnData] ? 1 : -1)
                    } else {
                        departments.sort((a, b) => a[columnData] < b[columnData] ? 1 : -1)
                    }
                }

                //Select all lists for departments and reset
                let selectDepartmentOptions = document.getElementById("departmentOptions")
                selectDepartmentOptions.innerHTML = ''
                let select = document.getElementById("departmentList")
                select.innerHTML = ''
                let selectDepartmentsFilter = document.getElementById("departmentsFilter")
                selectDepartmentsFilter.innerHTML = ''


                //Reset values for charts
                departmentsXValues = []
                departmentsYValues = []
                locationsXValues = []
                locationsYValues = []
                GLOBAL_departments = []
                GLOBAL_locations = []


                // For each department
                for (let i = 0; i < departments.length; i++) {

                    // Add department option to departments filter 
                    let option = document.createElement('option')
                    let optionHtml = document.createTextNode(`${departments[i].name}`)
                    option.appendChild(optionHtml)
                    selectDepartmentsFilter.appendChild(option)

                    //Filter out employees which are in department to be added to location later on
                    let employeesInDep = employees.filter(employee => employee.departmentID === departments[i].id)

                    // For all departments in database (removing 'all')
                    if (departments[i].id !== '0') {

                        //Add department to global array
                        GLOBAL_departments.push(departments[i])

                        //Add department data to chart axis arrays
                        departmentsXValues.push(departments[i].name)
                        departmentsYValues.push(employeesInDep.length)
                        departmentsBarColors.push('lightblue')

                        // Update highest department ID
                        let int = parseInt(departments[i].id)
                        if (int > GLOBAL_hightestDepartmentID) {
                            GLOBAL_hightestDepartmentID = int
                        }

                        // Add department option to departments select in from
                        let option = document.createElement('option')
                        let optionHtml = document.createTextNode(`${departments[i].name}`)
                        option.appendChild(optionHtml)
                        selectDepartmentOptions.appendChild(option)

                        // Add department row and column data to departments table
                        let row = document.createElement("tr");
                        row.className = 'departmentRow'
                        row.setAttribute('data-bs-toggle', 'modal')
                        row.setAttribute('data-bs-target', '#modal')


                        let idCol = document.createElement("td");
                        let idColHtml = document.createTextNode(`${departments[i].id}`)
                        idCol.appendChild(idColHtml)
                        row.appendChild(idCol);
                        row.setAttribute('data-id', `${departments[i].id}`)

                        let depCol = document.createElement("td");
                        let depColHtml = document.createTextNode(`${departments[i].name}`)
                        depCol.appendChild(depColHtml)
                        row.appendChild(depCol);
                        row.setAttribute('data-dep', `${departments[i].name}`)

                        let locationCol = document.createElement("td");
                        let locationColHtml = document.createTextNode(`${departments[i].location}`)
                        locationCol.appendChild(locationColHtml)
                        row.appendChild(locationCol);
                        row.setAttribute('data-location', `${departments[i].location}`)

                        let employeesCol = document.createElement("td");
                        let employeesColHtml = document.createTextNode(`${employeesInDep.length}`)
                        employeesCol.appendChild(employeesColHtml)
                        row.appendChild(employeesCol);
                        row.setAttribute('data-employees', `${employeesInDep.length}`)

                        select.appendChild(row);
                    }
                }
            }
        }
    }).error(function (e) {
        console.log(e)
    });


    // loadDatabase CRUD 3: Get locations and add employee total to table
    $.ajax({
        dataType: "json",
        url: `php/getAllLocations.php`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {

                let locations = result.data

                //Sort if sort has an option
                if (locationSort) {
                    let columnData = locationSort.column
                    if (locationSort.column === 'id') {
                        columnData = parseInt(locationSort.column)
                    }
                    if (locationSort.order === 'asc') {
                        locations.sort((a, b) => a[columnData] > b[columnData] ? 1 : -1)
                    } else {
                        locations.sort((a, b) => a[columnData] < b[columnData] ? 1 : -1)
                    }
                }

                let colorNum = 20

                let selectLocationOptions = document.getElementById("depLocations")
                selectLocationOptions.innerHTML = ''

                let selectDeleteMoveLocationOptions = document.getElementById("locLocationsMove")
                selectDeleteMoveLocationOptions.innerHTML = ''

                let select = document.getElementById("locationsList")
                select.innerHTML = ''


                //For all locations
                for (i = 0; i < locations.length; i++) {

                    //Filter out employees which are in location
                    let employeesInLoc = employees.filter(employee => employee.location === locations[i].name)

                    //Filter out departments which are in location
                    let departmentsInLoc = GLOBAL_departments.filter(department => department.location === locations[i].name)
                    departmentsInLoc.forEach(dep => {
                        departmentsInLocNames.push(`  ${dep.name}`)
                    })

                    // Add location row and column data to locations table
                    let row = document.createElement("tr");
                    row.className = 'locationRow'
                    row.setAttribute('data-bs-toggle', 'modal')
                    row.setAttribute('data-bs-target', '#modal')
                    row.setAttribute('data-id', `${locations[i].id}`)

                    let idCol = document.createElement("td");
                    let idColHtml = document.createTextNode(`${locations[i].id}`)
                    idCol.appendChild(idColHtml)
                    row.appendChild(idCol);
                    row.setAttribute('data-id', `${locations[i].id}`)

                    let nameCol = document.createElement("td");
                    let nameColHtml = document.createTextNode(`${locations[i].name}`)
                    nameCol.appendChild(nameColHtml)
                    row.appendChild(nameCol);
                    row.setAttribute('data-name', `${locations[i].name}`)

                    let departmentsCol = document.createElement("td");
                    let departmentsColHtml = document.createTextNode(`(${departmentsInLoc.length}) ${departmentsInLocNames}`)
                    departmentsCol.appendChild(departmentsColHtml)
                    row.appendChild(departmentsCol);

                    let employeesCol = document.createElement("td");
                    let employeesColHtml = document.createTextNode(`${employeesInLoc.length}`)
                    employeesCol.appendChild(employeesColHtml)
                    row.appendChild(employeesCol);
                    row.setAttribute('data-employees', `${employeesInLoc.length}`)

                    select.appendChild(row);

                    //Add location to location select in department form                    
                    let option = document.createElement('option')
                    let optionHtml = document.createTextNode(`${locations[i].name}`)
                    option.appendChild(optionHtml)
                    selectLocationOptions.appendChild(option)

                    //Add location to location select move in delete location form                    
                    let optionDelMove = document.createElement('option')
                    let optionDelMoveHtml = document.createTextNode(`${locations[i].name}`)
                    optionDelMove.appendChild(optionDelMoveHtml)
                    selectDeleteMoveLocationOptions.appendChild(optionDelMove)



                    //Add location name to chart x value array
                    locationsXValues.push(locations[i].name)

                    //Add location data to global array
                    GLOBAL_locations.push(locations[i])

                    //Runs through employees 
                    employees.forEach(employee => {

                        //If location is not within locations array, add it along with adding data for chart. Else add 1 to total
                        if (employee.location === locations[i].name) {
                            if (locationsYValues[i] === undefined) {
                                locationsYValues[i] = 1
                                colorNum = colorNum + 40
                                locationsBarColors[i] = `rgb(40, ${colorNum}, 240)`
                            } else {
                                locationsYValues[i] = locationsYValues[i] + 1
                            }
                        }
                    })
                }
            }
        }
    }).error(function (e) {
        console.log(e)
    });

    //Clear all charts
    if (departmentsChart) {
        departmentsChart.destroy()
        locationsChart.destroy()
    }

    //Create departments chart comparing total employees
    departmentsChart = new Chart("departmentsChart", {
        type: "bar",
        data: {
            labels: departmentsXValues,
            datasets: [{
                backgroundColor: departmentsBarColors,
                data: departmentsYValues
            }]
        },
        options: {
            legend: { display: false },
            indexAxis: 'y',
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                }
            }
        }
    });

    //create locations chart comparing total employees
    locationsChart = new Chart("locationsChart", {
        type: "doughnut",
        data: {
            labels: locationsXValues,
            datasets: [{
                backgroundColor: locationsBarColors,
                data: locationsYValues
            }]
        },
        options: {
        }
    });


}

loadDatabase()
























//Functions to reload specific database data ----------------------------------------

//Load employees for a chosen department, including the option to sort data
function getEmployees(id, sort, search) {

    let URL = `php/getAllFromDepartment.php?id=${id}`

    //If id is 0 (for 'all', not a real department id within the database), load all employees
    if (id === '0' || id === 0) {
        console.log('getting all')
        URL = 'php/getAll.php'
    }

    //Load employees
    $.ajax({
        dataType: "json",
        url: URL,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {

                let employees = result.data
                GLOBAL_employees = employees

                //If there are no employees
                if (result.data.length === 0) {
                    $('#total').html(employees.length);
                    $('#totalWhat').html('Employees');
                    $('#newest').html('No Employees');
                    $('#newestLast').html('');
                    $('#newestEmpDep').html('');
                    let select = document.getElementById("employeeList")
                    select.innerHTML = ''
                    return
                }

                //Update page details
                $('#stat2').css('display', 'block')
                $('#total').html(employees.length);

                $('#newest').html(employees.slice(-1).pop().firstName);
                $('#newestWhat').html(employees.slice(-1).pop().firstName);
                $('#newestLast').html(employees.slice(-1).pop().lastName);

                //Reset select options for form
                let select = document.getElementById("employeeList")
                select.innerHTML = ''

                //Sort data if sort has an option
                if (sort) {
                    let columnData = sort.column
                    if (sort.column === 'id') {
                        columnData = parseInt(columnData)
                    }
                    if (sort.order === 'asc') {
                        employees.sort((a, b) => a[columnData] > b[columnData] ? 1 : -1)
                    } else {
                        employees.sort((a, b) => a[columnData] < b[columnData] ? 1 : -1)
                    }
                }

                if (search) {
                    employees = employees.filter(emp => {
                        if (emp.firstName.toLowerCase().startsWith(search.toLowerCase()) || emp.lastName.toLowerCase().startsWith(search.toLowerCase())) {
                            return true
                        }
                    })
                }

                //For each employee
                for (let i = 0; i < employees.length; i++) {

                    let int = parseInt(employees[i].id)

                    //Update global variable if the id is the highest
                    if (int > GLOBAL_hightestEmployeeID) {
                        GLOBAL_hightestEmployeeID = int
                    }

                    //Add employee row to employee table with column data
                    let row = document.createElement("tr");
                    row.setAttribute('data-bs-toggle', 'modal')
                    row.setAttribute('data-bs-target', '#modal')
                    row.className = 'employeeRow'

                    let idCol = document.createElement("td");
                    idCol.className = 'd-none d-md-table-cell'
                    let idColHtml = document.createTextNode(`${employees[i].id}`)
                    idCol.appendChild(idColHtml)
                    row.appendChild(idCol);
                    row.setAttribute('data-id', `${employees[i].id}`)

                    let firstNameCol = document.createElement("td");
                    let firstNameColHtml = document.createTextNode(`${employees[i].firstName}`)
                    firstNameCol.appendChild(firstNameColHtml)
                    if (search && employees[i].firstName.toLowerCase().startsWith(search.toLowerCase())) {
                        firstNameCol.className = 'highlighted'
                    }
                    row.appendChild(firstNameCol);
                    row.setAttribute('data-firstname', `${employees[i].firstName}`)


                    let lastNameCol = document.createElement("td");
                    let lastNameColHtml = document.createTextNode(`${employees[i].lastName}`)
                    if (search && employees[i].lastName.toLowerCase().startsWith(search.toLowerCase())) {
                        lastNameCol.className = 'highlighted'
                    }
                    lastNameCol.appendChild(lastNameColHtml)
                    row.appendChild(lastNameCol);
                    row.setAttribute('data-lastname', `${employees[i].lastName}`)

                    let depCol = document.createElement("td");
                    depCol.className = 'd-none d-md-table-cell'
                    let depColHtml = document.createTextNode(`${employees[i].department} `)
                    depCol.appendChild(depColHtml)
                    row.appendChild(depCol);
                    row.setAttribute('data-department', `${employees[i].department}`)

                    let locationCol = document.createElement("td");
                    locationCol.className = 'd-none d-xl-table-cell'
                    let locationColHtml = document.createTextNode(`${employees[i].location} `)
                    locationCol.appendChild(locationColHtml)
                    row.appendChild(locationCol);
                    row.setAttribute('data-location', `${employees[i].location}`)

                    let jobTitleCol = document.createElement("td");
                    jobTitleCol.className = 'd-none d-xl-table-cell'
                    let jobTitleColHtml = document.createTextNode(`${employees[i].jobTitle} `)
                    jobTitleCol.appendChild(jobTitleColHtml)
                    row.appendChild(jobTitleCol);
                    row.setAttribute('data-jobtitle', `${employees[i].jobTitle}`)

                    let emailCol = document.createElement("td");
                    emailCol.className = 'd-none d-xl-table-cell'
                    let emailColHtml = document.createTextNode(`${employees[i].email} `)
                    emailCol.appendChild(emailColHtml)
                    row.appendChild(emailCol);
                    row.setAttribute('data-email', `${employees[i].email}`)

                    select.appendChild(row);
                }
            }

        }
    }).error(function (e) {
        console.log(e)
    });
}






















//Functions to change database ----------------------------------------


//Update or Add department
function updateOrAddDepartment(name, depId, location) {

    let URL = "php/postUpdatedDepartment.php"

    //If global variable is set to 'add', change URL for when submitting
    if (GLOBAL_departmentAddUpdate === 'add') {
        URL = "php/postNewDepartment.php"
    }

    //Find location data in global variable from location id
    let foundLocation = GLOBAL_locations.find(loc => loc.name === location.value)
    let foundLocationId = foundLocation.id

    //Post new or updated department to database
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: 'json',
        data: {
            id: depId.value,
            name: name.value,
            locationID: foundLocationId
        },
        success: function (result) {
            if (result.status.code == "200") {

                //Reload database with the updated data
                loadDatabase()
                $('#modal').modal('hide');
            } else {
                console.log('Location already added')
                $('#depNameTaken').removeClass('d-none').addClass('d-block')
                departmentForm.classList.remove('was-validated')

            }
        }
    }).error(function (e) {
        console.log(e)
    });

}


//Delete department
function deleteDepartment(id) {
    $.ajax({
        url: `php/deleteDepartmentByID.php?id=${id}`,
        type: 'DELETE',
        success: function (result) {
            if (result.status.code == "200") {
                //Reload database with the updated data
                loadDatabase()
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}


//Update or Add location
function updateOrAddLocation(name, id) {

    let URL = "php/postUpdatedLocation.php"

    //If global variable is set to 'add', change URL for when submitting
    if (GLOBAL_locationAddUpdate === 'add') {
        URL = "php/postNewLocation.php"
    }

    //Post new or updated department to database
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: 'json',
        data: {
            id: id.value,
            name: name.value
        },
        success: function (result) {
            if (result.status.code == "200") {

                //Reload database with the updated data
                loadDatabase()
                $('#modal').modal('hide');
            } else {
                $('#locNameTaken').removeClass('d-none').addClass('d-block')
                locationForm.classList.remove('was-validated')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}


//Delete location
function deleteLocation(id, newId) {
    $.ajax({
        url: `php/deleteLocationByID.php?id=${id}&newId=${newId}`,
        type: 'DELETE',
        success: function (result) {
            if (result.status.code == "200") {

                //Reload database with the updated data
                loadDatabase()
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}



//Update or Add employee
function updateOrAddEmployee(first, last, id, department, jobTitle, email) {

    let URL = "php/postUpdatedEmployee.php"

    //If global variable is set to 'add', change URL for when submitting
    if (GLOBAL_employeeAddUpdate === 'add') {
        URL = "php/postNewEmployee.php"
    }

    //Find department data in global variable from location id
    let foundDepartment = GLOBAL_departments.find(dep => dep.name === department.value)
    let departmentID = foundDepartment.id

    //Post new or updated employee to database
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: 'json',
        data: {
            id: id.value,
            first: first.value,
            last: last.value,
            departmentID: departmentID,
            email: email.value,
            jobTitle: jobTitle.value
        },
        success: function (result) {
            console.log(result)
            if (result.status.code == "200") {

                //Update employee list only to stay on department page
                getEmployees(GLOBAL_chosenDepartment)
                $('#modal').modal('hide');
            } else {
                $('#emailTakenEmployee').removeClass('d-none').addClass('d-block')
                employeeForm.classList.remove('was-validated')
            }
        }
    }).error(function (e) {
        console.log(e)

    });
}


//Delete employee
function deleteEmployee(id) {
    $.ajax({
        url: `php/deleteEmployeeByID.php?id=${id}`,
        type: 'DELETE',
        success: function (result) {
            if (result.status.code == "200") {

                //Update employee list only to stay on department page
                getEmployees(GLOBAL_chosenDepartment)
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}




































//Event listeners ----------------------------------------

//Change page data for Home
$("#homeNav").click(function () {
    $('#companyDirectoryHome').css('display', 'flex')
    $('#companyDirectoryEmployees').css('display', 'none')
    $('#companyDirectoryDepartments').css('display', 'none')
    $('#companyDirectoryLocations').css('display', 'none')
    $('#stats').css('display', 'none')
    $('#pageSubTitle').html(`Home`)
    $('#pageDepartment').css('display', 'none')
    $('#pageDepartment').html('- All')

    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }

    loadDatabase()
})

//Change page data for Employees
$("#employeesNav").click(function () {

    $('#companyDirectoryHome').css('display', 'none')
    $('#companyDirectoryEmployees').css('display', 'block')
    $('#companyDirectoryDepartments').css('display', 'none')
    $('#companyDirectoryLocations').css('display', 'none')

    $('#pageTitle').html(`Company Directory`)
    $('#pageSubTitle').html(`Employees`)
    $('#pageDepartment').css('display', 'inline-block')

    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }

    // Update chosen department with ID and reload employees
    getEmployees(0)
})

//Change page data for Departments
$("#departmentsNav").click(function () {

    let totalDepartments = GLOBAL_departments.length

    $('#stat2').css('display', 'none')
    $('#total').html(totalDepartments);
    $('#totalWhat').html('Departments');
    $('#newest').html('');
    $('#newestLast').html('');

    $('#companyDirectoryHome').css('display', 'none')
    $('#companyDirectoryEmployees').css('display', 'none')
    $('#companyDirectoryDepartments').css('display', 'block')
    $('#companyDirectoryLocations').css('display', 'none')

    $('#pageTitle').html(`Company Directory`)
    $('#pageSubTitle').html(`Departments`)
    $('#pageDepartment').css('display', 'none')

    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }
})

//Change page data for Locations
$("#locationsNav").click(function () {

    let totalLocations = GLOBAL_locations.length

    $('#stat2').css('display', 'none')
    $('#total').html(totalLocations);
    $('#totalWhat').html('Locations');
    $('#newest').html('');
    $('#newestLast').html('');

    $('#companyDirectoryHome').css('display', 'none')
    $('#companyDirectoryEmployees').css('display', 'none')
    $('#companyDirectoryDepartments').css('display', 'none')
    $('#companyDirectoryLocations').css('display', 'block')

    $('#pageTitle').html(`Company Directory`)
    $('#pageSubTitle').html(`Locations`)
    $('#pageDepartment').css('display', 'none')

    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }
})





//Change form data to add a new employee
$("#addNewEmployee, #addNewEmployeeSC").click(function () {
    $('#locationForm').css('display', 'none')
    $('#employeeForm').css('display', 'block')
    $('#departmentForm').css('display', 'none')
    $('#deleteLocationForm').css('display', 'none')

    $('#emailTakenEmployee').removeClass('d-block').addClass('d-none')
    $('#formTitle').html('Add New Employee');
    $('#submitEmployee').html('Add');
    $('#deleteEmployee').css('display', 'none');
    employeeForm.elements['firstName'].value = ''
    employeeForm.elements['lastName'].value = ''
    employeeForm.elements['email'].value = ''
    employeeForm.elements['jobTitle'].value = ''
    employeeForm.elements['departmentOptions'].value = `${$('#pageDepartment').html()}`
    employeeForm.elements['id'].value = GLOBAL_hightestEmployeeID + 1

    employeeForm.classList.remove('was-validated')
    GLOBAL_employeeAddUpdate = 'add'
})


//Delete employee from current form data
$("#deleteEmployee").click(function () {
    let deletedId = employeeForm.elements['id'].value
    $('#modal').modal('hide');
    deleteEmployee(deletedId)
})



//Change form data to add a new department
$("#addNewDepartment, #addNewDepartmentSC").click(function () {
    $('#locationForm').css('display', 'none')
    $('#employeeForm').css('display', 'none')
    $('#departmentForm').css('display', 'block')
    $('#deleteLocationForm').css('display', 'none')

    $('#depNameTaken').removeClass('d-block').addClass('d-none')
    $('#formTitle').html('Add New Department');
    $('#submitDepartment').html('Add');
    $('#deleteDepartment').css('display', 'none');
    departmentForm.elements['depName'].value = ''
    departmentForm.elements['depId'].value = GLOBAL_hightestDepartmentID + 1

    employeeForm.classList.remove('was-validated')
    GLOBAL_departmentAddUpdate = 'add'
})


//Delete department from current form data
$("#deleteDepartment").click(function () {
    let deletedId = departmentForm.elements['depId'].value
    $('#modal').modal('hide');
    deleteDepartment(deletedId)
})


//Change form data to add a new location
$("#addNewLocation, #addNewLocationSC").click(function () {
    $('#locationForm').css('display', 'block')
    $('#employeeForm').css('display', 'none')
    $('#departmentForm').css('display', 'none')
    $('#deleteLocationForm').css('display', 'none')

    $('#locDeleteInputs').css('display', 'none')
    $('#noMoveSelected').removeClass('d-block').addClass('d-none')

    $('#emailTakenLocation').removeClass('d-block').addClass('d-none')
    $('#formTitle').html('Add New Location');
    $('#submitLocation').html('Add');
    $('#deleteLocation').css('display', 'none');
    locationForm.elements['locName'].value = ''
    locationForm.elements['locId'].value = GLOBAL_hightestLocationID + 1

    locationForm.classList.remove('was-validated')
    GLOBAL_locationAddUpdate = 'add'
})


//Delete location from current form data
$("#deleteLocation").click(function () {
    let deletedId = locationForm.elements['locId'].value
    let newDepId = locationForm.elements['locLocationsMoveId'].value
    if (newDepId !== '') {
        $('#modal').modal('hide');
        deleteLocation(deletedId, newDepId)
    } else {
        $('#noMoveSelected').removeClass('d-none').addClass('d-block')
    }
})





//Change form data to update an employee
$('body').on('click', ".employeeRow", function () {

    //If not a header
    if ($(this).children('th').first().length === 0) {

        let id = $(this).data('id')
        let firstName = $(this).data('firstname')
        let lastName = $(this).data('lastname')
        let jobTitle = $(this).data('jobtitle')
        let department = $(this).data('department')
        let email = $(this).data('email')

        $('#emailTakenEmployee').removeClass('d-block').addClass('d-none')


        $('#employeeForm').css('display', 'block')
        $('#locationForm').css('display', 'none')
        $('#departmentForm').css('display', 'none')

        $('#formTitle').html('Manage Employee');
        $('#submitEmployee').html('Update');
        $('#deleteEmployee').css('display', 'inline-block');
        employeeForm.elements['firstName'].value = firstName
        employeeForm.elements['lastName'].value = lastName
        employeeForm.elements['email'].value = email
        employeeForm.elements['jobTitle'].value = jobTitle
        employeeForm.elements['id'].value = id
        employeeForm.elements['departmentOptions'].value = department

        employeeForm.classList.remove('was-validated')
        GLOBAL_employeeAddUpdate = 'update'
    }
})



//Change form data to update a department
$('body').on('click', ".departmentRow", function () {

    //If not a header
    if ($(this).children('th').first().length === 0) {

        let id = $(this).data('id')
        let location = $(this).data('location')
        let name = $(this).data('dep')


        $('#employeeForm').css('display', 'none')
        $('#locationForm').css('display', 'none')
        $('#departmentForm').css('display', 'block')

        $('#depNameTaken').removeClass('d-block').addClass('d-none')
        $('#formTitle').html('Manage Department');
        $('#submitDepartment').html('Update');
        $('#deleteDepartment').css('display', 'inline-block');
        departmentForm.elements['depId'].value = id
        departmentForm.elements['depLocations'].value = location
        departmentForm.elements['depName'].value = name

        departmentForm.classList.remove('was-validated')
        GLOBAL_departmentAddUpdate = 'update'
    }
})


//Change form data to update a location
$('body').on('click', ".locationRow", function () {

    //If not a header
    if ($(this).children('th').first().length === 0) {

        let id = $(this).data('id')
        let location = $(this).data('name')

        $("#locLocationsMove option").each(function () {
            if ($(this).val() === location) {
                $(this).hide()
            } else {
                $(this).show()
            }
        });

        $('#employeeForm').css('display', 'none')
        $('#locationForm').css('display', 'block')
        $('#departmentForm').css('display', 'none')

        $('#locDeleteInputs').css('display', 'block')
        $('#noMoveSelected').removeClass('d-block').addClass('d-none')

        $('#locNameTaken').removeClass('d-block').addClass('d-none')
        $('#formTitle').html('Manage Location');
        $('#submitLocation').html('Update');
        $('#deleteLocation').css('display', 'inline-block');
        locationForm.elements['locId'].value = id
        locationForm.elements['locName'].value = location
        locationForm.elements['locLocationsMove'].value = ''
        locationForm.elements['locLocationsMoveId'].value = ''

        locationForm.classList.remove('was-validated')
        GLOBAL_locationAddUpdate = 'update'
    }
})





//When the employee form is submitted
employeeForm.addEventListener('submit', e => {
    if (!employeeForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()

        //Send form data to crud function
        let formData = $('#employeeForm').serializeArray()
        updateOrAddEmployee(formData[0], formData[1], formData[2], formData[3], formData[4], formData[5])
    }
    employeeForm.classList.add('was-validated')
})


//When the department form is submitted
departmentForm.addEventListener('submit', e => {
    if (!departmentForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()

        //Send form data to crud function
        let formData = $('#departmentForm').serializeArray()
        updateOrAddDepartment(formData[0], formData[1], formData[2])
    }
    departmentForm.classList.add('was-validated')
})

//When the location form is submitted
locationForm.addEventListener('submit', e => {

    let formData = $('#locationForm').serializeArray()
    console.log(formData)


    if (!locationForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()

        //Send form data to crud function
        updateOrAddLocation(formData[0], formData[1])
    }
    locationForm.classList.add('was-validated')
})









//Function for typing new location name for add location
$("#locName").keyup(function () {
    let name = $("#locName")[0].value
    let id = $("#locId")[0].value
    let foundLocation = GLOBAL_locations.find(loc => loc.id === id)

    $("#locLocationsMove option").each(function () {
        if ($(this).val() === name) {
            $(this).hide()
        } else {
            $(this).show()
        }
    });

    let int = parseInt(foundLocation.id)
    $("#locNameId")[0].value = int
})


//Function for typing in employee search
$("#searchEmployee").keyup(function () {
    let search = $("#searchEmployee")[0].value
    getEmployees(GLOBAL_chosenDepartment, false, search)
})


//Function for selecting location to move departments to
$("#locLocationsMove").change(function () {
    let name = $("#locLocationsMove")[0].value

    let foundLocation = GLOBAL_locations.find(loc => loc.name === name)
    let int = parseInt(foundLocation.id)
    $("#locLocationsMoveId")[0].value = int
})


//Function to apply department filter
$("#departmentsFilter").change(function () {
    let name = $("#departmentsFilter")[0].value

    if (name === 'All') {
        GLOBAL_chosenDepartment = 0
        $('#pageDepartment').html(`- All`)
        $('#addDepartmentType').html(`All`)
        $('#totalWhat').html(`All Employees`);

    } else {
        department = GLOBAL_departments.find(dep => dep.name === name)
        GLOBAL_chosenDepartment = department.id
        $('#pageDepartment').html(`- ${department.name}`)
        $('#addDepartmentType').html(`${department.name}`)
    }

    getEmployees(GLOBAL_chosenDepartment)
})


//Sort table data
$("th").click(function () {

    $("th span").html('')
    $("th").css('font-weight', 'normal')

    let column = $(this).data('column')
    let order = $(this).data('order')
    let id = $(this).attr('id')


    if ($(this).data('table') === 'employees') {
        $(`#${id}`).css('font-weight', '700')
        console.log('employees')
        if (order === 'desc') {
            $(`#${id} span`).html(' ⇧')
            $(this).data('order', 'asc')
            getEmployees(GLOBAL_chosenDepartment, { column, order })
        } else {
            $(`#${id} span`).html(' ⇩')
            $(this).data('order', 'desc')
            getEmployees(GLOBAL_chosenDepartment, { column, order })
        }
    }

    if ($(this).data('table') === 'departments') {
        $(`#${id}`).css('font-weight', '700')
        console.log('departments')
        if (order === 'desc') {
            $(`#${id} span`).html(' ⇧')
            $(this).data('order', 'asc')
            loadDatabase({ column, order }, false)
        } else {
            $(`#${id} span`).html(' ⇩')
            $(this).data('order', 'desc')
            loadDatabase({ column, order }, false)
        }
    }

    if ($(this).data('table') === 'locations') {
        $(`#${id}`).css('font-weight', '700')
        console.log('locations')
        if (order === 'desc') {
            $(`#${id} span`).html(' ⇧')
            $(this).data('order', 'asc')
            loadDatabase(false, { column, order })
        } else {
            $(`#${id} span`).html(' ⇩')
            $(this).data('order', 'desc')
            loadDatabase(false, { column, order })
        }
    }
})



//Function to change nav bar open close for smaller devices
let navOpen = false;
$('body').on('click', "#navToggle", function () {
    console.log(navOpen)
    if (!navOpen) {
        $('#sidePanel').animate({ 'left': '0' })
        navOpen = true;
    } else {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }
})
$('body').on('click', "#closeNav", function () {
    $('#sidePanel').animate({ 'left': '-580px' })
    navOpen = false;
})
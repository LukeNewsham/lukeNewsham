// GLOBAL VARIABLES -----------------------------------------



$(window).load(function() {
    $('#alertModal').modal('show');
});




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

let addEmployeeForm = document.getElementById('addEmployeeForm')
let updateEmployeeForm = document.getElementById('updateEmployeeForm')
let deleteEmployeeForm = document.getElementById('deleteEmployeeForm')


let addDepartmentForm = document.getElementById('addDepartmentForm')
let updateDepartmentForm = document.getElementById('updateDepartmentForm')
let deleteDepartmentForm = document.getElementById('deleteDepartmentForm')

let addLocationForm = document.getElementById('addLocationForm')
let updateLocationForm = document.getElementById('updateLocationForm')
let deleteLocationForm = document.getElementById('deleteLocationForm')


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
                let updateDepartmentOptions = document.getElementById("updateEmployeeDepartmentOptions")
                updateDepartmentOptions.innerHTML = ''
                let addDepartmentOptions = document.getElementById("addEmployeeDepartmentOptions")
                addDepartmentOptions.innerHTML = ''
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
                        let updateOption = document.createElement('option')
                        let updateOptionHtml = document.createTextNode(`${departments[i].name}`)
                        updateOption.appendChild(updateOptionHtml)
                        updateDepartmentOptions.appendChild(updateOption)

                        // Add department option to departments select in from
                        let addOption = document.createElement('option')
                        let addOptionHtml = document.createTextNode(`${departments[i].name}`)
                        addOption.appendChild(addOptionHtml)
                        addDepartmentOptions.appendChild(addOption)

                        // Add department row and column data to departments table
                        let row = document.createElement("tr");
                        row.className = 'departmentRow'
                        row.setAttribute('data-bs-toggle', 'modal')
                        row.setAttribute('data-bs-target', '#updateDepartmentModal')


                        let idCol = document.createElement("td");
                        idCol.classList = "visually-hidden"
                        let idColHtml = document.createTextNode(`${departments[i].id}`)
                        idCol.appendChild(idColHtml)
                        row.appendChild(idCol);
                        row.setAttribute('data-id', `${departments[i].id}`)

                        let depCol = document.createElement("td");
                        let depColHtml = document.createTextNode(`${departments[i].name}`)
                        depCol.appendChild(depColHtml)
                        row.appendChild(depCol);

                        let locationCol = document.createElement("td");
                        locationCol.className = 'd-none d-md-table-cell'
                        let locationColHtml = document.createTextNode(`${departments[i].location}`)
                        locationCol.appendChild(locationColHtml)
                        row.appendChild(locationCol);

                        let employeesCol = document.createElement("td");
                        let employeesColHtml = document.createTextNode(`${employeesInDep.length}`)
                        employeesCol.appendChild(employeesColHtml)
                        row.appendChild(employeesCol);

                        let updateCol = document.createElement("td");
                        updateCol.classList = 'updateCol'
                        updateCol.setAttribute('data-bs-toggle', 'modal')
                        updateCol.setAttribute('data-bs-target', '#updateDepartmentModal')
                        updateCol.setAttribute('data-id', `${departments[i].id}`)
                        let updateColSpan = document.createElement("span");
                        let updateColSpanHtml = document.createTextNode(`✏️`)
                        updateColSpan.appendChild(updateColSpanHtml)
                        updateCol.appendChild(updateColSpan)
                        row.appendChild(updateCol);

                        let deleteCol = document.createElement("td");
                        deleteCol.classList = 'deleteCol deleteDepartmentRow'
                        deleteCol.setAttribute('data-bs-toggle', 'modal')
                        deleteCol.setAttribute('data-bs-target', '#deleteDepartmentModal')
                        deleteCol.setAttribute('data-id', `${departments[i].id}`)
                        deleteCol.setAttribute('data-employees', `${employeesInDep.length}`)
                        let deleteColSpan = document.createElement("span");
                        let deleteColSpanHtml = document.createTextNode(`╳`)
                        deleteColSpan.appendChild(deleteColSpanHtml)
                        deleteCol.appendChild(deleteColSpan)
                        row.appendChild(deleteCol);
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

                let updateLocationOptions = document.getElementById("updateDepartmentLocations")
                updateLocationOptions.innerHTML = ''

                let addLocationOptions = document.getElementById("addDepartmentLocations")
                addLocationOptions.innerHTML = ''

                let select = document.getElementById("locationsList")
                select.innerHTML = ''




                //For all locations
                for (i = 0; i < locations.length; i++) {

                    let departmentsInLocNames = []

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
                    row.setAttribute('data-bs-target', '#updateLocationModal')

                    let idCol = document.createElement("td");
                    idCol.classList = "visually-hidden"
                    let idColHtml = document.createTextNode(`${locations[i].id}`)
                    idCol.appendChild(idColHtml)
                    row.appendChild(idCol);
                    row.setAttribute('data-id', `${locations[i].id}`)

                    let nameCol = document.createElement("td");
                    let nameColHtml = document.createTextNode(`${locations[i].name}`)
                    nameCol.appendChild(nameColHtml)
                    row.appendChild(nameCol);

                    let departmentsCol = document.createElement("td");
                    let departmentsColHtml = document.createTextNode(`(${departmentsInLoc.length}) ${departmentsInLocNames}`)
                    departmentsCol.appendChild(departmentsColHtml)
                    row.appendChild(departmentsCol);

                    let employeesCol = document.createElement("td");
                    let employeesColHtml = document.createTextNode(`${employeesInLoc.length}`)
                    employeesCol.appendChild(employeesColHtml)
                    row.appendChild(employeesCol);

                    let updateCol = document.createElement("td");
                    updateCol.classList = 'updateCol'
                    updateCol.setAttribute('data-bs-toggle', 'modal')
                    updateCol.setAttribute('data-bs-target', '#updateLocationModal')
                    updateCol.setAttribute('data-id', `${locations[i].id}`)
                    let updateColSpan = document.createElement("span");
                    let updateColSpanHtml = document.createTextNode(`✏️`)
                    updateColSpan.appendChild(updateColSpanHtml)
                    updateCol.appendChild(updateColSpan)
                    row.appendChild(updateCol);

                    let deleteCol = document.createElement("td");
                    deleteCol.classList = 'deleteCol deleteLocationRow'
                    deleteCol.setAttribute('data-bs-toggle', 'modal')
                    deleteCol.setAttribute('data-bs-target', '#deleteLocationModal')
                    deleteCol.setAttribute('data-id', `${locations[i].id}`)
                    deleteCol.setAttribute('data-departments', `${departmentsInLoc.length}`)
                    let deleteColSpan = document.createElement("span");
                    let deleteColSpanHtml = document.createTextNode(`╳`)
                    deleteColSpan.appendChild(deleteColSpanHtml)
                    deleteCol.appendChild(deleteColSpan)
                    row.appendChild(deleteCol);


                    select.appendChild(row);

                    //Add location to location select in department form                    
                    let addOption = document.createElement('option')
                    let addOptionHtml = document.createTextNode(`${locations[i].name}`)
                    addOption.appendChild(addOptionHtml)
                    addLocationOptions.appendChild(addOption)

                    //Add location to location select in department form                    
                    let updateOption = document.createElement('option')
                    let updateOptionHtml = document.createTextNode(`${locations[i].name}`)
                    updateOption.appendChild(updateOptionHtml)
                    updateLocationOptions.appendChild(updateOption)

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
                    row.setAttribute('data-bs-target', '#updateEmployeeModal')
                    row.className = 'employeeRow'

                    let idCol = document.createElement("td");
                    idCol.className = 'd-none d-md-table-cell visually-hidden'
                    let idColHtml = document.createTextNode(`${employees[i].id}`)
                    idCol.appendChild(idColHtml)
                    row.appendChild(idCol);
                    row.setAttribute('data-id', `${employees[i].id}`)


                    let name = document.createElement("td");

                    let lastNameCol = document.createElement("span");
                    let lastNameColHtml = document.createTextNode(`${employees[i].lastName}, `)
                    if (search && employees[i].lastName.toLowerCase().startsWith(search.toLowerCase())) {
                        lastNameCol.className = 'highlighted'
                    }
                    lastNameCol.appendChild(lastNameColHtml)
                    name.appendChild(lastNameCol)

                    let firstNameCol = document.createElement("span");
                    let firstNameColHtml = document.createTextNode(`${employees[i].firstName}`)
                    if (search && employees[i].firstName.toLowerCase().startsWith(search.toLowerCase())) {
                        firstNameCol.className = 'highlighted'
                    }
                    firstNameCol.appendChild(firstNameColHtml)
                    name.appendChild(firstNameCol)

                    row.appendChild(name);

                    let depCol = document.createElement("td");
                    depCol.className = 'd-none d-md-table-cell'
                    let depColHtml = document.createTextNode(`${employees[i].department} `)
                    depCol.appendChild(depColHtml)
                    row.appendChild(depCol);

                    let locationCol = document.createElement("td");
                    locationCol.className = 'd-none d-xxl-table-cell'
                    let locationColHtml = document.createTextNode(`${employees[i].location} `)
                    locationCol.appendChild(locationColHtml)
                    row.appendChild(locationCol);

                    let jobTitleCol = document.createElement("td");
                    jobTitleCol.className = 'd-none d-xxl-table-cell'
                    let jobTitleColHtml = document.createTextNode(`${employees[i].jobTitle} `)
                    jobTitleCol.appendChild(jobTitleColHtml)
                    row.appendChild(jobTitleCol);

                    let emailCol = document.createElement("td");
                    emailCol.className = 'd-none d-xl-table-cell'
                    let emailColHtml = document.createTextNode(`${employees[i].email} `)
                    emailCol.appendChild(emailColHtml)
                    row.appendChild(emailCol);

                    let updateCol = document.createElement("td");
                    updateCol.classList = 'updateCol'
                    updateCol.setAttribute('data-bs-toggle', 'modal')
                    updateCol.setAttribute('data-bs-target', '#updateEmployeeModal')
                    updateCol.setAttribute('data-id', `${employees[i].id}`)
                    let updateColSpan = document.createElement("span");
                    let updateColSpanHtml = document.createTextNode(`✏️`)
                    updateColSpan.appendChild(updateColSpanHtml)
                    updateCol.appendChild(updateColSpan)
                    row.appendChild(updateCol);

                    let deleteCol = document.createElement("td");
                    deleteCol.classList = 'deleteCol deleteEmployeeRow'
                    deleteCol.setAttribute('data-bs-toggle', 'modal')
                    deleteCol.setAttribute('data-bs-target', '#deleteEmployeeModal')
                    deleteCol.setAttribute('data-id', `${employees[i].id}`)
                    let deleteColSpan = document.createElement("span");
                    let deleteColSpanHtml = document.createTextNode(`╳`)
                    deleteColSpan.appendChild(deleteColSpanHtml)
                    deleteCol.appendChild(deleteColSpan)
                    row.appendChild(deleteCol);



                    select.appendChild(row);
                }
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}






















//Functions to change database -----------------------------------------------------------------------------------------------------

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
            if (result.status.code == "200") {
                //Update employee list only to stay on department page
                getEmployees(GLOBAL_chosenDepartment)
                $('#addEmployeeModal, #updateEmployeeModal').modal('hide');
            } else {
                $('#errorAddEmployeeEmailTaken').removeClass('d-none').addClass('d-block')
                addEmployeeForm.classList.remove('was-validated')
                $('#errorUpdateEmployeeEmailTaken').removeClass('d-none').addClass('d-block')
                updateEmployeeForm.classList.remove('was-validated')
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
                $('#deleteEmployeeModal').modal('hide');
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}



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
                $('#addDepartmentModal, #updateDepartmentModal').modal('hide');
            } else {
                $('#errorAddDepartmentNameTaken').removeClass('d-none').addClass('d-block')
                addDepartmentForm.classList.remove('was-validated')
                $('#errorUpdateDepartmentNameTaken').removeClass('d-none').addClass('d-block')
                updateDepartmentForm.classList.remove('was-validated')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}




//Delete department
function deleteDepartment(id, newId) {

    //Get Employees
    $.ajax({
        dataType: "json",
        url: `php/checkDepartmentEmployeeCount.php?id=${id}`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {
                $('#deleteDepartment').removeClass('d-none').addClass('d-block')
                $.ajax({
                    url: `php/deleteDepartmentByID.php?id=${id}&newId=${newId}`,
                    type: 'DELETE',
                    success: function (result) {
                        if (result.status.code == "200") {
                            //Reload database with the updated data
                            $('#deleteDepartmentModal').modal('hide');
                            loadDatabase()
                        } else {
                            $('#errorDeleteDepartment').removeClass('d-none').addClass('d-block')
                            deleteDepartmentForm.classList.remove('was-validated')
                        }
                    }
                }).error(function (e) {
                    console.log(e)
                });
            } else {
                $('#deleteDepartment').removeClass('d-block').addClass('d-none')
                $('#errorDeleteDepartment').removeClass('d-none').addClass('d-block')
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
                $('#addLocationModal, #updateLocationModal').modal('hide');
            } else {
                $('#errorAddLocationNameTaken').removeClass('d-none').addClass('d-block')
                addLocationForm.classList.remove('was-validated')
                $('#errorUpdateLocationNameTaken').removeClass('d-none').addClass('d-block')
                updateLocationForm.classList.remove('was-validated')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}






//Delete location
function deleteLocation(id, newId) {
    $('#errorDeleteLocation').removeClass('d-block').addClass('d-none')
    //Get Employees
    $.ajax({
        dataType: "json",
        url: `php/checkLocationDepartmentCount.php?id=${id}`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {
                $('#deleteLocation').removeClass('d-none').addClass('d-block')

                $.ajax({
                    url: `php/deleteLocationByID.php?id=${id}&newId=${newId}`,
                    type: 'DELETE',
                    success: function (result) {
                        if (result.status.code == "200") {
                            //Reload database with the updated data
                            loadDatabase()
                            $('#deleteLocationModal').modal('hide');
                        } else {
                            $('#errorDeleteLocation').removeClass('d-none').addClass('d-block')
                            deleteLocationForm.classList.remove('was-validated')
                        }
                    }
                }).error(function (e) {
                    console.log(e)
                });
            } else {
                $('#deleteLocation').removeClass('d-block').addClass('d-none')
                $('#errorDeleteLocation').removeClass('d-none').addClass('d-block')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
}





























//Nav Bar Event listeners -----------------------------------------------------------------------------------------------------


//Function to change nav bar open close for smaller devices
let navOpen = false;
$('body').on('click', "#navToggle", function () {
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

//Change page data for Home
$("#statsNav").click(function () {
    loadDatabase()
    $('#companyDirectoryStats').css('display', 'flex')
    $('#companyDirectoryEmployees').css('display', 'none')
    $('#companyDirectoryDepartments').css('display', 'none')
    $('#companyDirectoryLocations').css('display', 'none')
    $('#stats').css('display', 'none')
    $('#pageSubTitle').html(`Stats`)
    $('#pageDepartment').css('display', 'none')
    $('#pageDepartment').html('- All')
    $('#totalWhat').html('Employees');
    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }
})

//Change page data for Employees
$("#employeesNav").click(function () {
    loadDatabase()
    $('#companyDirectoryStats').css('display', 'none')
    $('#companyDirectoryEmployees').css('display', 'block')
    $('#companyDirectoryDepartments').css('display', 'none')
    $('#companyDirectoryLocations').css('display', 'none')
    $('#pageTitle').html(`Company Directory`)
    $('#pageSubTitle').html(`Employees`)
    $('#pageDepartment').css('display', 'inline-block')
    $('#totalWhat').html('Employees');
    if ($('#sidePanel').css("position") === "absolute") {
        navOpen = false;
        $('#sidePanel').animate({ 'left': '-580px' })
    }
})

//Change page data for Departments
$("#departmentsNav").click(function () {
    loadDatabase()
    let totalDepartments = GLOBAL_departments.length
    $('#stat2').css('display', 'none')
    $('#total').html(totalDepartments);
    $('#totalWhat').html('Departments');
    $('#newest').html('');
    $('#newestLast').html('');
    $('#companyDirectoryStats').css('display', 'none')
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
    loadDatabase()
    let totalLocations = GLOBAL_locations.length
    $('#stat2').css('display', 'none')
    $('#total').html(totalLocations);
    $('#totalWhat').html('Locations');
    $('#newest').html('');
    $('#newestLast').html('');
    $('#companyDirectoryStats').css('display', 'none')
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






















//Modal Event listeners -----------------------------------------------------------------------------------------------------



//Add a new employee
$('#addEmployeeModal').on('shown.bs.modal', function (e) {
    $('#errorAddEmployeeEmailTaken').removeClass('d-block').addClass('d-none')
    addEmployeeForm.classList.remove('was-validated')
    $('#addEmployeeFirstName').focus();
})

//Add a new department
$('#addDepartmentModal').on('shown.bs.modal', function (e) {
    $('#errorAddDepartmentNameTaken').removeClass('d-block').addClass('d-none')
    addDepartmentForm.classList.remove('was-validated')
    $('#addDepartmentName').focus();

})

//Add a new location
$('#addLocationModal').on('shown.bs.modal', function (e) {
    $('#errorAddLocationNameTaken').removeClass('d-block').addClass('d-none')
    addLocationForm.classList.remove('was-validated')
    $('#addLocationName').focus();
})


//Update employee
$('body').on('click', ".updateEmployeeRow, .employeeRow", function () {
    //If not a header
    if ($(this).children('th').first().length === 0) {
        let id = $(this).data('id')
        //Get Employee Data
        $.ajax({
            dataType: "json",
            url: `php/getPersonnelByID.php?id=${id}`,
            async: false,
            success: function (result) {
                updateEmployeeForm.elements['updateEmployeeId'].value = id
                updateEmployeeForm.elements['updateEmployeeFirstName'].value = result.data[1]
                updateEmployeeForm.elements['updateEmployeeLastName'].value = result.data[2]
                updateEmployeeForm.elements['updateEmployeeEmail'].value = result.data[3]
                updateEmployeeForm.elements['updateEmployeeJobTitle'].value = result.data[4]
                updateEmployeeForm.elements['updateEmployeeDepartmentOptions'].value = result.data[5]
            }
        }).error(function (e) {
            console.log(e)
        });
        $('#errorUpdateEmployeeEmailTaken').removeClass('d-block').addClass('d-none')
        updateEmployeeForm.classList.remove('was-validated')
    }
})
$('#updateEmployeeModal').on('shown.bs.modal', function (e) {
    $('#updateEmployeeFirstName').focus();
})

//Update Department
$('body').on('click', ".updateDepartmentRow, .departmentRow", function () {
    //If not a header
    if ($(this).children('th').first().length === 0) {
        let id = $(this).data('id')
        //Get Department Data
        $.ajax({
            dataType: "json",
            url: `php/getDepartmentByID.php?id=${id}`,
            async: false,
            success: function (result) {
                updateDepartmentForm.elements['updateDepartmentId'].value = id
                updateDepartmentForm.elements['updateDepartmentName'].value = result.data[1]
                updateDepartmentForm.elements['updateDepartmentLocations'].value = result.data[2]
            }
        }).error(function (e) {
            console.log(e)
        });
        $('#errorUpdateDepartmentNameTaken').removeClass('d-block').addClass('d-none')
        updateDepartmentForm.classList.remove('was-validated')
    }
})
$('#updateDepartmentModal').on('shown.bs.modal', function (e) {
    $('#updateDepartmentName').focus();
})

//Update location
$('body').on('click', ".updateLocationRow, .locationRow", function () {
    //If not a header
    if ($(this).children('th').first().length === 0) {
        let id = $(this).data('id')
        //Get Location Data
        $.ajax({
            dataType: "json",
            url: `php/getLocationByID.php?id=${id}`,
            async: false,
            success: function (result) {
                updateLocationForm.elements['updateLocationId'].value = id
                updateLocationForm.elements['updateLocationName'].value = result.data[1]
            }
        }).error(function (e) {
            console.log(e)
        });
        $('#errorUpdateLocationNameTaken').removeClass('d-block').addClass('d-none')
        updateLocationForm.classList.remove('was-validated')
    }
})
$('#updateLocationModal').on('shown.bs.modal', function (e) {
    $('#updateLocationName').focus();
})




//Delete Employee
$('body').on('click', ".deleteEmployeeRow", function () {
    let id = $(this).data('id')
    //Get Employee Data
    $.ajax({
        dataType: "json",
        url: `php/getPersonnelByID.php?id=${id}`,
        async: false,
        success: function (result) {
            console.log(`${result.data[1]}`)
            $('#deleteEmployeeFirstName').html(`${result.data[1]}`)
            $('#deleteEmployeeLastName').html(`${result.data[2]}`)
            deleteEmployeeForm.elements['deleteEmployeeId'].value = id
        }
    }).error(function (e) {
        console.log(e)
    });
})


//Delete Department
$('body').on('click', ".deleteDepartmentRow", function () {
    let id = $(this).data('id')

    //Get Employees
    $.ajax({
        dataType: "json",
        url: `php/checkDepartmentEmployeeCount.php?id=${id}`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {
                $('#deleteDepartment').removeClass('d-none').addClass('d-block')
                $('#errorDeleteDepartment').removeClass('d-block').addClass('d-none')
                $('#deleteDepartmentWarning').removeClass('d-none').addClass('d-block')
            } else {
                $('#deleteDepartment').removeClass('d-block').addClass('d-none')
                $('#errorDeleteDepartment').removeClass('d-none').addClass('d-block')
                $('#deleteDepartmentWarning').removeClass('d-block').addClass('d-none')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
    //Get Department Data
    $.ajax({
        dataType: "json",
        url: `php/getDepartmentByID.php?id=${id}`,
        async: false,
        success: function (result) {
            $('#deleteDepartmentName').html(`${result.data[1]}`)
            deleteDepartmentForm.elements['deleteDepartmentId'].value = id
        }
    }).error(function (e) {
        console.log(e)
    });
})



//Delete Location
$('body').on('click', ".deleteLocationRow", function () {
    let id = $(this).data('id')
    $('#errorDeleteLocation').removeClass('d-block').addClass('d-none')
    //Get departments
    $.ajax({
        dataType: "json",
        url: `php/checkLocationDepartmentCount.php?id=${id}`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {
                $('#deleteLocation').removeClass('d-none').addClass('d-block')
                $('#errorDeleteLocation').removeClass('d-block').addClass('d-none')
                $('#deleteLocationWarning').removeClass('d-none').addClass('d-block')
            } else {
                $('#deleteLocation').removeClass('d-block').addClass('d-none')
                $('#errorDeleteLocation').removeClass('d-none').addClass('d-block')
                $('#deleteLocationWarning').removeClass('d-block').addClass('d-none')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
    //Get Location Data
    $.ajax({
        dataType: "json",
        url: `php/getLocationByID.php?id=${id}`,
        async: false,
        success: function (result) {
            $('#deleteLocationName').html(`${result.data[1]}`)
            deleteLocationForm.elements['deleteLocationId'].value = id
        }
    }).error(function (e) {
        console.log(e)
    });
})




















// Form submits -----------------------------------------------------------------------------------------------------


addEmployeeForm.addEventListener('submit', e => {
    GLOBAL_employeeAddUpdate = 'add'
    if (!addEmployeeForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        //Send form data to crud function
        let formData = $('#addEmployeeForm').serializeArray()
        updateOrAddEmployee(formData[0], formData[1], formData[2], formData[3], formData[4], formData[5])
    }
    addEmployeeForm.classList.add('was-validated')
})


updateEmployeeForm.addEventListener('submit', e => {
    GLOBAL_employeeAddUpdate = 'update'
    if (!updateEmployeeForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('#updateEmployeeForm').serializeArray()
        updateOrAddEmployee(formData[0], formData[1], formData[2], formData[3], formData[4], formData[5])
    }
    updateEmployeeForm.classList.add('was-validated')
})


deleteEmployeeForm.addEventListener('submit', e => {
    e.preventDefault()
    let deletedId = deleteEmployeeForm.elements['deleteEmployeeId'].value
    deleteEmployee(deletedId)
})



addDepartmentForm.addEventListener('submit', e => {
    GLOBAL_departmentAddUpdate = 'add'
    if (!addDepartmentForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('#addDepartmentForm').serializeArray()
        updateOrAddDepartment(formData[0], formData[1], formData[2])
    }
    addDepartmentForm.classList.add('was-validated')
})


updateDepartmentForm.addEventListener('submit', e => {
    GLOBAL_departmentAddUpdate = 'update'
    if (!updateDepartmentForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('#updateDepartmentForm').serializeArray()
        updateOrAddDepartment(formData[0], formData[1], formData[2])
    }
    updateDepartmentForm.classList.add('was-validated')
})

deleteDepartmentForm.addEventListener('submit', e => {
    e.preventDefault()
    let deletedId = deleteDepartmentForm.elements['deleteDepartmentId'].value
    deleteDepartment(deletedId)
})


addLocationForm.addEventListener('submit', e => {
    GLOBAL_locationAddUpdate = 'add'
    if (!addLocationForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('#addLocationForm').serializeArray()
        updateOrAddLocation(formData[0], formData[1])
    }
    addLocationForm.classList.add('was-validated')
})

updateLocationForm.addEventListener('submit', e => {
    GLOBAL_locationAddUpdate = 'update'
    if (!updateLocationForm.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('#updateLocationForm').serializeArray()
        updateOrAddLocation(formData[0], formData[1])
    }
    updateLocationForm.classList.add('was-validated')
})

deleteLocationForm.addEventListener('submit', e => {
    e.preventDefault()
    let deletedId = deleteLocationForm.elements['deleteLocationId'].value
    deleteLocation(deletedId)
})
















//Input event listeners -----------------------------------------------------------------------------------------------------

//Function to add email error while typing if taken
$("#addEmployeeEmail").keyup(function () {
    let email = $("#addEmployeeEmail")[0].value
    let id = $("#addEmployeeId")[0].value
    addEmployeeForm.classList.remove('was-validated')
    $('#addEmployeeEmail').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkEmail.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            email: email
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorAddEmployeeEmailTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorAddEmployeeEmailTaken').removeClass('d-none').addClass('d-block')
                $('#addEmployeeEmail').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
})

//Function to update email error while typing if taken
$("#updateEmployeeEmail").keyup(function () {
    let email = $("#updateEmployeeEmail")[0].value
    let id = $("#updateEmployeeId")[0].value
    addEmployeeForm.classList.remove('was-validated')
    $('#updateEmployeeEmail').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkEmail.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            email: email
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorUpdateEmployeeEmailTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorUpdateEmployeeEmailTaken').removeClass('d-none').addClass('d-block')
                $('#updateEmployeeEmail').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
})

//Function to add name error while typing if taken
$("#addDepartmentName").keyup(function () {
    let name = $("#addDepartmentName")[0].value
    let id = $("#addDepartmentId")[0].value
    addEmployeeForm.classList.remove('was-validated')
    $('#addDepartmentName').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkDepartmentName.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            name: name
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorAddDepartmentNameTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorAddDepartmentNameTaken').removeClass('d-none').addClass('d-block')
                $('#addDepartmentName').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
})

//Function to add name error while typing if taken
$("#updateDepartmentName").keyup(function () {
    let name = $("#updateDepartmentName")[0].value
    let id = $("#updateDepartmentId")[0].value
    updateEmployeeForm.classList.remove('was-validated')
    $('#updateDepartmentName').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkDepartmentName.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            name: name
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorUpdateDepartmentNameTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorUpdateDepartmentNameTaken').removeClass('d-none').addClass('d-block')
                $('#updateDepartmentName').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
})


//Function to add name error while typing if taken
$("#addLocationName").keyup(function () {
    let name = $("#addLocationName")[0].value
    let id = $("#addLocationId")[0].value
    addEmployeeForm.classList.remove('was-validated')
    $('#addLocationName').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkLocationName.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            name: name
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorAddLocationNameTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorAddLocationNameTaken').removeClass('d-none').addClass('d-block')
                $('#addLocationName').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
})

//Function to add name error while typing if taken
$("#updateLocationName").keyup(function () {
    let name = $("#updateLocationName")[0].value
    let id = $("#updateLocationId")[0].value
    updateEmployeeForm.classList.remove('was-validated')
    $('#updateLocationName').removeClass('is-invalid')
    $.ajax({
        url: 'php/checkLocationName.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            name: name
        },
        success: function (result) {
            if (result.status.code == "200") {
                $('#errorUpdateLocationNameTaken').removeClass('d-block').addClass('d-none')
            } else {
                $('#errorUpdateLocationNameTaken').removeClass('d-none').addClass('d-block')
                $('#updateLocationName').addClass('is-invalid')
            }
        }
    }).error(function (e) {
        console.log(e)
    });
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


//Function for typing new department name for add department
$("#depName").keyup(function () {
    let name = $("#depName")[0].value
    let id = $("#depId")[0].value
    let foundLocation = GLOBAL_departments.find(dep => dep.id === id)
    $("#depDepartmentsMove option").each(function () {
        if ($(this).val() === name) {
            $(this).hide()
        } else {
            $(this).show()
        }
    });
    let int = parseInt(foundLocation.id)
    $("#depNameId")[0].value = int
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

//Function for selecting location to move departments to
$("#depDepartmentsMove").change(function () {
    let name = $("#depDepartmentsMove")[0].value
    let foundDepartment = GLOBAL_departments.find(dep => dep.name === name)
    $("#depDepartmentsMoveId")[0].value = foundDepartment.id
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















//Table event listeners -----------------------------------------------------------------------------------------------------

//Sort table data
$("th").click(function () {
    $("th span").html('')
    $("th").css('font-weight', 'normal')
    let column = $(this).data('column')
    let order = $(this).data('order')
    let id = $(this).attr('id')
    if ($(this).data('table') === 'employees') {
        $(`#${id}`).css('font-weight', '700')
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


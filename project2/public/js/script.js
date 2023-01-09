let GLOBAL_departments = []
let GLOBAL_hightestID = 0
let form = document.querySelector('form')

function getDepartments() {
    $.ajax({
        dataType: "json",
        url: `php/getAllDepartments.php`,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {
                let departments = result.data
                departments.unshift({ id: '0', name: 'All', locationID: '0' })
                let selectDepartmentsList = document.getElementById("departmentsList")
                let selectDepartmentOptions = document.getElementById("departmentOptions")

                for (let i = 0; i < departments.length; i++) {                    

                    this.clickFunction = function () {
                        console.log(`${departments[i].name}`)
                        getEmployees(i)
                    }

                    // Load navbar links 
                    let listItem = document.createElement("li");
                    listItem.id = `${departments[i].name}`
                    listItem.className = 'navbar-item'
                    listItem.addEventListener('click', this.clickFunction);

                    let link = document.createElement("button");
                    let linkHtml = document.createTextNode(`${departments[i].name}`)
                    link.className = 'btn mt-3 w-100 text-left navButton'
                    link.appendChild(linkHtml)

                    listItem.appendChild(link);
                    selectDepartmentsList.appendChild(listItem);

                    if (i !== 0) {
                        //Load form departments options
                        let option = document.createElement('option')
                        let optionHtml = document.createTextNode(`${departments[i].name}`)
                        option.appendChild(optionHtml)
                        selectDepartmentOptions.appendChild(option)

                        GLOBAL_departments.push(departments[i].name)
                    }
                }
            }
        }
    }).error(function (e) {
    });
}
getDepartments()



// function getLocations() {
//     $.ajax({
//         dataType: "json",
//         url: `php/getAllLocations.php`,
//         async: false,
//         success: function (result) {
//             if (result.status.code == "200") {

//                 let locations = result.data
//                 let selectLocationOptions = document.getElementById("locationOptions")

//                 for (let i = 0; i < locations.length; i++) {

//                     //Load form location options
//                     let option = document.createElement('option')
//                     let optionHtml = document.createTextNode(`${locations[i].name}`)
//                     option.appendChild(optionHtml)
//                     selectLocationOptions.appendChild(option)
//                 }
//             }
//         }
//     }).error(function (e) {
//     });
// }
// getLocations()





function getEmployees(id) {

    let URL = `php/getAllFromDepartment.php?id=${id}`

    if (id === 0) {
        URL = 'php/getAll.php'
    }

    $.ajax({
        dataType: "json",
        url: URL,
        async: false,
        success: function (result) {
            if (result.status.code == "200") {

                let employees = result.data                

                $('#totalEmp').html(employees.length);
                $('#newestEmpFirst').html(employees.slice(-1).pop().firstName);
                $('#newestEmpLast').html(employees.slice(-1).pop().lastName);
                $('#newestEmpDep').html(employees.slice(-1).pop().department);

                let select = document.getElementById("employeeList")
                select.innerHTML = ''

               

                for (let i = 0; i < employees.length; i++) {
                    
                    let int = parseInt(employees[i].id)                    
                    if (id === 0) {                        
                        if (int > GLOBAL_hightestID) {
                            GLOBAL_hightestID = int
                        }
                    }

                    let row = document.createElement("tr");


                    let idCol = document.createElement("td");
                    let idColHtml = document.createTextNode(`${employees[i].id}`)
                    idCol.appendChild(idColHtml)
                    row.appendChild(idCol);

                    let nameCol = document.createElement("td");
                    let nameColHtml = document.createTextNode(`${employees[i].firstName} ${employees[i].lastName}`)
                    nameCol.appendChild(nameColHtml)
                    row.appendChild(nameCol);

                    let depCol = document.createElement("td");
                    let depColHtml = document.createTextNode(`${employees[i].department} `)
                    depCol.appendChild(depColHtml)
                    row.appendChild(depCol);

                    let locationCol = document.createElement("td");
                    let locationColHtml = document.createTextNode(`${employees[i].location} `)
                    locationCol.appendChild(locationColHtml)
                    row.appendChild(locationCol);

                    let emailCol = document.createElement("td");
                    let emailColHtml = document.createTextNode(`${employees[i].email} `)
                    emailCol.appendChild(emailColHtml)
                    row.appendChild(emailCol);

                    this.manage = function () {
                        console.log(`${employees[i].location} `)
                        form.elements['firstName'].value = employees[i].firstName
                        form.elements['lastName'].value = employees[i].lastName
                        form.elements['email'].value = employees[i].email
                        form.elements['jobTitle'].value = employees[i].jobTitle
                        form.elements['id'].value = employees[i].id
                        $('#employeeName').html('Manage Employee');
                        $('#submitButton').html('Update');
                        form.classList.remove('was-validated')
                    }

                    let manageCol = document.createElement("button");
                    manageCol.className = `btn btn-sm manage ${employees[i].id}`;
                    manageCol.setAttribute('data-bs-toggle', 'modal')
                    manageCol.setAttribute('data-bs-target', '#modal')
                    manageCol.addEventListener('click', this.manage);
                    
                    let manageColHtml = document.createTextNode(`Manage`)
                    manageCol.appendChild(manageColHtml)
                    row.appendChild(manageCol);



                    select.appendChild(row);
                }

            }

        }
    }).error(function (e) {
    });
}
getEmployees(0)





function updateEmployee(first, last, department, jobTitle, email) {

    let departmentID = GLOBAL_departments.indexOf(department.value) + 1

    console.log(id, first, last, department, jobTitle, email)

    $.ajax({
        url: "php/postUpdatedEmployee.php",
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
                console.log(result)
                window.location.reload()
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown)
        }
    })
}





$("#openAllDirectory").click(function () {
    $("#directoryPanel").css('display', 'block');
    $("#departmentPanel").css('display', 'none');
})


$("#backToDepartment").click(function () {
    $("#directoryPanel").css('display', 'none');
    $("#departmentPanel").css('display', 'block');
})

$("#addNewEmployee").click(function () {
    form.elements['firstName'].value = ''
    form.elements['lastName'].value = ''
    form.elements['email'].value = ''
    form.elements['jobTitle'].value = ''
    form.elements['id'].value = GLOBAL_hightestID
    $('#employeeName').html('Add New Employee');
    $('#submitButton').html('Add');
    form.classList.remove('was-validated')
    
})







form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        e.preventDefault()
    } else {
        e.preventDefault()
        let formData = $('form').serializeArray()

        updateEmployee(formData[0], formData[1], formData[2], formData[3], formData[4])
    }
    form.classList.add('was-validated')
})





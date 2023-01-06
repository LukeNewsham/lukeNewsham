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
                let selectDepartmentOptions = document.getElementById("departmentsOptions")

                for (let i = 0; i < departments.length; i++) {

                    console.log(departments[i].name)

                    this.clickFunction = function () {
                        console.log(`${departments[i].name}`)
                        getEmployees(i)
                    }

                    // Load navbar links 
                    let listItem = document.createElement("li");
                    listItem.id = `${departments[i].name}`
                    listItem.className = 'navbar-item'
                    listItem.addEventListener('click', this.clickFunction);

                    let link = document.createElement("a");
                    let linkHtml = document.createTextNode(`${departments[i].name}`)
                    link.className = 'nav-link'
                    link.appendChild(linkHtml)

                    listItem.appendChild(link);
                    selectDepartmentsList.appendChild(listItem);

                    if (i !== 0) {
                        //Load form departments options
                        let option = document.createElement('option')
                        let optionHtml = document.createTextNode(`${departments[i].name}`)
                        option.appendChild(optionHtml)
                        selectDepartmentOptions.appendChild(option)
                    }
                }
            }
        }
    }).error(function (e) {
    });

}

getDepartments()





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

                console.log(employees)
                $('#totalEmp').html(employees.length);
                $('#newestEmpFirst').html(employees.slice(-1).pop().firstName);
                $('#newestEmpLast').html(employees.slice(-1).pop().lastName);
                $('#newestEmpDep').html(employees.slice(-1).pop().department);

                console.log(employees.length)

                let select = document.getElementById("employeeList")
                select.innerHTML = ''

                for (let i = 0; i < employees.length; i++) {
                    let row = document.createElement("tr");

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
                    }

                    let manageCol = document.createElement("button");
                    manageCol.className = 'btn btn-primary';
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





$("#navAll").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(0)
})

$("#navHR").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(1)
})

$("#navSales").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(2)
})

$("#navMarketing").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(3)
})

$("#navLegal").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(4)
})

$("#navServices").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(5)
})

$("#navRD").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(6)
})

$("#navPM").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(7)
})

$("#navTraining").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(8)
})

$("#navSupport").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(9)
})

$("#navEngineering").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(10)
})

$("#navAccounting").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(11)
})

$("#navBD").click(function () {
    // $("#directoryPanel").css('display', 'none');
    // $("#departmentPanel").css('display', 'block');

    getEmployees(12)
})





$("#openAllDirectory").click(function () {
    $("#directoryPanel").css('display', 'block');
    $("#departmentPanel").css('display', 'none');
})


$("#backToDepartment").click(function () {
    $("#directoryPanel").css('display', 'none');
    $("#departmentPanel").css('display', 'block');
})





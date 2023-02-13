
# Admin Dashboard

An application which allows users to 'create, read, update and delete' data from a company directory MySql database. The data includes employees, deparments and office locations.
## Tech Stack

**Client:** HTML, Css, Bootstrap, jQuery

**Server:** Php

**Database:** MySql


## Features

User Interaction
- Navigate to the Employees, Departments or Locations pages with the side navigation panel
- Add data for a new employee, department and location by pressing the add button on their respective pages, which opens a modal to input new data
- Edit data for an employee, department and location by pressing the row edit button or pressing on the row itself which opens a modal to edit the data
- Delete an employee, department and location by pressing the row edit button
- Fully responsive design for all screen sizes


Database Integrity 
- Unable to delete a department if there is an employee attached.
- Unable to delete a location if there is an employee attached
- Unable to give an employee an email that has already been taken
- Unable to give a department a name that has already been taken
- Unable to give a location a name that has already been  taken.



## AJAX Requests

#### GET All Employees

```http
  GET /php/getAll.php
```

#### GET All Departments

```http
  GET /php/getAllDepartments.php
```

#### GET All Locations

```http
  GET /php/getAllLocations.php
```

#### GET All Employees from a Department

```http
  GET /php/getAllFromDepartment.php?id=${id}
```

#### POST New Employee

```http
  POST /php/postNewEmployee.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Employee ID |
| `first` | `string` | **Required**. Employee First Name |
| `last` | `string` | **Required**. Employee Last Name |
| `departmentID` | `string` | **Required**. Employee Department Id |
| `email` | `string` | **Required**. Employee Email |
| `jobTitle` | `string` | Employee Job Title |

#### POST Updated Employee

```http
  POST /php/postUpdatedEmployee.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Employee ID |
| `first` | `string` | **Required**. Employee First Name |
| `last` | `string` | **Required**. Employee Last Name |
| `departmentID` | `string` | **Required**. Employee Department Id |
| `email` | `string` | **Required**. Employee Email |
| `jobTitle` | `string` | Employee Job Title |

#### DELETE Employee

```http
  DELETE php/deleteEmployeeByID.php?id=${id}
```

#### POST New Department

```http
  POST /php/postNewDepartment.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Department ID |
| `name` | `string` | **Required**. Department Name |
| `location` | `string` | **Required**. Department Location ID |

#### POST Updated Department

```http
  POST /php/postUpdatedDepartment.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Department ID |
| `name` | `string` | **Required**. Department Name |
| `location` | `string` | **Required**. Department Location ID |










#### Check Employees attached to department

```http
  GET /php/checkDepartmentEmployeeCount.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



## Demo

Insert gif or link to demo



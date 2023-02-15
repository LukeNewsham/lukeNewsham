
# Admin Dashboard

An application which allows users to 'create, read, update and delete' data from a company directory MySql database. The data includes employees, departments and office locations.

This project was created for project 2 from IT Career Switch.  A more rigorous reply to this specification was required as a user requirements document was needed to be prepared which, when signed off, triggers the release of SQL allowing to develop a “mobile first” application to maintain a company personnel database (MySQL). Sign-off is only achieved upon the student supplying an independently witnessed document providing confirmation of the system’s ability to perform error-free.


## Tech Stack

**Client:** HTML, CSS, Bootstrap, jQuery

**Server:** Php

**Database:** MySql


## Features

User Interaction
- Can navigate to the Employees, Departments or Locations pages with the side navigation panel
- Can add data for a new employee, department or location by pressing the add button on their respective pages, which opens a modal to input new data
- Can edit data for an employee, department or location by pressing the row edit button or pressing on the row itself which opens a modal to edit the data
- Can delete an employee, department or location by pressing the row edit button
- Fully responsive design for all screen sizes


Database Integrity 
- Unable to delete a department if there is an employee attached.
- Unable to delete a location if there is an department attached
- Unable to give an employee an email that has already been taken
- Unable to give a department a name that has already been taken
- Unable to give a location a name that has already been taken.

## Screenshots and DEMO

https://clipchamp.com/watch/loZLUF9BjcO

#### Employees Page
![AD Employees SS](https://user-images.githubusercontent.com/95356508/218555579-8e994b70-f8c0-411e-9e39-6078de0671bf.png)

#### Searching Employees
![AD Employees Search SS](https://user-images.githubusercontent.com/95356508/218555626-86df823e-9e51-48c8-90dd-5f87549d8856.png)

#### Adding an Employee
![AD Employees  Add SS](https://user-images.githubusercontent.com/95356508/218555960-02218be1-2768-4312-b6e0-48b803a64d33.png)

#### Departments Page
![AD Departments SS](https://user-images.githubusercontent.com/95356508/218555647-7299785b-75be-46be-88ee-b8a8d7d2e43e.png)

#### Editing a Department
![AD Edit Department SS](https://user-images.githubusercontent.com/95356508/218556314-c303ac9f-9554-4104-b22b-996af752d958.png)

#### Locations Page
![AD Locations SS](https://user-images.githubusercontent.com/95356508/218555637-56962d58-ba65-41ef-b5d3-218578f558c8.png)

#### Stats Page
![AD Stats SS](https://user-images.githubusercontent.com/95356508/218555655-db9124fd-ec3c-4ff9-8b37-cc03d849909a.png)

#### Fully responsive for all screen sizes
![AD Mobile Screenshots](https://user-images.githubusercontent.com/95356508/218993811-d88d3a3a-aad0-48de-842a-ecce3d7198d3.png)

## AJAX Requests

### GET REQUESTS

#### GET All Employees

```http
  GET /php/getAll.php
```

#### GET Employee by ID

```http
  GET /php/getPersonnelById.php?id=${id}
```

#### GET All Departments

```http
  GET /php/getAllDepartments.php
```

#### GET Department by ID

```http
  GET /php/getDepartmentById.php?id=${id}
```


#### GET All Locations

```http
  GET /php/getAllLocations.php
```

#### GET Location by ID

```http
  GET /php/getLocationById.php?id=${id}
```


#### GET All Employees from a Department

```http
  GET /php/getAllFromDepartment.php?id=${id}
```

#### Check Departments attached to a location

```http
  GET /php/checkLocationDepartmentCount.php
```

#### Check Employees attached to a department

```http
  GET /php/checkDepartmentEmployeeCount.php
```



### POST REQUESTS

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


#### POST New Location

```http
  POST /php/postNewLocation.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Location ID |
| `name` | `string` | **Required**. Location Name |

#### POST Updated Location

```http
  POST /php/postUpdatedLocation.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Location ID |
| `name` | `string` | **Required**. Location Name |



### DELETE REQUESTS

#### DELETE Employee

```http
  DELETE php/deleteEmployeeByID.php?id=${id}
```


#### DELETE Department

```http
  DELETE php/deleteDeparmentByID.php?id=${id}
```


#### DELETE Location

```http
  DELETE php/deleteLocationByID.php?id=${id}
```




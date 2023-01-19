<?php

// example use from browser
// use insertDepartment.php first to create new dummy record and then specify it's id in the command below
// http://localhost/companydirectory/libs/php/deleteDepartmentByID.php?id=<id>

// remove next two lines for production

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);

include("config.php");

header('Content-Type: application/json; charset=UTF-8');

$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

if (mysqli_connect_errno()) {

	$output['status']['code'] = "300";
	$output['status']['name'] = "failure";
	$output['status']['description'] = "database unavailable";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];

	mysqli_close($conn);

	echo json_encode($output);

	exit;

}

// SQL statement accepts parameters and so is prepared to avoid SQL injection.
// $_REQUEST used for development / debugging. Remember to change to $_POST for production

$id = mysqli_real_escape_string($conn, $_REQUEST['id']);
$firstName = mysqli_real_escape_string($conn, $_REQUEST['first']);
$lastName = mysqli_real_escape_string($conn, $_REQUEST['last']);
$department = mysqli_real_escape_string($conn, $_REQUEST['departmentID']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$jobTitle = mysqli_real_escape_string($conn, $_REQUEST['jobTitle']);

$queryCheck = $conn->prepare('SELECT * FROM personnel WHERE email = ? ');
$queryCheck->bind_param("s", $email);


$queryCheck->execute();

$queryCheck->bind_result($resultId, $resultFirst, $resultSecond, $resultJob, $resultEmail, $resultDepartmentId);

$queryCheck->fetch();

if (null <> $resultEmail ) {
		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "Email taken";
		$output['data'] = [$resultId, $id];
		mysqli_close($conn);
		echo json_encode($output);
		exit;		
}

mysqli_close($conn);





$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

$query = $conn->prepare('INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) VALUES (?, ?, ?, ?, ?)');
$query->bind_param("ssssi", $firstName, $lastName, $jobTitle, $email, $department);

$query->execute();

if (false === $query) {

	$output['status']['code'] = "400";
	$output['status']['name'] = "executed";
	$output['status']['description'] = "query failed";
	$output['data'] = [];

	mysqli_close($conn);

	echo json_encode($output);

	exit;

}

$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "success";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = [$resultId, $resultFirst, $resultSecond, $resultJob, $resultEmail, $resultDepartmentId];

mysqli_close($conn);

echo json_encode($output);

?>
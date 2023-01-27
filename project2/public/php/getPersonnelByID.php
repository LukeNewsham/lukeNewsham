<?php

// example use from browser
// http://localhost/companydirectory/libs/php/getPersonnelByID.php?id=<id>

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

// first query - SQL statement accepts parameters and so is prepared to avoid SQL injection.
// $_REQUEST used for development / debugging. Remember to change to $_POST for production

$id = mysqli_real_escape_string($conn, $_REQUEST['id']);

$query = $conn->prepare('SELECT personnel.id, personnel.firstName, personnel.lastName, personnel.email, personnel.jobTitle, department.name AS department FROM personnel JOIN department ON personnel.departmentID=department.id WHERE personnel.id = ?');

$query->bind_param("i", $id);

$query->execute();

$query->bind_result($resultId, $resultFirst, $resultLast, $resultEmail, $resultJob, $resultDep);

$query->fetch();

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
$output['data']= [$resultId, $resultFirst, $resultLast, $resultEmail, $resultJob, $resultDep];

mysqli_close($conn);

echo json_encode($output);

?>
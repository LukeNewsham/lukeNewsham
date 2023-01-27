<?php

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


$id = mysqli_real_escape_string($conn, $_REQUEST['id']);

$queryCheck = $conn->prepare('SELECT COUNT(id) FROM department WHERE locationID = ?');

$queryCheck->bind_param("i", $id);
$queryCheck->execute();
$queryCheck->bind_result($result);
$queryCheck->fetch();

if ($result) {
	$output['status']['code'] = "400";
	$output['status']['name'] = "executed";
	$output['status']['description'] = "Departments attached";
	$output['data'] = [$result];
	mysqli_close($conn);
	echo json_encode($output);
	exit;	
}

$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "success";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = [];

mysqli_close($conn);

echo json_encode($output);

?>
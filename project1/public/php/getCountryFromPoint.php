<?php

function isJSON($string)
{
	return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}


ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);

$url = 'https://api.opencagedata.com/geocode/v1/json?q=' . $_REQUEST['lat'] . '+' . $_REQUEST['lng'] . '&key=74d7a2bf429b4d1a83a89fd482ad39c4';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$result = curl_exec($ch);

//checks for errors 		
if (isJSON($result)) {
	$decode = json_decode($result, true);
	$statusCode = '200';
} else {
	$decode = curl_error($ch);
	$statusCode = '404';
}
curl_close($ch);


$output['status']['code'] = $statusCode;
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $decode;

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($output);
?>
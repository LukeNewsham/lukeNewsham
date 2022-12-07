<?php

function isJSON($string)
{
	return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}


ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);

$globalData = [];

$countries = $_REQUEST['countries'];

foreach ($countries as $country) {

	$lat = $country[0];
	$lng = $country[1];
	$name = $country[2];
	
	$url = 'https://api.openweathermap.org/data/2.5/weather?lat=' . $lat . '&lon=' . $lng . '&appid=6d2644bed2206fc3b11c8435d95cda14&units=metric';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $url);
	$countryWeather = curl_exec($ch);

	//checks for errors for each city			
	if (isJSON($countryWeather)) {
		$countryWeatherDecoded = json_decode($countryWeather, true);
		array_push($globalData, [$countryWeatherDecoded, $name]);
	} else {
		array_push($globalData, [curl_error($ch)]);
	}
	curl_close($ch);
}
;

$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "success";
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $globalData;

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($output);
?>
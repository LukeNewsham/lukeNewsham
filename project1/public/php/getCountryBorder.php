<?php

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);	

	$url='/project 1/public/php/countryBorders.geo.json';	
	$root = $_SERVER['DOCUMENT_ROOT'];
	
	$fullUrl = $root.$url;

	$file = file_get_contents($fullUrl);

	$decode = json_decode($file, true)['features'];	

	// $chosenCountry = "France";
	$chosenCountry = $_REQUEST['countryName'];

	// if (empty($chosenCountry)) {
	// 	$send = "Name is empty";
	//   } else {
	// 	$send = $chosenCountry;
	// };

	// echo json_encode($send);

	foreach ($decode as $feature) {

		$country = substr(json_encode($feature['properties']['name']), 1, -1);

		if ($chosenCountry === $country) {
			// echo  json_encode($feature);
			$result = $feature;
		};		
	};

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $result;	
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
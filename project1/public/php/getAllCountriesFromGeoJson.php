<?php

	// /home/u164112955/domains/lukenewshamportfolio.me/public_html

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);	

	// $url='/project1/js/countryBorders.geo.json';
	$url='/project 1/public/js/countryBorders.geo.json';	
	$root = $_SERVER['DOCUMENT_ROOT'];
	
	$fullUrl = $root.$url;

	$file = file_get_contents($fullUrl);

	$decode = json_decode($file, true)['features'];
	$result = [];
	
	

	foreach ($decode as $feature) {

		$country = substr(json_encode($feature['properties']['name']), 1, -1);

		array_push($result, $country);
	};

	// sort($result)

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $result;	
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
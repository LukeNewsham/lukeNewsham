<?php

// /home/u164112955/domains/lukenewshamportfolio.me/public_html

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);

// $url='/project1/js/countryBorders.geo.json';
$url = '/project 1/public/js/countryBorders.geo.json';
$root = $_SERVER['DOCUMENT_ROOT'];

$fullUrl = $root . $url;

$countries = [];
$file = file_get_contents($fullUrl);

if ($file !== false) {
	$decode = json_decode($file, true)['features'];	
	$chosenCountry = $_REQUEST['countries'];

	foreach ($decode as $feature) {
		$country = substr(json_encode($feature['properties']['name']), 1, -1);
		if ($chosenCountry === 'all') {
			array_push($countries, $feature);
		} else {
			if ($country === $chosenCountry) {
				array_push($countries, $feature);
			}
			;
		}
		;
	}
	;

	$statusCode = '200';
} else {
	$statusCode = '404';
}



function compare_country($a, $b)
{
	return strnatcmp($a['properties']['name'], $b['properties']['name']);
}
usort($countries, 'compare_country');

$output['status']['code'] = $statusCode;
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $countries;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>
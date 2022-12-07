<?php

function isJSON($string)
{
	return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}


ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);

//set default
$output['status']['code'] = "200";



//get country data
$url = 'https://restcountries.com/v3.1/name/' . $_REQUEST['country'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$countryData = curl_exec($ch);

if (isJSON($countryData)) {
	$countryDataDecoded = json_decode($countryData, true);
} else {
	$countryDataDecoded = curl_error($ch);
}
curl_close($ch);


//get country cities
$url = 'https://www.triposo.com/api/20221011/location.json?countrycode=' . $_REQUEST['iso'] . '&tag_labels=city&count=' . $_REQUEST['amount'] . '&fields=name,snippet,generated_intro,coordinates,properties,images&order_by=-score&account=6BO6AOOX&token=nkbg4amiixnpkl3r0ku6gv3v12p10dxs';
// $url = 'https://www.triposo.com/api/20221011/location.json?countrycode=FR&tag_labels=city&count=5&fields=name,snippet,generated_intro,coordinates,properties,images&order_by=-score&account=6BO6AOOX&token=nkbg4amiixnpkl3r0ku6gv3v12p10dxs';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$countryCities = curl_exec($ch);

//checks for errors
if (isJSON($countryCities)) {
	$countryCitiesDecoded = json_decode($countryCities, true);
} else {
	$countryCitiesDecoded = curl_error($ch);
}
curl_close($ch);



//get country astrology data
$capital = $countryCitiesDecoded['results'][0];
$url = 'https://api.ipgeolocation.io/astronomy?apiKey=278be901893443e4b9f1557a2c7d9d4e&lat=' . $capital['coordinates']['latitude'] . '&long=' . $capital['coordinates']['longitude'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$astrologyData = curl_exec($ch);

//checks for errors		
if (isJSON($astrologyData)) {
	$astrologyDataDecoded = json_decode($astrologyData, true);
} else {
	$astrologyDataDecoded = curl_error($ch);
}

curl_close($ch);



//get cities weather data
$citiesData = [];
foreach ($countryCitiesDecoded['results'] as $city) {
	$lat = $city['coordinates']['latitude'];
	$lng = $city['coordinates']['longitude'];
	$url = 'https://api.openweathermap.org/data/2.5/weather?lat=' . $lat . '&lon=' . $lng . '&appid=6d2644bed2206fc3b11c8435d95cda14&units=metric';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $url);

	$weather = curl_exec($ch);

	//checks for errors for each city			
	if (isJSON($weather)) {
		$weatherDecoded = json_decode($weather, true);
		array_push($citiesData, [$city, $weatherDecoded]);
	} else {
		array_push($citiesData, [$city, curl_error($ch)]);
	}
	curl_close($ch);
}
;



$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['country'] = $countryDataDecoded;
$output['astrology'] = $astrologyDataDecoded;
$output['cities'] = $citiesData;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>
<?php

function isJSON($string)
{
	return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}


ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);





//get country data
$url = 'https://restcountries.com/v3.1/name/' . $_REQUEST['country'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$countryData = curl_exec($ch);

if (isJSON($countryData)) {
	$countryDataData = json_decode($countryData, true);
	$countryDataStatus = '200';

} else {
	$countryDataDecoded  = curl_error($ch);
	$countryDataStatus  = '404';
}

curl_close($ch);


//get country cities
$url = 'https://www.triposo.com/api/20221011/location.json?countrycode=' . $_REQUEST['iso'] . '&tag_labels=city&count=' . $_REQUEST['amount'] . '&fields=name,snippet,generated_intro,coordinates,properties,images&order_by=-score&account=6BO6AOOX&token=nkbg4amiixnpkl3r0ku6gv3v12p10dxs';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$countryCities = curl_exec($ch);

//checks for errors
if (isJSON($countryCities)) {
	$countryCitiesData = json_decode($countryCities, true);
	$countryCitiesStatus = '200';
} else {
	$countryCitiesData = curl_error($ch);
	$countryCitiesStatus = '404';
}
curl_close($ch);



//get country astrology data
$capital = $countryCitiesData['results'][0];
$url = 'https://api.ipgeolocation.io/astronomy?apiKey=278be901893443e4b9f1557a2c7d9d4e&lat=' . $capital['coordinates']['latitude'] . '&long=' . $capital['coordinates']['longitude'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$astrologyData = curl_exec($ch);

//checks for errors		
if (isJSON($astrologyData)) {
	$astrologyDataData = json_decode($astrologyData, true);
	$astrologyDataStatus = '200';
} else {
	$astrologyDataData = curl_error($ch);
	$astrologyDataStatus = '404';
}

curl_close($ch);



//get cities weather data
$citiesData = [];

if ($countryCitiesStatus === '200') {
	foreach ($countryCitiesData['results'] as $city) {
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
			$weatherData = json_decode($weather, true);
			array_push($citiesData, [$city, $weatherData]);
		} else {
			array_push($citiesData, [$city, curl_error($ch)]);
		}
		curl_close($ch);
	};
	$citiesStatus = '200';
} else {
	$citiesStatus = '404';
}





$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

$output['data']['country']['data'] = $countryDataData;
$output['data']['country']['status'] = $countryDataStatus;

$output['data']['astrology']['data'] = $astrologyDataData;
$output['data']['astrology']['status'] = $astrologyDataStatus;

$output['data']['cities']['data'] = $citiesData;
$output['data']['cities']['status'] = $citiesStatus;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);

?>
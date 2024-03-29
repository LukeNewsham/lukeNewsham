<?php
function isJSON($string)
{
	return is_string($string) && is_array(json_decode($string, true)) ? true : false;
}


ini_set('display_errors', 'On');
error_reporting(E_ALL);
$executionStartTime = microtime(true);

$url = 'https://www.triposo.com/api/20221011/poi.json?location_id=' . $_REQUEST['city'] . '&tag_labels=' . $_REQUEST['tag'] . '&count=15&fields=name,coordinates,intro,images,tag_labels,price_tier,opening_hours,snippet,generated_intro,generated_snippet&order_by=-score&account=6BO6AOOX&token=nkbg4amiixnpkl3r0ku6gv3v12p10dxs';
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
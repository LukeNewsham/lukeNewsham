<?php

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);	

	$url='https://www.triposo.com/api/20221011/poi.json?location_id=' . $_REQUEST['city'] . '&tag_labels='. $_REQUEST['tag'] .'&count=15&fields=name,coordinates,intro,images,tag_labels,price_tier,opening_hours,snippet,generated_intro,generated_snippet&order_by=-score&account=6BO6AOOX&token=nkbg4amiixnpkl3r0ku6gv3v12p10dxs';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
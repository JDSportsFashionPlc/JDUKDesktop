<?php

// // $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
// header('Content-Type: application/json');
// // $url = "//bjornblog.com/storelocator/locations.json";
// $json = file_get_contents('http://bjornblog.com/storelocator/locations.json');
// // $tweets = json_decode($content, true);

// echo $json;


// $url = 'http://bjornblog.com/storelocator/locations.json';
// $html = file_get_contents($url);
// $json = preg_replace('/,\s*([\]}])/m', '$1', utf8_encode($html));
// $json = json_decode($json);
// echo "<pre>";

// echo json_encode ($json);


$url="http://www.feeds.jdsports.info/stores/kiosk/JD/JD_KioskStores.json";
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
echo urldecode(stripslashes($result));
// print_r(json_encode($result, true));

?>
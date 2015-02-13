<?php
$api = file_get_contents("https://api.instagram.com/v1/tags/CRLifestyle/media/recent?access_token=235430887.467ede5.58a5826a4ce54eef8e18a18aaa48443a");
$json = json_decode($api,true);

echo $api;

foreach($json['data'] as $data){
	echo $data['user'];
	
if($data['user']['username']=="jdsportsofficial"){

echo $data['user'];


}
}
?>
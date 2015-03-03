<?

// USING CODEBIRD PHP TO SEND AN AUTHENTICATED REQUEST TO TWITTER, then WRITE ONE TWEET TO A JSON FILE 'jd-sports-latest-tweets.json'
// THIS SCRIPT IS RUN ONCE EVERY 15 TO REDUCE TWITTER REQUESTS

require_once ('codebird.php');
//Twitter OAuth Settings
$CONSUMER_KEY = 'SLIVZlJT3jeyoELRYXdGg';
$CONSUMER_SECRET = 'Z8jraUBhInoEkum4ZiKKGT2obTOu0EO92G3GfWRmQ';
$ACCESS_TOKEN = '26239843-GhtyDoAcNymEUviKGrmacwOf8HZz7lHelCTBd9Z6e';
$ACCESS_TOKEN_SECRET = 'LRzPoQqlPzrg3pjIwx5xuDAArG5Z6x2z22XPN04';

//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

//retrieve posts

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets

$api = 'statuses_userTimeline';

$params = array(
'screen_name' => 'FAWales',
'q' => 'FAWales',
'include_rts' => 'false',
'count' => '3',
'exclude_replies' => 'true'

);


//Make the REST call
$data = (array) $cb->$api($params);

$jsonData = json_encode($data); 
//$jsonStart = "{\"value\":{\"items\":";
//$jsonEnd = "}}";

$jsonStart = "jsonCallback({\"tweets\":[";
$jsonEnd = "]})";

/*header('Content-Type: application/javascript');

echo $jsonStart;
echo $jsonData;
echo $jsonEnd;
*/

$file = "jd-sports-pro-wales-latest-tweets.json";

$handle = fopen($file, 'w');
fwrite($handle, $jsonStart);
fwrite($handle, $jsonData);
fwrite($handle, $jsonEnd);
fclose($handle);

?>
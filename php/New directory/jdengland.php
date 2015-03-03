<?

// USING CODEBIRD PHP TO SEND AN AUTHENTICATED REQUEST TO TWITTER, then WRITE ONE TWEET TO A JSON FILE 'jd-sports-latest-tweets.json'
// THIS SCRIPT IS RUN ONCE EVERY 15 TO REDUCE TWITTER REQUESTS

require_once ('../twitterfeed/codebird.php');
//Twitter OAuth Settings
$CONSUMER_KEY = 'XWHjmGCOm1hyZ3L7CzaZ1Q';
$CONSUMER_SECRET = '6oAytb5ggVF28817eAAUUH1XVhI3X0RhH6DAXNTpk';
$ACCESS_TOKEN = '26239843-EBcllp5HPm5fe7gzj0cmCDNZYIdTV0NkV7KcckXyS';
$ACCESS_TOKEN_SECRET = 'WRE0wvXHMsKOahwAT0l3MyQzSbgo3hqXNcrLhlZMJPhYJ';

//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

//retrieve posts

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets

$api = 'statuses_userTimeline';

$params = array(
'screen_name' => 'JDsportsfashion',
'q' => 'JDENGLAND',
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

$file = "jdengland.json";

$handle = fopen($file, 'w');
fwrite($handle, $jsonStart);
fwrite($handle, $jsonData);
fwrite($handle, $jsonEnd);
fclose($handle);

?>
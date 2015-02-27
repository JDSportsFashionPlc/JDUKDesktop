<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';
echo "<pre>";
try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
		
		echo "break1: start it off<br>";
		
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
		
		echo "break2: authenticated<br>";

		/*% ExactTarget_TriggeredSendDefinition */				
		$tsd = new ExactTarget_TriggeredSendDefinition();
		$tsd->CustomerKey = "Job Alert"; // unique identifier for the triggered send definition
		echo "break3: created triggered send object<br>";

		/*% ExactTarget_TriggeredSend */				
		$ts = new ExactTarget_TriggeredSend();
		$ts->TriggeredSendDefinition = new SoapVar($tsd, SOAP_ENC_OBJECT, 'TriggeredSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
		echo "break4: created triggered send object<br>";
		
		// Associate a subscriber and attributes to the triggered send
		$ts->Subscribers = array();
		$subscriber = new ExactTarget_Subscriber();
		$subscriber->EmailAddress = "info@exacttarget.com"; // set the email address
		$subscriber->SubscriberKey = "info@exacttarget.com"; // optional, depending on account configuration
		/****************************************************************
		** this commented out code is for use with an on your behalf send 
		$subscriber->Owner = new ExactTarget_Owner(); 
		$subscriber->Owner->FromAddress = "FFFF@exacttarget.com";
		$subscriber->Owner->FromName = "FROM NAME";
		****************************************************************/
		$ts->Subscribers[] = $subscriber; // add the subscriber to the send
		echo "break5: added subscriber info<br>";
		
		// create SoapVar object
		$object = new SoapVar($ts, SOAP_ENC_OBJECT, 'TriggeredSend', "http://exacttarget.com/wsdl/partnerAPI");
		echo "break6: created SoapVar object<br>";

		// create request object
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		echo "break6: make request object<br>";

		// Create the triggered send definition
		$results = $client->Create($request);
		print_r($result);
		echo "break7: make request<br>";
		
		// Output the results
		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}

// Output the request and response
print "Request: \n".
$client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";

echo "complete";
?>

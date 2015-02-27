<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
		
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
			
		$tsd = new ExactTarget_SMSTriggeredSendDefinition();
		$tsd->CustomerKey = "MyExternalKey"; // set external key/unique identifier for the triggered send definition

		/*% ExactTarget_TriggeredSend */				
		$ts = new ExactTarget_SMSTriggeredSend();
		$ts->SMSTriggeredSendDefinition = new SoapVar($tsd, SOAP_ENC_OBJECT, 'SMSTriggeredSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
		
		// Associate a subscriber and attributes to the triggered send
		$subscriber = new ExactTarget_Subscriber();
		$subscriber->SubscriberKey = "12345678910"; // subscriber key for the subscriber you are sending to (usually mobile phone number)
		$ts->Subscriber = $subscriber;
		$ts->Number = "12345678910"; // phone number for the subscriber you are sending to
		$ts->Message = "Hello from PHP"; // the message you want to send to the subscriber
		
		// create SoapVar object
		$object = new SoapVar($ts, SOAP_ENC_OBJECT, 'SMSTriggeredSend', "http://exacttarget.com/wsdl/partnerAPI");

		// create request object
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);

		// Create the triggered send definition
		$results = $client->Create($request);
		print_r($result);
		
		// Output the results
		echo '<pre>';
		var_dump($results);
		echo '</pre>';

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


?>

<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';
	echo "<pre>";
try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';

        // Specify the subscriber 
		$subscriber = new ExactTarget_Subscriber();
		$subscriber->SubscriberKey = "232424"; /* optional depending on account configuration */
		$subscriber->EmailAddress = "info@exacttarget.com";
                                
        // Specify the list to add the subscriber to
		$sublist = new ExactTarget_SubscriberList();
		$sublist->ID = 1648074; // specify listID
		$sublist->Action = "create"; // specify what action to apply to subscriber on list (delete, update are other options)
		$subscriber->Lists[] = new SoapVar($sublist, SOAP_ENC_OBJECT, 'SubscriberList', "http://exacttarget.com/wsdl/partnerAPI");
				
		/*% Create a profile attribute for the subscriber */	
		$attribute1 = new ExactTarget_Attribute();
		$attribute1->Name = "First Name";
		$attribute1->Value = "Sally";
		
		/*% Create a profile attribute for the subscriber */
		$attribute2 = new ExactTarget_Attribute();
		$attribute2->Name = "YearOfBirth";
		$attribute2->Value = "1976";
		
		/* Attach the profile attributes to the subcscriber */
		$subscriber->Attributes[] = $attribute1;
		$subscriber->Attributes[] = $attribute2;
				
		$object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");

		$request = new ExactTarget_CreateRequest();
		
        // Configure Upsert Capabilities for the CreateRequest
		$requestOptions = new ExactTarget_CreateOptions();
		$saveOption = new ExactTarget_SaveOption();
		$saveOption->PropertyName = "Subscriber"; // Specify the Object upsert applies to 
		$saveOption->SaveAction = "UpdateAdd"; // Specify upsert save action
		$requestOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");
                                
        // Apply options and object to request
		$request->Options = new SoapVar($requestOptions, SOAP_ENC_OBJECT, 'CreateOptions', "http://exacttarget.com/wsdl/partnerAPI");
		$request->Objects = array($object);
                                
        // Execute the CreateRequest
		$results = $client->Create($request);

		/* Output the results */
		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}
echo "</pre>";

/* Output the request and response */
print "Request: \n".
$client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";

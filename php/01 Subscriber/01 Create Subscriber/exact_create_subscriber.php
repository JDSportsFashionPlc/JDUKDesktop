<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password for the account here */
        $client->username = '<username>';
        $client->password = '<password>';
	
		/*% ExactTarget_Subscriber */	
		$subscriber = new ExactTarget_Subscriber();
		$subscriber->SubscriberKey = "232424"; // optional depending on account configuration
		$subscriber->EmailAddress = "info@exacttarget.com"; // required
				
		/*% Create a profile attribute for the subscriber */	
		$attribute1 = new ExactTarget_Attribute();
		$attribute1->Name = "FirstName";
		$attribute1->Value = "Sally";
		
		/*% Create a profile attribute for the subscriber */
		$attribute2 = new ExactTarget_Attribute();
		$attribute2->Name = "YearOfBirth";
		$attribute2->Value = "1976";
		
		/*% Create a profile attribute for the subscriber */
		$attribute3 = new ExactTarget_Attribute();
		$attribute3->Name = "Family ID";
		$attribute3->Value = "1234";
		
		/* Attach the profile attributes to the subcscriber */
		$subscriber->Attributes[] = $attribute1;
		$subscriber->Attributes[] = $attribute2;
		$subscriber->Attributes[] = $attribute3;
		
		/* Create the subscriber */
		$object = new SoapVar($subscriber, SOAP_ENC_OBJECT, 'Subscriber', "http://exacttarget.com/wsdl/partnerAPI");
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Create($request);

		/* Output the results */
		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}
?>
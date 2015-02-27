<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		// Give the triggered Send Definition a key and name
		$tsd = new ExactTarget_TriggeredSendDefinition();
		$tsd->CustomerKey = "Created via SOAP"; // unique identifier for the triggered send definition
		$tsd->Name = $tsd->CustomerKey; // set the name to be the same as the customer key
				
		// Define the email to be sent
		$tsd->Email = new ExactTarget_Email(); // create email object to attach to the send
		$tsd->Email->ID = 3096692; // id of the email you want to attach to the triggered send
		
		// Define the send classification that is associated with this send
		$sc = new ExactTarget_SendClassification();
		$sc->CustomerKey = "test"; // external key for the send classification we want to use
		$tsd->SendClassification = $sc; // create send classification object to attach to the send
		
		// Send the email as multipart mime
		$tsd->IsMultipart = true; // Send as Multipart MIME
				
		// Create the object
		$object = new SoapVar($tsd, SOAP_ENC_OBJECT, 'TriggeredSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
				
		// Create the triggered send definition
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Create($request);

		// output the results
		echo("<pre>");
		var_dump($results);
		echo("</pre>");		
		
	} catch (SoapFault $e) {
		echo("<pre>");
		var_dump($e);
		echo("</pre>");
}
?>
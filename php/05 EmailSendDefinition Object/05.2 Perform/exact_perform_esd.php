<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		// Create the Perform Request and set the action to 'start'
		$pr = new ExactTarget_PerformRequestMsg();
        $pr->Action = "start";   
        
		// Define the customer/external key for the email send definition we want to start
        $esd = new ExactTarget_EmailSendDefinition();				
		$esd->CustomerKey = "5047"; // unique identifier for the Email Send Definition
			
		// Define the definition for the Perform request
		$pr->Definitions =  array();
        $pr->Definitions[] = new SoapVar($esd, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");
        $pr->Options = NULL;

		// Perform/Start the Email Send Definition
        $results = $client->Perform($pr);  

		echo '<pre>';
            var_dump($results);
		echo '</pre>';
		
} catch (SoapFault $e) {
	var_dump($e);
}
?>
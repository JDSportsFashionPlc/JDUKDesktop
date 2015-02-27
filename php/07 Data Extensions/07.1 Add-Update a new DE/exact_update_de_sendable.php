<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		/* Define the data extension we will be updating */
		$dataextension = new ExactTarget_DataExtension();
		$dataextension->CustomerKey = "API Created Data Extension - Sendable";

		/* Change the used for sending field */
		$dataextension->SendableDataExtensionField = new ExactTarget_DataExtensionField();
		$dataextension->SendableDataExtensionField->Name = "FirstName";
		
		$object = new SoapVar($dataextension, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");

		/* update the data extension */
		$request = new ExactTarget_UpdateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Update($request);

		/* output the results */
		echo '<pre>';
		var_dump($results);
		echo '</pre>';

} catch (SoapFault $e) {
	var_dump($e);
}
?>
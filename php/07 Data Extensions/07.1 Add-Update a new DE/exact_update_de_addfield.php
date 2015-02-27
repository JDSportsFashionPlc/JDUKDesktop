<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';

		// define the data extension
		$dataextension = new ExactTarget_DataExtension();
		$dataextension->CustomerKey = "Customers"; // the unique identifier for the data extension
		
		// create the field that we are adding to the data extension
		$field1 = new ExactTarget_DataExtensionField();
		$field1->Name = "New Field";
		$field1->FieldType = "Text";
		$field1->MaxLength = "50";
	
		// add the field to the data extension object
		$dataextension->Fields[] = $field1 ;
		
		$object = new SoapVar($dataextension, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");

		// update the data extension
		$request = new ExactTarget_UpdateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Update($request);

		// output the results
		echo '<pre>';
		var_dump($results);
		echo '</pre>';

} catch (SoapFault $e) {
	var_dump($e);
}
?>
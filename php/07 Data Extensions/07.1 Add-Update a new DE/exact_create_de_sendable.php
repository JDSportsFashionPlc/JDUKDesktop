<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';
		
		/* define the data extension */
		$dataextension = new ExactTarget_DataExtension();
		$dataextension->Name = "API Created Data Extension - Sendable"; // name of the data extension
		$dataextension->CustomerKey = "API Created Data Extension - Sendable"; // unique identifier for the data extension
		
		/* set the data extension to be sendable */
		$dataextension->IsSendable = "True";
		
		$field1 = new ExactTarget_DataExtensionField();
		$field1->Name = "EmailAddress";
		$field1->FieldType = "EmailAddress";
		$field1->IsRequired = "True"; // make the field non-nullable, must be true for primary key
		$field1->IsPrimaryKey = "True"; // make EmailAddress the primary key
		
		$field2 = new ExactTarget_DataExtensionField();
		$field2->Name = "FirstName";
		$field2->FieldType = "Text";
		/* field2 will be nullable since IsRequired is not specified */
		
		/* add the fields to the data extension */
		$dataextension->Fields[] = $field1;
		$dataextension->Fields[] = $field2;
		
		/* set it so that the data extension fields EmailAddress maps to attribute Subscriber Key */
		$dataextension->SendableDataExtensionField = new ExactTarget_DataExtensionField();
		$dataextension->SendableDataExtensionField->Name = "EmailAddress";
		$dataextension->SendableSubscriberField  = new ExactTarget_Attribute();
		$dataextension->SendableSubscriberField ->Name = "Subscriber Key"; /* This could be Email Address or Subscriber ID */
		
		$object = new SoapVar($dataextension, SOAP_ENC_OBJECT, 'DataExtension', "http://exacttarget.com/wsdl/partnerAPI");

		/* create the data extension */
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Create($request);

		/* output the results */
		echo '<pre>';
		var_dump($results);
		echo '</pre>';

} catch (SoapFault $e) {
	var_dump($e);
}
?>
<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		$dataextension = new ExactTarget_DataExtension();
		$dataextension->Name = "Locations"; // name of the data extension
		$dataextension->CustomerKey = "Locations"; // unique identifier for the data extension
		
		
		/* Create the data extension fields */
		$field1 = new ExactTarget_DataExtensionField();
		$field1->Name = "LocationID";
		$field1->FieldType = "Text";
		$field1->IsRequired = "True"; // default is false, required to be true for primary key
		$field1->IsPrimaryKey = "True";
		$field1->MaxLength = "50";
		
		$field2 = new ExactTarget_DataExtensionField();
		$field2->Name = "ImageURL";
		$field2->FieldType = "Text";
		$field2->MaxLength = "300";
		
		$field3 = new ExactTarget_DataExtensionField();
		$field3->Name = "PostDate";
		$field3->FieldType = "Date";
	
		/* add the fields to the data extension object */
		$dataextension->Fields[] = $field1 ;
		$dataextension->Fields[] = $field2 ;
		$dataextension->Fields[] = $field3 ;
		
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
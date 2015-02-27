<?php
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try {

		/* Create the Soap Client */
		$client = new ExactTargetSoapClient($wsdl, array('trace'=>1)); 
	   
		/* Set username and password here */
		$client->username = '<username>';
		$client->password = '<password>';

		/* Create Import Definition Object */
		$importdef = new ExactTarget_ImportDefinition();
		$importdef->Name = "PHP Import Definition - List";
		$importdef->CustomerKey = "PHP External Key - List"; // unique identifier for the Import Definition
		$importdef->Description = "This import definition was created through the API using PHP."; // description of the DE (optional)
	   
		//Allow errors during the import (optional)
		$importdef->AllowErrors = true; 

		// Specify the list (required)
		$list = new ExactTarget_List();
		$list->ID = "1729965"; // id for the list you want to import to
		$lo = new SoapVar($list, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");
		$importdef->DestinationObject = $lo;
	   
		// Specify the File Transfer Location (where is the file coming from?) (required)  
		$ftl= new ExactTarget_FileTransferLocation();
		$ftl->CustomerKey = "DC2F0012-E32B-47C5-BD1B-851B5393C9DF"; // unique identifier for the file transfer location
		$importdef->RetrieveFileTransferLocation = $ftl;
	   
		// Specify the UpdateType (optional)  
		$importdef->UpdateType  = ExactTarget_ImportDefinitionUpdateType::AddAndUpdate;
	   
		// Map fields (required)
		$importdef->FieldMappingType = ExactTarget_ImportDefinitionFieldMappingType::InferFromColumnHeadings;

		// Specify the File naming Specifications
		$importdef->FileSpec = "APIImport%%MONTH%%%%DAY%%%%YEAR%%%%HOUR%%.txt";
		
		// Specify the FileType
		$importdef->FileType = ExactTarget_FileType::CSV;

		// Create the Import Definition 
		$object = new SoapVar($importdef, SOAP_ENC_OBJECT, 'ImportDefinition', "http://exacttarget.com/wsdl/partnerAPI");
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);

		// Print out the results
		$results = $client->Create($request); 
		echo("<pre>");
			var_dump($results);
		echo("</pre>");

} catch (SoapFault $e) {
       var_dump($e);
}
?>
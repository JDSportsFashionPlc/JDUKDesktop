<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';
echo "<pre>";
try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
		
		echo "Start1: start it off<br>";
		
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
		echo "break2: authenticated<br>";
		
		/*% Create ExactTarget_DataExtensionObject */	
		$de = new ExactTarget_DataExtensionObject();
		$de->CustomerKey = "API"; // key for the data extension we are updating
		echo "break3: created data extension object<br>";

		/*% Create ExactTarget_APIProperty */	
		$val1key = new ExactTarget_APIProperty();
		$val1key->Name = "Email"; // primary key of the data extension
		$val1key->Value = "info@exacttarget.com"; // primary key value of the row we want to update

		/* Attach the primary key field to the data extension */
		$de->Keys[] = $val1key;
		
		$object = new SoapVar($de, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");

		/* Perform the delete */
		$request = new ExactTarget_DeleteRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Delete($request);

		/* Output the results */
		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}

/* Output the request and response */
echo "</pre>";
print "Request: \n".
$client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";

echo "complete";
?>
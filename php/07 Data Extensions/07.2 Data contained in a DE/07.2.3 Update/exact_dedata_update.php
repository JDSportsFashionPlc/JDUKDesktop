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
				
		/*% ExactTarget_DataExtensionObject */	
		$de = new ExactTarget_DataExtensionObject();
		$de->CustomerKey = "API"; // key for the data extension we are updating
		echo "break3: created data extension object<br>";

		// create an APIProperty for the primary key of the data extension
		$val1key = new ExactTarget_APIProperty();
		$val1key->Name = "Email"; // primary key of the data extension
		$val1key->Value = "info@exacttarget.com"; // primary key value of the row we want to update

		// create APIProperty for the field we want to update
		$val2key = new ExactTarget_APIProperty();
		$val2key->Name = "LastName"; // field we want to update
		$val2key->Value = "Black"; // new value for LastName

		// add the fields to the data extension
		$de->Properties[] = $val1key;
		$de->Properties[] = $val2key;
		
		$object = new SoapVar($de, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");

		/* update the data extension */
		$request = new ExactTarget_UpdateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Update($request);

		/* output the results */
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
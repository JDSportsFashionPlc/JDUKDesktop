<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{

		/*
		 *
		 * This code connects to the ExactTarget API and adds a row to a data extension.
		 *
		 * */


        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
		echo "Start1: start it off<br>";
		
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
		echo "break2: authenticated<br>";
				
		/*% ExactTarget_DataExtensionObject */	
		$de = new ExactTarget_DataExtensionObject();
		$de->CustomerKey = "ABFCB197-4E57-4823-B032-E35E81CA87C5"; //external key/unique identifier for the data extension
		echo "break3: created data extension object<br>";

		/*% ExactTarget_APIProperty */	
		$val1key = new ExactTarget_APIProperty();
		$val1key->Name = "SubscriberKey"; // name of DE field
		$val1key->Value = "info@exacttarget.com"; // value for DE field
		/*% ExactTarget_APIProperty */	
		$val2key = new ExactTarget_APIProperty();
		$val2key->Name = "linkname"; // name of DE field
		$val2key->Value = "test"; // value for DE field
		/*% ExactTarget_APIProperty */	
		$val3key = new ExactTarget_APIProperty();
		$val3key->Name = "linkurl"; // name of DE field
		$val3key->Value = "http://www.news.com/"; // value for DE field

		// add field values to the data extension
		$de->Properties[] = $val1key;
		$de->Properties[] = $val2key;
		$de->Properties[] = $val3key;
				
		$object = new SoapVar($de, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");

		// create the row of the data extension
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);

		$results = $client->Create($request);

		// output the results
		echo "<pre>";
		var_dump($results);
		echo "</pre>";

} catch (SoapFault $e) {
	var_dump($e);
	
// output the request and response	
print "Request: \n".
$client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";
}

echo "complete";
?>
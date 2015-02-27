<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
		
		// define attribute
 	    $attribute1 = new ExactTarget_PropertyDefinition();
        $attribute1->Name="Sample_PHP_1";
        $attribute1->PropertyType=ExactTarget_PropertyType::string;
	    $object1 = new SoapVar($attribute1, SOAP_ENC_OBJECT, 'PropertyDefinition', "http://exacttarget.com/wsdl/partnerAPI");        
	    $Objects = array($object1);
	    
		$clientObject = new ExactTarget_ClientID();
		$clientObject->PartnerClientKey="IP_Address_Test_1";
		$configureOptions = new ExactTarget_ConfigureOptions();  
		$configureOptions->Client = new SoapVar($clientObject, SOAP_ENC_OBJECT, 'ClientID', "http://exacttarget.com/wsdl/partnerAPI");

		// define and execute request
		$request = new ExactTarget_ConfigureRequestMsg();
		$request->Configurations=$Objects;
		$request->Action="Create";   
		$request->Options = new SoapVar($configureOptions, SOAP_ENC_OBJECT, 'ConfigureOptions', "http://exacttarget.com/wsdl/partnerAPI");
		$results = $client->Configure($request);

		// output the results
		var_dump($results);
  

} catch (SoapFault $e) {
	var_dump($e);
}

// Output the request and response
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
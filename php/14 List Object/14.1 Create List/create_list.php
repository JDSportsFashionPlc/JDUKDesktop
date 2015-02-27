<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.staging.extm.us/etframework-staging.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';

        /*% Create ExactTarget_List Obect and define the name of the list */	
        $list = new ExactTarget_List();
        $list->ListName = "hello";
        $object = new SoapVar($list, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");

		/* Create the Create Request */
        $request = new ExactTarget_CreateRequest();
        $request->Options = NULL;
        $request->Objects = array($object);

		/* Execute the Create Request */
        $results = $client->Create($request);

		/* Print out the results to the page */
        var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}

/* Print out the request and response */
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
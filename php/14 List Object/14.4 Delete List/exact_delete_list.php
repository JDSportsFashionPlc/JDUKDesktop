<?php 
echo '<pre>';
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

        /*% ExactTarget_List */	
        $list = new ExactTarget_List();
		$list->ID = "1741939"; // delete the list with this ID
        $object = new SoapVar($list, SOAP_ENC_OBJECT, 'List', "http://exacttarget.com/wsdl/partnerAPI");

		/* Create the delete request and delete the List */
        $request = new ExactTarget_DeleteRequest();
        $request->Options = NULL;
        $request->Objects = array($object);
        $results = $client->Delete($request);

		/* Output the results */
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
echo '</pre>';

?>
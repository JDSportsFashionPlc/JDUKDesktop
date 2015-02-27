<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try	{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';

		/* Create the list object that will be associated with the send */
		$list = new ExactTarget_List();
		$list->ID = "1729965";
		
		/* Create the email object that will be associated with the send */
		$email = new ExactTarget_Email();
		$email->ID = "3096692";

		/* Create the send object */
		$send = new ExactTarget_Send();
		$send->List = $list; //associate the list of subscribers
		$send->Email = $email; //associate the email
		$send->FromName = "My From Name"; // plug in the from name
		$send->FromAddress = "lwhite.nd09@gmail.com"; // plug in the from address
		$object = new SoapVar($send, SOAP_ENC_OBJECT, 'Send', "http://exacttarget.com/wsdl/partnerAPI");

		/* Create the Send */
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);

		$results = $client->Create($request);

		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}
?>
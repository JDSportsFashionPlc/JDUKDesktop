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
		
		/* Create the send definition list object that will be associated with the send */
		/* You could also create a data extension object and use that instead */
		$senddeflist = new ExactTarget_SendDefinitionList();
		$senddeflist->List = $list;
		$senddeflist->DataSourceTypeID = "List"; // in this example, we are sending to a list
		
		/* Create the email object that is associated with the send */
		$email = new ExactTarget_Email();
		$email->ID = "3096692";
		
		/* Create the send classification that is associated with this send */
		$sendclass = new ExactTarget_SendClassification();
		$sendclass->CustomerKey = "test";

		/* Create the email send definition object */
		$esd = new ExactTarget_EmailSendDefinition();
		$esd->SendDefinitionList = $senddeflist;
		$esd->Email = $email;
		$esd->Name = "API Created2";
		$esd->SendClassification = $sendclass;
		$object = new SoapVar($esd, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");

		/* Create the email send definition in ExactTarget */
		$request = new ExactTarget_CreateRequest();
		$request->Options = NULL;
		$request->Objects = array($object);
		$results = $client->Create($request);

		/* Output the results */
		var_dump($results);

} catch (SoapFault $e) {
	var_dump($e);
}
?>
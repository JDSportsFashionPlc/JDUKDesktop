<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		/* Create the Perform Request Message and set the Action to start */
        $pr = new ExactTarget_PerformRequestMsg();
        $pr->Action = "start";   
        $pr->Definitions =  array();
		$pr->Options = NULL;

		/* Create the Campaign Object and identify the key */
        $def = new ExactTarget_Campaign(); 
        $def->CustomerKey = "Birthday_Email"; // unique identifier for the program/campaign
        $pr->Definitions[] = new SoapVar($def, SOAP_ENC_OBJECT, 'Campaign', "http://exacttarget.com/wsdl/partnerAPI");
        
		/* Perform the Program/Campaign start */
        $results = $client->Perform($pr);  

		/* Output the Results */
		echo '<pre>';
        var_dump($results);
		echo '</pre>';

} catch (SoapFault $e) {
        var_dump($e);
}
?>
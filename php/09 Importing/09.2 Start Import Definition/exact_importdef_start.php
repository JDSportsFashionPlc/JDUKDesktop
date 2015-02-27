<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		// Set the Perform action to start
        $pr = new ExactTarget_PerformRequestMsg();
        $pr->Action = "start";   
        $pr->Definitions =  array();

		// create the import definition object
        $importdef = new ExactTarget_ImportDefinition();
		$importdef->CustomerKey = "PHP External Key - List"; // set the unique identifier for the import definition to be started
			
        $pr->Definitions[] = new SoapVar($importdef, SOAP_ENC_OBJECT, 'ImportDefinition', "http://exacttarget.com/wsdl/partnerAPI");
        $pr->Options = NULL;

		// Perform the start
        $results = $client->Perform($pr);  

		// Output the results
		echo '<pre>';
            var_dump($results);
		echo '</pre>';
		
		$resultObjs=$results->Results;
		foreach( $resultObjs as $obj ){
			$task = $obj->Task;
			$id = $task->ID;
			print "ID ::: "   .$id   ."\n"; 
			
		}
		
} catch (SoapFault $e) {
        var_dump($e);
}
?>
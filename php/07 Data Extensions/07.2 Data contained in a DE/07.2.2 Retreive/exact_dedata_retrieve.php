<?php 

// Report all PHP errors (see changelog)
error_reporting(E_ALL);

echo '<pre>';
require('../../00 Includes/exacttarget_soap_client .php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

 /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
    try{
        
		/* Set username and password here */
        $client->username = 'avcumr3eauaqbxkd5q99x72j'; //avcumr3eauaqbxkd5q99x72j
        $client->password = 'DSArEh9pesHqpBybmjN7N5Ka';
        
		/* Create the Retrieve request */
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "DataExtensionObject[JDStoreOpeningTimes]"; // replace DataExtensionName with the name of the data extension you are retrieving from
        $request->ObjectType= $objectType;
        
		// define the data extension fields for the retrieve
		$request->Properties[] = "id"; // data extension field
		$request->Properties[] = "name"; // data extension field
		$request->Properties[] = "EmailExportAddress"; // data extension field

		// retrieve the data
        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
        $results = $client->Retrieve($requestMsg);          
		echo 'Results:';
		echo $results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results);
		echo '<br />';

		// if there is more data avaialble (only a certain amount is returned per call), keep retreiving 
        while ($results->OverallStatus=="MoreDataAvailable") {
           $rr = new ExactTarget_RetrieveRequest();
                $rr->ContinueRequest = $results->RequestID;
				$rrm = new ExactTarget_RetrieveRequestMsg();
                $rrm->RetrieveRequest = $rr;
                $results = null;
                $results = $client->Retrieve($rrm);  
                $tempRequestID = $results->RequestID;
                print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));
                print_r('<br />');
        }
		
  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}

?>

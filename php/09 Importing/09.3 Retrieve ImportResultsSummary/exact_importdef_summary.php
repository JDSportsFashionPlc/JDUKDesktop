<?php 
echo '<pre>';
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

 /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
    try{
        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';
        
		// Create the retrieve request and specify object type
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "ImportResultsSummary"; 
        $request->ObjectType= $objectType;
		
		// Specify properties to retrieve
        $request->Properties = array("ObjectID","ID","Client.ID","ImportDefinitionCustomerKey","TaskResultID","ImportStatus","StartDate","EndDate","DestinationID","NumberSuccessful","NumberDuplicated","NumberErrors","TotalRows","ImportType");
         
		 // Create simple filter part to retireve the summary for the import we want
        $filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "TaskResultID";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("125639620");   //ID returned when starting import
		
		// assign the filter to the retrieve request
		$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI"); 

		// perform the retrieve
        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
		
		// print out the results
        $results = $client->Retrieve($requestMsg);          
		if($results->Results!=null){
            $obj=$results->Results;
                print "ID ::: "   .$obj->ID   ."\n";       
                print "ObjectID ::: "     .$obj->ObjectID   ."\n";
				print "CustomerKey ::: "     .$obj->ImportDefinitionCustomerKey   ."\n";
				print "ImportType ::: "     .$obj->ImportType   ."\n";
				print "ImportStatus ::: "     .$obj->ImportStatus   ."\n";
				print "StartDate ::: "     .$obj->StartDate   ."\n";
				print "EndDate ::: "     .$obj->EndDate   ."\n";
				print "NumberDuplicated ::: "     .$obj->NumberDuplicated   ."\n";
				print "NumberErrors ::: "     .$obj->NumberErrors   ."\n";
				print "NumberSuccessful ::: "     .$obj->NumberSuccessful   ."\n";
				print "DestinationID ::: "     .$obj->DestinationID   ."\n";
				print "TaskResultID ::: "     .$obj->TaskResultID   ."\n";
				print "\n";
            }
		
		echo 'Results:';
		var_dump($results);
		
        
  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}

// Output the request and response
print "Request: \n".   $client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";
echo '</pre>';
?>

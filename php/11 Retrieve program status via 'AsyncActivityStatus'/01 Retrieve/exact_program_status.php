<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';
		
    try{
	
		/* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
	
        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';
		
		/* Create the retrieve request and set the object type to AsyncActivityStatus */
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "AsyncActivityStatus"; 
        $request->ObjectType= $objectType;
        
		/* Define the properties we want to retrieve */
        $request->Properties=array("Program", "StepName", "ActionType", "Type", "Status", "ProcessedCount", "TotalCount", "DuplicateCount", "ErrorCount", "CustomerKey", "ErrorMsg", "CompletedDate", "StatusMessage", "ParentInteractionObjectID")  ;   
		 
		/* Create a simple filter part to filter out the status of the program we want */
		/* In this case it is ParentInteractionObjectID == 0319cb20-946d-df11-b817-00237d540dfc */
        $filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "ParentInteractionObjectID";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("0319cb20-946d-df11-b817-00237d540dfc");   //put in the InteractionObjectID returned when the program was started
        
		/* Assign the filter to the retrieve request */
		$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI"); 

		/* Execute the retreive */
        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
        $results = $client->Retrieve($requestMsg); 
		
		/* Print the results to the page */
		if($results->Results!=null){
			echo '<pre>';
			var_dump($results);
			echo '</pre>';
        }
        
  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
	echo '<pre>';
    var_dump($e);
	echo '</pre>';
}

/* Print out the request and response */
echo '<pre>';
print "Request: \n".   $client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";
echo '</pre>';

?>
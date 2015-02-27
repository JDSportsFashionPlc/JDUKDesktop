<?php 
echo '<pre>';
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try{
        /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';

		
	/* 
	 *  Retrieve a list
	 */
		// Create the retrieve request and define the object and properties we want to retrieve
        $rr = new ExactTarget_RetrieveRequest();
        $rr->ObjectType = "List";   
        $rr->Properties =  array();
        $rr->Properties[] = "ID";
        $rr->Properties[] = "ListName";    	
		$rr->Properties[] = "Category"; 
		$rr->Properties[] = "Type"; 
        $rr->Options = NULL;
		
		// Set a simple filter part to retrieve the list with a specific ID
		$filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "ID";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("1726256");   //the id of the list you want to retrieve
        
		// assign the simple filter part to the retrieve request
		$rr->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");

		// Retrieve the List
        $rrm = new ExactTarget_RetrieveRequestMsg();
        $rrm->RetrieveRequest = $rr;     		
        $results = $client->Retrieve($rrm);  
		$resultObj=$results->Results;
		
		Output the results
		echo 'Results:';
		var_dump($results);
		
		print "ID ::: "   .$resultObj->ID   ."\n";  
		print "ListName ::: "     .$resultObj->ListName   ."\n";
		print "Category ::: "     .$resultObj->Category   ."\n";
		print "Type ::: "     .$resultObj->Type   ."\n";
		
		
	/* 
	 *  Retrieve subscribers from a list
	 */
		// Create the retrieve request and define the object and properties we want to retrieve
		$request = new ExactTarget_RetrieveRequest(); 
		$objectType= "ListSubscriber"; 
        $request->ObjectType= $objectType;
        $request->Properties = array("ObjectID","SubscriberKey","CreatedDate","ModifiedDate","Client.ID","Client.PartnerClientKey","ListID","Status");
		 
		// Set a simple filter part to retrieve the subscribers on a list with a specific ID
		$filter2 = new ExactTarget_SimpleFilterPart() ;
        $filter2->Property= "ListID";
        $filter2->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter2->Value=array("1726256");   //the id of the list you want to retrieve
        
		// asign the filter to the retrieve request
		$request->Filter = new SoapVar($filter2, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
		
		// retrieve the subscribers
		$requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
		$results = $client->Retrieve($requestMsg); 
		
		// output the subscriber key for all the subscribers on the list      
		if($results->Results!=null){
            $resultObjs=$results->Results;
            foreach( $resultObjs as $obj ){   
                print "SubscriberKey ::: "     .$obj->SubscriberKey   ."\n";
            }
        }
		

} catch (SoapFault $e) {
        var_dump($e);
}
echo '</pre>';
?>
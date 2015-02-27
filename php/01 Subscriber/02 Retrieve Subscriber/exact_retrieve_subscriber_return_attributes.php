<?php 
require('../../00 Includes/exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

 /* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
    try{
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
        
		/* Create the retrieve request, the subscriber and set the properties to return */
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "Subscriber"; 
        $request->ObjectType= $objectType;
        $request->Properties = array("ID","PartnerKey","CreatedDate","Client.ID","Client.PartnerClientKey","EmailAddress","SubscriberKey","UnsubscribedDate","StatusSubscriberStatus");  
         
		 /* Create a filter to only retrieve the subscriber we want */
        $filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "SubscriberKey"; //you can filter on Subscriber Key, Subscriber ID, Email Address, etc.
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("12345678");   //subscriber key of the subscriber you want to return
		
		/* Attach the filter to the request */
		$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI"); 

		/* Retrieve the subscriber */
        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
		$results = $client->Retrieve($requestMsg);  
        
		/* Output the subscriber and their attributes */
		echo '<pre>';        
		if($results->Results!=null){
            $resultObj=$results->Results;
			print "<br /><br />";
			print "EmailAddress ::: "   .$resultObj->EmailAddress   ."<br />";       
			print "SubscriberKey ::: "     .$resultObj->SubscriberKey   ."<br />";
			print "ID ::: ".$resultObj->ID   ."<br />";
			$attributes = $resultObj->Attributes;
			foreach ($attributes as $attr) {
				print "Name: ".$attr->Name;
				print " Value: ".$attr->Value."<br />";
			}
        }
		echo '</pre>';
        
  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}

/* Output the request and response */
print "<br /><br />";
print "Request: <br />".$client->__getLastRequestHeaders()."<br />";
print "Request: <br />".$client->__getLastRequest() ."<br />";
print "Response: <br />".$client->__getLastResponseHeaders()."<br />";
print "Response: <br />".$client->__getLastResponse()."<br />";

?>

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
        
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "Subscriber"; 
        $request->ObjectType= $objectType;
        
        $request->Properties = array("ID","PartnerKey","CreatedDate","Client.ID","Client.PartnerClientKey","EmailAddress","SubscriberKey","UnsubscribedDate","StatusSubscriberStatus");  
         
		// Filter retrieve on a particular email address
        $filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "EmailAddress";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("info@exacttarget.com");   //email address to filter on
        
		$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI"); 

        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request;
        $results = $client->Retrieve($requestMsg);          
		
		/* Output the results */
		echo 'Results:';
		var_dump($results);
		
        
  } catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}

/* Output the request and response */
print "Request: \n".   $client->__getLastRequestHeaders() ."\n";
print "Request: \n".
$client->__getLastRequest() ."\n";
print "Response: \n".
$client->__getLastResponseHeaders()."\n";
print "Response: \n".
$client->__getLastResponse()."\n";

echo '</pre>';
?>

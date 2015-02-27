<?php 
require('exacttarget_soap_client.php');

$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';
	
try {
	
		/* Create the Soap Client */
        $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
		
        /* Set username and password here */
		$client->username = '<username>';
        $client->password = '<password>';
        
		/* Create the retrieve request */
        $request = new ExactTarget_RetrieveRequest();
        $objectType= "DataExtension"; /* We will be retrieving data extensions */
        $request->ObjectType= $objectType;
        
        $request->Properties = array("ObjectID","PartnerKey","CustomerKey","Name","CreatedDate","ModifiedDate","Client.ID","Description","IsSendable","IsTestable","SendableDataExtensionField.Name","SendableSubscriberField.Name","Template.CustomerKey","CategoryID","Status","IsPlatformObject");
        
		/* Create the filter to filter out the data extension we want */
        $filter1 = new ExactTarget_SimpleFilterPart() ;
        $filter1->Property= "CustomerKey";
        $filter1->SimpleOperator=ExactTarget_SimpleOperators::equals;
        $filter1->Value=array("DEKey");   //key for the data extension

		/* Attach the filter to the request */
		$request->Filter = new SoapVar($filter1, SOAP_ENC_OBJECT, 'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI"); 

		/* Retrieve */
        $requestMsg = new ExactTarget_RetrieveRequestMsg();
        $requestMsg->RetrieveRequest=$request; 
        $results = $client->Retrieve($requestMsg);   
		
		/* Print out the results */
		if($results->Results!=null){
            $resultObjs=$results->Results;
            foreach( $resultObjs as $obj ){
                print "Name ::: "   .$obj->Name   ."\n";       
                print "Sendable ::: "     .$obj->IsSendable   ."\n";
            }
        }
        
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
?>

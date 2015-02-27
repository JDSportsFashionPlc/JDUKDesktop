<?php 

require('../../00 Includes/exacttarget_soap_client.php');
$wsdl = 'https://webservice.exacttarget.com/etframework.wsdl';

try{
       /* Create the Soap Client */
       $client = new ExactTargetSoapClient($wsdl, array('trace'=>1));
	   
        /* Set username and password here */
        $client->username = '<username>';
        $client->password = '<password>';
    
		// create data extension object
        $DE = new ExactTarget_DataExtensionObject();
        $DE->CustomerKey="API"; // unique identifier to the data extension
    
		/*Update can happen only if you have PrimaryKey column in the Data Extension*/ 
        $apiPropertyKey = new ExactTarget_APIProperty();
        $apiPropertyKey->Name="Email"; // primary key of the data extension
        $apiPropertyKey->Value="info@exacttarget.com"; // value of the primary key for the row we want to add/update
        $DE->Keys[] = $apiPropertyKey; // add primary key field to the data exension

        $apiProperty1 =new ExactTarget_APIProperty();
        $apiProperty1->Name="LastName"; // field we want to add/update
        $apiProperty1->Value="Black"; // new value for LastName
        $DE->Properties=array($apiProperty1); // add field to data extension
        
		$object1 = new SoapVar($DE, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");
		
         /*% Create the ExactTarget_SaveOption Object */ 
         $saveOption = new ExactTarget_SaveOption();                
         $saveOption->PropertyName="DataExtensionObject";
         $saveOption->SaveAction=ExactTarget_SaveAction::UpdateAdd; // set the SaveAction to add/update

		 // Apply options and object to request and perform update of data extension
		 $updateOptions = new ExactTarget_UpdateOptions();
         $updateOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");
         $request->Options = new SoapVar($updateOptions, SOAP_ENC_OBJECT, 'UpdateOptions', "http://exacttarget.com/wsdl/partnerAPI");
         $request = new ExactTarget_CreateRequest();
         $request->Options = $updateOptions;
         $request->Objects = array($object1);
         $results = $client->Update($request);
		 
		 /* Output the results */
		var_dump($results);
    
    } catch (SoapFault $e) {
    var_dump($e);
    }
	
	// Output the request and response
    Print "Request: \n".
    $client->__getLastRequestHeaders() ."\n";
    print "Request: \n".
    $client->__getLastRequest() ."\n";
    print "Response: \n".
    $client->__getLastResponseHeaders()."\n";
    print "Response: \n".
    $client->__getLastResponse()."\n";
?>
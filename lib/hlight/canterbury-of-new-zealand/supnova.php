<?
	// DB
		$dh="localhost";
		$dn="jdblog_wp";
		$du="jdblog_user";
		$dbf="adidas-supernova";
		$dp="YBvbGjqhEbuf";
		$con=mysql_connect($dh,$du,$dp);
		mysql_select_db("adidas-supernova", $con);

	// VARS
		$siteURL="http://cs-ext.jdsports.co.uk/page/caterbury-of-new-zealand/";
		$FormEmail=mysql_real_escape_string($_POST['email']);
		$FormName=mysql_real_escape_string($_POST['name']);
		$Updates=mysql_real_escape_string($_POST['updates']);	
		$date=date("Y-m-d H:i:s");
		$ip=$_SERVER['REMOTE_ADDR'];

	// F VALIDATION
		if($FormEmail==""){header("Location: ".$siteURL."");die;}
		if($FormName==""){header("Location: ".$siteURL."");die;}

	// SQL
	// CHECK EXISTING OR INSERT AS NEW
	$r = mysql_query("SELECT * FROM `".$dn."`.`".$dbf."` WHERE `FormEmail` = '".$FormEmail."'");
	
	if (mysql_affected_rows()==0) {
		
		// NO EMAIL EXISTS SO ADD NEW USER TO DATABASE
		$r=mysql_query("
			INSERT INTO `".$dn."`.`".$dbf."`
			(`id`, `FormEmail`, `FormName`, `Stamp`, `ip`)
			VALUES (NULL, '".$FormEmail."', '".$FormName."', '".$date."', '".$ip."');
		");
		
		// FORM
		echo '<script type="text/javascript">alert("Thanks, your entry was saved!");window.location="'.$siteURL.'"</script>';
	
	} else {
		
		// USERS EXISTS SO REDIRECT
		echo '<script type="text/javascript">alert("Thanks, but we already have your email on file!");window.location="'.$siteURL.'"</script>';
	
	}
?>
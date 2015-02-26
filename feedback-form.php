<?
	// DB
		$dh="localhost";
		$dn="jdblog_wp";
		$du="jdblog_user";
		$dbf="feedback-forms";
		$dp="YBvbGjqhEbuf";
		$con=mysql_connect($dh,$du,$dp);
		mysql_select_db("feedback-forms", $con);

	// VARS
		$siteURL=mysql_real_escape_string($_POST['siteURL']);
		$FormEmail=mysql_real_escape_string($_POST['FormEmail']);
		$FormFeedback=mysql_real_escape_string($_POST['FormFeedback']);
		$FormCampaign=mysql_real_escape_string($_POST['FormCampaign']);
		$FormRefer=mysql_real_escape_string($_POST['FormRefer']);
		$date=date("Y-m-d H:i:s");
		$ip=$_SERVER['REMOTE_ADDR'];

	// F VALIDATION
		if($FormEmail==""){
			header("Location: http://www.jdsports.co.uk/page/NPS-Feedback-Form/?error");
			die;
		} else {}

	// SQL
	// CHECK EXISTING OR INSERT AS NEW
	$r = mysql_query("SELECT * FROM `".$dn."`.`".$dbf."` WHERE `FormEmail` = '".$FormEmail."'");
	
	if (mysql_affected_rows()==0) {
		
		// NO EMAIL EXISTS SO ADD NEW USER TO DATABASE
		$r=mysql_query("
			INSERT INTO `".$dn."`.`".$dbf."`
			(`FormEmail`, `FormFeedback`, `FormCampaign`, `Stamp`, `FormRefer`, `IP`)
			VALUES ('".$FormEmail."', '".$FormFeedback."', '".$FormCampaign."', '".$date."', `".$FormRefer."`, '".$ip."');
		");
		
		// FORM
		echo '<script type="text/javascript">alert("Thanks, your entry was saved!");window.location="'.$siteURL.'?thanks-added"</script>';
	
	} else {
		
		// USERS EXISTS SO REDIRECT
		echo '<script type="text/javascript">alert("Thanks, but we already have your email on file!");window.location="'.$siteURL.'?thanks-exists"</script>';
	
	}
?>


<?php
  
 // var_dump($_POST);
  
  $name = isset($_FILES['file']['name']) ? $_FILES['file']['name'] : '';

  $tmp_name = isset($_FILES["file"]["tmp_name"]) ? $_FILES["file"]["tmp_name"] : '';  

  $path = '/var/www/furnitura/uploads/';

  $email = isset($_POST['email']) ? $_POST['email'] : '';

  $telephone = isset($_POST['telephone']) ? $_POST['telephone'] : '';

  $text = isset($_POST['text']) ? nl2br($_POST['text']) : '';

  $title = 'Сайт';

  $strSid = strtoupper(uniqid(time()));  

  if ( $name != '' ) {
  	$filedir = $path . $name;
  } else { $filedir = ''; }

  if ($tmp_name != '') {
  	move_uploaded_file($tmp_name, $path . $name); //echo 'Файл загружен';
  } else { 
  		echo ' Файл не загружен '; 
	}

  $message = 'Email: ' . $email . '; Tel: ' . $telephone . ";\n\n\n\n" . $text;   

function XMail( $from, $to, $subj, $text, $filename)
	{
	
	$un        = strtoupper(uniqid(time()));
	$head      = "From: $from;\n";
	$head     .= "To: $to\n";
	$head     .= "Subject: $subj\n";
	$head     .= "Reply-To: $from\n";
	$head     .= "Mime-Version: 1.0\n";
	$head     .= "Content-Type:multipart/mixed;";
	$head     .= "boundary=\"----------" . $un . "\"\n\n";		

	if ($filename != '') {
		$f         = fopen($filename,"rb");
		$zag       = "------------".$un."\n\r";	
		$zag      .= "$text\n";
		$zag      .= "------------".$un."\n";
		$zag      .= "Content-Type: application/octet-stream;";
		$zag      .= "name=\"".basename($filename)."\"\n";
		$zag      .= "Content-Transfer-Encoding:base64\n";
		$zag      .= "Content-Disposition:attachment;";
		$zag      .= "filename=\"".basename($filename)."\"\n\n";
		$zag      .= chunk_split(base64_encode(fread($f,filesize($filename)))) . "\n";
	} else { $zag		= "------------".$un."\n\r";	
			 $zag      .= "$text\n";
			 $zag      .= "------------".$un."\n"; }
	
	/*
	два и более файла отправить

	$zag      .= "------------".$un."\n";
	$zag      .= "Content-Type: application/octet-stream;";
	$zag      .= "name=\"".basename($filename2)."\"\n";
	$zag      .= "Content-Transfer-Encoding:base64\n";
	$zag      .= "Content-Disposition:attachment;";
	$zag      .= "filename=\"".basename($filename2)."\"\n\n";
	$zag      .= chunk_split(base64_encode(fread($f2,filesize($filename2))))."\n";

	*/	
	
	$msg = mail($to, $subj, $zag, $head, '-f -oi' . $from);
	if ($msg) {
  		echo "Сообщение отправлено";
  	} else {
  		echo "Сообщение не отправлено";}	
}

XMail('koral_999@mail.com', 'ilya-vov@mail.ru', $title, $message, $filedir);

?>



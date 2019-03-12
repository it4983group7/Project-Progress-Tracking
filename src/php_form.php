<?php

if (isset($_FILES['file']))
{
	$name_file = $_FILES['file'] ['name'];
	$tmp_name = $_FILES['file'] ['tmp_name'];
	$local_image = "uploaded/";
	$upload = move_uploaded_file($tmp_name,$local_image.$name_file);

//------the following can be taken out - used for testing--------

	if ($upload)
	{
		echo $name_file 'has been uploaded successfully';
	}
}
?> //end php
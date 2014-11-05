<?php 
//Incluyendo clases class
require('class.php');
//Generando herencia
$class=new constante();

$usuario=$_POST['txt1'];

$pass=$_POST['txt2'];

	$query = $class->consulta("SELECT * FROM US WHERE usu='$usuario' and pass='$pass'");
	$res=0;
	while($row=$class->fetch_array($query))
	{
		//print$row[0];
		print('1');
		$res=1;	
	}    
    if ($res==0) {
    	print('0'); 	
    }
?>


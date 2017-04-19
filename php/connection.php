<?php 
	$mysqli	= new mysqli("127.0.0.1" , "root", "", "reserva_estadio");
	if ($mysqli->connect_errno){
		echo "<p>Coneccion MySQL fallida: (".$mysqli->connect_errno .")".$mysqli->connect_error ."</p>";
		echo $mysqli-host_info ."\n";
	}
 ?>

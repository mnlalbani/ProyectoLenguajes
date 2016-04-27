<?php 
	$mysqli	= new mysqli("localhost" , "root", "", "reserva_estadio");
	if ($mysqli->connect_errno){
		echo "<p>Coneccion MySQL fallida: (".$mysqli->connect_errno .")".$mysqli->connect_error ."</p>";
		echo $mysqli-host_info ."\n";
	}
 ?>
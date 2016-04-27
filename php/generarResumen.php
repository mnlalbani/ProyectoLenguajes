<?php 
	include_once("conexion.php");

	$sql = "SELECT * FROM ticket ORDER BY lugar";
	$result = $mysqli->query($sql);

 ?>
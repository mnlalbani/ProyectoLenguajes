<?php 
	include('connection.php');

	$sql = "SELECT SUM(`valor`) FROM ticket_prueba WHERE confirmado = 1";
	$result = $mysqli->query($sql);
	while($row = mysqli_fetch_array($result)) {
		echo $row[0];
	}	
	$mysqli->close();
 ?>
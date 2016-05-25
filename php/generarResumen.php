<?php 
include("connection.php");
if (isset($_GET['equipo'])) {
	$sql = "SELECT * FROM ticket_prueba WHERE equipo_1 = '$_GET[equipo]' AND confirmado = 1";
	$result = $mysqli->query($sql);
	while($row = mysqli_fetch_array($result)) {
	echo "<tr '><td>".$row['ticketid']."</td><td>".$row['cedula']."</td><td>".$row['nombre']."</td><td>".$row['apellido']."</td><td>".$row['telefono']."</td><td>".$row['correo']."</td></tr>";
}
$mysqli->close();
}

?>
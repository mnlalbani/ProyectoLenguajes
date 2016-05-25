<?php 
include("connection.php");
if (isset($_GET['equipo'])) {
	$sql = "SELECT * FROM ticket_prueba WHERE equipo_1 = '$_GET[equipo]' AND confirmado != 1";
	$result = $mysqli->query($sql);
	while($row = mysqli_fetch_array($result)) {
	echo "<tr colspan='10'><td><a href='' class='modTicket' tipo='confirmar' value=".$row['ticketid']."><i class='material-icons iconCheck iconAdmin'>check_circle</i></a></td>
				  	<td><a href='' class='modTicket' tipo='cancelar' value=".$row['ticketid']."><i class='material-icons iconCancel iconAdmin'>cancel</i></a></td><td><a href='/proyectolenguajes/modificar.php?equipo=".$row['equipo_1']."&codigo=".$row['ticketid']."&op=modificar'  equipo=".$row['equipo_1']."tipo='editar' value=".$row['ticketid']."><i class='material-icons iconMod iconAdmin'>edit</i></a></td><td>".$row['ticketid']."</td><td>".$row['cedula']."</td><td>".$row['nombre']."</td><td>".$row['apellido']."</td><td>".$row['telefono']."</td><td>".$row['correo']."</td></tr>";
}
$mysqli->close();
}

?>
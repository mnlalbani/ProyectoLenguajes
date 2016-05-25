<?php 
//var_dump($_POST);
	include_once("connection.php");
	$sql = "SELECT * FROM ticket_prueba WHERE ticketid = '$_POST[ticketId]'";
	$result = $mysqli->query($sql);
	$a = mysqli_num_rows($result);
	if ($a > 0) {
		echo "Asiento ocupado, seleccione otro";
	}
	else{
	$sql = "INSERT INTO ticket_prueba (ticketid,equipo_1,equipo_2,hora,lugar,valor,zonaElegida,asientoElegido,cedula,nombre,apellido,telefono,correo) VALUES('{$mysqli->real_escape_string($_POST['ticketId'])}','{$mysqli->real_escape_string($_POST['equipo_1'])}','{$mysqli->real_escape_string($_POST['equipo_2'])}','{$mysqli->real_escape_string($_POST['hora'])}','{$mysqli->real_escape_string($_POST['lugar'])}','{$mysqli->real_escape_string($_POST['precio'])}','{$mysqli->real_escape_string($_POST['zonaElegida'])}','{$mysqli->real_escape_string($_POST['asientoElegido'])}','{$mysqli->real_escape_string($_POST['cedula'])}','{$mysqli->real_escape_string($_POST['nombre'])}','{$mysqli->real_escape_string($_POST['apellido'])}','{$mysqli->real_escape_string($_POST['telefono'])}','{$mysqli->real_escape_string($_POST['correo'])}')";
	$insert = $mysqli->query($sql);

		echo "Ticket registrado";

	}	


 ?>
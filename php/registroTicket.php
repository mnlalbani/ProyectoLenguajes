<?php 
include_once("connection.php");
$sql = "INSERT INTO ticket (ticketid,equipo_1,equipo_2,hora,lugar,valor,zonaElegida,asientoElegido,cedula,nombre,apellido,telefono,correo) VALUES('{$mysqli->real_escape_string($_POST['ticketId'])}','{$mysqli->real_escape_string($_POST['equipo_1'])}','{$mysqli->real_escape_string($_POST['equipo_2'])}','{$mysqli->real_escape_string($_POST['hora'])}','{$mysqli->real_escape_string($_POST['lugar'])}','{$mysqli->real_escape_string($_POST['valor'])}','{$mysqli->real_escape_string($_POST['zonaElegida'])}','{$mysqli->real_escape_string($_POST['asientoElegido'])}','{$mysqli->real_escape_string($_POST['cedula'])}','{$mysqli->real_escape_string($_POST['nombre'])}','{$mysqli->real_escape_string($_POST['apellido'])}','{$mysqli->real_escape_string($_POST['telefono'])}','{$mysqli->real_escape_string($_POST['correo'])}')";
//var_dump($_POST);
$insert = $mysqli->query($sql);
$data = array();
$data['success'] = true;
$data['message'] = "Ticket registrado";
echo json_encode($data);
 ?>
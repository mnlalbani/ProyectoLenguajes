<?php 
	include_once("connection.php");
	if (isset($_POST['tipo'])){
		if ($_POST['tipo'] == 'confirmar') {
			$sql = ("UPDATE ticket_prueba SET confirmado=1 WHERE ticketid='".$_POST['codigo']."'");
			$result = $mysqli->query($sql);
			echo ("Ticket Confirmado");
		}
		if ($_POST['tipo'] == 'modificar') {
			echo "Por hacer";
		}if ($_POST['tipo'] == 'cancelar') {
			$sql = ("DELETE FROM ticket_prueba WHERE ticketid='".$_POST['codigo']."'");
			$result = $mysqli->query($sql);
			echo ("Ticket Cancelado");
		}
	}
 ?>
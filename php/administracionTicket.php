<?php 
	include_once("connection.php");
	//var_dump($_POST);
	if (isset($_POST['op'])){
		if ($_POST['op'] == 'confirmar') {
			$sql = ("UPDATE ticket SET confirmado=1 WHERE ticketid='".$_POST['ticket_id']."'");
			$result = $mysqli->query($sql);
			echo ("Ticket Confirmado");
		}
		if ($_POST['op'] == 'modificar') {
			echo "Por hacer";
		}if ($_POST['op'] == 'cancelar') {
			$sql = ("DELETE FROM ticket WHERE ticketid='".$_POST['ticket_id']."'");
			$result = $mysqli->query($sql);
			echo ("Ticket Cancelado");
		}
	}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<script type="text/javascript" src="js/jquery-2.2.1.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--<meta http-equiv="refresh" content="10">-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="shortcut icon" href="img/favicon.ico"/>
	<script type="text/javascript" src="js/main.js"></script>
	<title>Document</title>
</head>
<body>
	<div class="nav">
			<ul>
				<li id="juego1"><a href="">Aguilas vs Cardenales</a></li>
				<li id="juego2"><a href="">Magallanes vs Tiburones</a></li>
				<li id="juego3"><a href="">Leones vs Caribes</a></li>
				<li id="juego4"><a href="">Bravos vs Tigres</a></li>
				<li id="administracion"><a href="">Administración</a></li>
			</ul>
		</div>
		<div class="containerResumen">
			<table class="tablaLeyenda tablaResumen">
				<tr>
					<th colspan="7"><p class="headerText">Resumen De Ventas</p></th>
				</tr>
				<tr>
					<th>Ticked ID</th>
					<th>Juego</th>
					<th>Cedula</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Teléfono</th>
					<th>Correo</th>
				</tr>
				<?php 

				include("php/connection.php");


				$sql = "SELECT * FROM ticket";
				$result = $mysqli->query($sql);

				while($row = mysqli_fetch_array($result)) {
					echo "<tr class='trBorder'><td>".$row['ticketid']."</td><td>".$row['equipo_1']."</td><td>".$row['cedula']."</td><td>".$row['nombre']."</td><td>".$row['apellido']."</td><td>".$row['telefono']."</td></tr>";
				}

				 ?>
			</table>	
		</div>
</body>
</html>
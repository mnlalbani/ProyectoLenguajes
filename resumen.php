<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="js/jquery-2.2.1.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="theme-color" content="#009688">
	<!--<meta http-equiv="refresh" content="10">-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="shortcut icon" href="img/favicon.ico"/>
	<script type="text/javascript" src="js/main.js"></script>
	<title>Resumen de Ventas</title>
</head>
<body>
	<div class="containerResumen">
	<div class="nav navResumen">
			<ul>
				<li id="volver"><a href="administracion.php"><i class="material-icons">arrow_back</i>Volver</a></li>
			</ul>
	</div>	
	<div class="fondoResumen">
		<div class="headerResumen">
			<h1>Resumen de Ventas</h1>
		</div>
		<div class="sideNav">
			<h1>Juegos</h1>
			<ul>
				<li><a href="?equipo=Aguilas del Zulia">Cardenales vs Aguilas</a></li>
				<li><a href="?equipo=Navegantes del Magallanes">Tiburones vs Magallanes</a></li>
				<li><a href="?equipo=Leones del Caracas">Caribes vs Leones</a></li>
				<li><a href="?equipo=Bravos de Margarita">Tigres vs Bravos</a></li>
			</ul>
		</div>
		<div class="contenedorTablaResumen">
			<table class="tablaResumen">
				<tr class="filaNombre">
					<th  class="headerTable" ><p id="nombreJuego"><?php include('php/nombreEquipo.php') ?></p></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th  class="headerTable ganancia">Ganancia Total:<?php include('php/totales.php') ?></th>
				</tr>
				<tr class="filaNombre dataTabla">
					<th class="nombreColumna">Ticked ID</th>
					<th class="nombreColumna">Cedula</th>
					<th class="nombreColumna">Nombre</th>
					<th class="nombreColumna">Apellido</th>
					<th class="nombreColumna">Teléfono</th>
					<th class="nombreColumna">Correo</th>
				</tr>
					<?php include('php/generarResumen.php') ?>
				  <tr class="filaNombre">
				  	<th colspan="10" class="nombreColumna controlPagina">
				  		<p>1-10 de 100
					  		<a href=""><i class="material-icons">chevron_left</i></a>
							<a href=""><i class="material-icons">chevron_right</i></a>
						</p>
					</th>
				  </tr>
			</table>
		</div>
	</div>
</div>

	<script type="text/javascript" src="js/raphael-min.js"></script>
	<script type="text/javascript" src="js/map.js"></script>
</body>
</html>
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
	<title>Administración</title>
</head>
<body>
<div class="containerAdministracion">
		<!--<div class="track">
			<form method="POST" action="" id="formAdministracion">
				<div class="contenedorCampo">
				<p>Administración de Ticket</p>
					<label for="ticket_id">Ticket ID: </label>
						<input type="text" name="ticket_id" id="ticket_id" class="inputText"placeholder="Ticket ID" required></input>
				</div>
				<button  class="button" type="submit" name="confirmar" value="confirmar">Confirmar Ticket</button>
				<button  class="button" type="submit" name="modificar" value="modificar">Modificar Ticket</button>
				<button  class="button" type="submit" name="cancelar" value="cancelar">Cancelar Ticket</button>
			</form>
			<div id="response"></div>
		</div>
		<div class="resumen">
			<p>Resumen de Ventas</p>
			<button  class="button" id="gResumen">Generar Resumen</button>
		</div>-->
	<div class="nav navResumen">
			<ul>
				<li id="volverA"><a href="index.php"><i class="material-icons">arrow_back</i>Volver</a></li>
				<li id="gResumen"><a href="resumen.php"><i class="material-icons">arrow_forward</i>Resumen de Ventas</a></li>
			</ul>
	</div>	
	<div class="fondoResumen">
		<div class="headerResumen">
			<h1>Administración</h1>
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
					<th colspan="10"  class="headerTable" ><p id="nombreJuego"><?php include('php/nombreEquipo.php') ?></p></th>
				</tr>
				<tr class="filaNombre">
					<th class="nombreColumna botoneraAdmin">Confirmar</th>
					<th class="nombreColumna botoneraAdmin">Cancelar</th>
					<th class="nombreColumna botoneraAdmin">Editar</th>
					<th class="nombreColumna">Ticked ID</th>
					<th class="nombreColumna">Cedula</th>
					<th class="nombreColumna">Nombre</th>
					<th class="nombreColumna">Apellido</th>
					<th class="nombreColumna">Teléfono</th>
					<th class="nombreColumna">Correo</th>
				</tr>
				  <?php include('php/resumenTicket.php') ?>
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
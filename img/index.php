<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="js/jquery-2.2.1.js"></script>
	<meta charset="utf-8">
	<meta http-equiv="refresh" content="10">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="shortcut icon" href="favicon.ico"/>
	<script type="text/javascript" src="js/main.js"></script>
	<title>Reserva Estadio</title>
</head>
<body>
	<div class="container">
		<div class="nav">
			<ul>
				<li><a href="index.php">Juego 1</a></li>
				<li><a href="">Juego 2</a></li>
				<li><a href="">Juego 3</a></li>
				<li><a href="">Juego 4</a></li>
				<li><a href="administracion.php">Administración</a></li>
			</ul>
		</div>
		<div class="stadium" id="map"></div>
		<!-- Raphael y Script de Estadio -->
			<script type="text/javascript" src="js/raphael-min.js"></script>
			<script type="text/javascript" src="js/map.js"></script>
		<!-- Raphael y Script de Estadio -->
		<div class="ticket">
			<p>Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Equipo 1 vs Equipo 2</p>
				<input type="text" value="Equipo 1" id="equipo_1" hidden></input>
				<input type="text" value="Equipo 2" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Lugar</p>
				<input type="text" value="lugar" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>
					<p>Zona</p>
					<select>
						<option>Asiento</option>
					</select>
				<hr>
				<p>Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula del Cliente" onkeypress="validar_cedula()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre del Cliente" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido del Cliente" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono del Cliente" onkeypress="validar_telefono()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo del Cliente" required></input>
				</div>
				<input type="submit" value="Imprimir"></input>
				<input type="reset"></input>
			</form>
		</div>
		
	</div>

</body>
</html>
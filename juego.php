<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<div class="containerJuego1">
		<div class="stadium" id="map"></div>
			<script type="text/javascript" src="js/raphael-min.js"></script>
			<script type="text/javascript" src="js/map.js"></script>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Aguilas vs Tiburones</p>
				<input type="text" value="Equipo 1" id="equipo_1" hidden></input>
				<input type="text" value="Equipo 2" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Luis Aparicio El Grande</p>
				<input type="text" value="lugar" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>

				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required ></input>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
				</div>
			</form>
		</div>
</div>

<div class="containerJuego2">
		<div class="stadium">
			<p>Prueba juego 2</p>
		</div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Magallanes vs Tiburones</p>
				<input type="text" value="Equipo 1" id="equipo_1" hidden></input>
				<input type="text" value="Equipo 2" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Estadio José Bernardo Pérez</p>
				<input type="text" value="lugar" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>

				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required ></input>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
				</div>
			</form>
		</div>
</div>

<div class="containerJuego3">
		<div class="stadium">
			<p>Prueba juego 3</p>
		</div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Leones del Caracas vs Tiburones</p>
				<input type="text" value="Equipo 1" id="equipo_1" hidden></input>
				<input type="text" value="Equipo 2" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Estadio Universitario de Caracas</p>
				<input type="text" value="lugar" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>

				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required ></input>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
				</div>
			</form>
		</div>
</div>

<div class="containerJuego4">
		<div class="stadium">
			<p>Prueba juego 4</p>
		</div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Bravos vs Tiburones</p>
				<input type="text" value="Equipo 1" id="equipo_1" hidden></input>
				<input type="text" value="Equipo 2" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Stadium Nueva Esparta</p>
				<input type="text" value="lugar" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>

				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required ></input>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required></input>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
				</div>
			</form>
		</div>
</div>

<div class="containerAdministracion">
		<div class="track">
			<form method="post" action="" onsubmit="">
				<div class="contenedorCampo">
					<label for="ticket_id">Ticket ID: </label>
						<input type="text" name="ticket_id" id="ticket_id" placeholder="Ticket ID" required></input>
				</div>
				<button  class="button" >Confirmar Ticket</button>
				<button  class="button" >Modificar Ticket</button>
				<button  class="button" >Cancelar Ticket</button>
			</form>
		</div>
		<div class="resumen">
			<p>Resumen de Ventas</p>
			<button  class="button" >Generar Resumen</button>
		</div>
</div>

</body>
</html>
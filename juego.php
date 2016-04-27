<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<div class="containerJuego1">
		<div class="stadium" id="estadio_aguilas"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Aguilas del Zulia vs Cardenales de Lara</p>
				<input type="text" value="Aguilas del Zulia" id="equipo_1" hidden></input>
				<input type="text" value="Cardenales de Lara" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Luis Aparicio El Grande</p>
				<input type="text" value="Luis Aparicio El Grande" id="lugar" hidden></input>
				<p>Valor</p>
				<input type="text" value="200" id="costo" hidden></input>
				<hr>
					<p id="zonaAsiento">Zona Asiento</p>
					<input type="text" name="zonaElegida" id="zonaElegida" hidden value="">
					<input type="text" name="asientoElegido" id="asientoElegido" hidden value="">
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
		<div class="stadium" id="estadio_magallanes"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Navegantes del Magallanes vs Tiburones de La Guaira</p>
				<input type="text" value="Navegantes del Magallanes" id="equipo_1" hidden></input>
				<input type="text" value="Tiburones de La Guaira" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Estadio José Bernardo Pérez</p>
				<input type="text" value="Estadio José Bernardo Pérez" id="lugar" hidden></input>
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
		<div class="stadium" id="estadio_leones"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Leones del Caracas vs Caribes de Oriente</p>
				<input type="text" value="Leones del Caracas" id="equipo_1" hidden></input>
				<input type="text" value="Caribes de Oriente" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Estadio Universitario de Caracas</p>
				<input type="text" value="Estadio Universitario de Caracas" id="lugar" hidden></input>
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
		<div class="stadium" id="estadio_bravos"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;">
				<p>Bravos de Margarita vs Tigres de Aragua</p>
				<input type="text" value="Bravos de Margarita" id="equipo_1" hidden></input>
				<input type="text" value="Tigres de Aragua" id="equipo_2" hidden></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden></input>
				<p>Stadium Nueva Esparta</p>
				<input type="text" value="Stadium Nueva Esparta" id="lugar" hidden></input>
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
				<p>Administración de Ticket</p>
					<label for="ticket_id">Ticket ID: </label>
						<input type="text" name="ticket_id" id="ticket_id" class="inputText"placeholder="Ticket ID" required></input>
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
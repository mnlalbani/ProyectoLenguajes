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
			<form method="POST" action="" id="aguilasCardenales" class="formEstadio">
				<p>Cardenales de Lara vs Aguilas del Zulia</p>
				<input type="text" value="Aguilas del Zulia" id="equipo_1" hidden name="equipo_1"></input>
				<input type="text" value="Cardenales de Lara" id="equipo_2" hidden name="equipo_2"></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" name="hora" id="hora" hidden></input>
				<p>Luis Aparicio El Grande</p>
				<input type="text" value="Luis Aparicio El Grande" id="lugar" name="lugar" hidden></input>
				<p id="precioZona">Precio</p>
				<input type="text" value="200" id="precio" name="precio" hidden></input>
				<hr>
					<p id="zonaAsiento">Zona Asiento</p>
					<input type="text" name="zonaElegida" id="zonaElegida" hidden >
					<input type="text" name="asientoElegido" id="asientoElegido" hidden >
					<input type="text" hidden id="ticketId" name="ticketId" ></input>
				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required maxlength="9"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required maxlength="12"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
						<div class="errorText">error</div>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit" id="imprimir">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
					<div id="response"></div>
				</div>
			</form>
		</div>
		<div class="leyenda">
			<table class="tablaLeyenda tablaLeyendaAguilas">
				<tr>
					<th colspan='4'><p class="headerText">Leyenda</p></th>
				</tr>
				<tr>
					<td><div class="Grada"></div></td>
					<td>Grada</td>
					<td><div class="SillaArriba"></div></td>
					<td>Sillas Arriba</td>
				</tr>
				<tr>
					<td><div class="LateralSuperior"></div></td>
					<td>Lateral Superior</td>
					<td><div class="LateralInferior"></div></td>
					<td>Lateral Inferior</td>
				</tr>
				<tr>
					<td><div class="Oficial"></div></td>
					<td>Oficial</td>
					<td><div class="TribunaEconomica"></div></td>
					<td>Tribuna Económica</td>
				</tr>
				<tr>
					<td><div class="Vip"></div></td>
					<td colspan="4">Vip</td>
				</tr>
			</table>	
		</div>
</div>

<div class="containerJuego2">
		<div class="stadium" id="estadio_magallanes"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" onsubmit=" return imprimir(); false;" class="formEstadio">
				<p>Tiburones de La Guaira vs Navegantes del Magallanes</p>
				<input type="text" value="Navegantes del Magallanes" id="equipo_1" hidden name="equipo_1"></input>
				<input type="text" value="Tiburones de La Guaira" id="equipo_2" hidden name="equipo_2"></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden name="hora"></input>
				<p>Estadio José Bernardo Pérez</p>
				<input type="text" value="Estadio José Bernardo Pérez" id="lugar" hidden name="lugar"></input>
				<p id="precioZona">Precio</p>
				<input type="text" value="200" id="precio" hidden name="precio"></input>
				<hr>
					<p id="zonaAsiento">Zona Asiento</p>
					<input type="text" name="zonaElegida" id="zonaElegida" hidden >
					<input type="text" name="asientoElegido" id="asientoElegido" hidden >
					<input type="text" hidden id="ticketId" name="ticketId" required></input>
				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required maxlength="9"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required maxlength="12"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
						<div class="errorText">error</div>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit" id="imprimir">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
					<div id="response"></div>
				</div>
			</form>
		</div>
		<div class="leyenda">
			<table class="tablaLeyenda tablaLeyendaMagallanes">
				<tr>
					<th colspan='4'><p class="headerText">Leyenda</p></th>
				</tr>
				<tr>
					<td><div class="TribunaCentral"></div></td>
					<td>Tribuna Central</td>
					<td><div class="Palco"></div></td>
					<td>Palco</td>
				</tr>
				<tr>
					<td><div class="TribunaLateral"></div></td>
					<td>Tribunas Laterales</td>
					<td><div class="TribunaPrincipal"></div></td>
					<td>Tribuna Principal</td>
				</tr>
				<tr>
					<td><div class="Vip"></div></td>
					<td>Vip</td>
					<td><div class="LateralBajo"></div></td>
					<td>Lateral Bajo</td>
				</tr>
				<tr>
					<td><div class="Terreno"></div></td>
					<td>Terreno</td>
					<td><div class="TribunaPreferencial"></div></td>
					<td>Tribuna Preferencial</td>
				</tr>
				<tr>
					<td><div class="Grada"></div></td>
					<td colspan="4">Grada</td>
				</tr>
			</table>	
		</div>
</div>

<div class="containerJuego3">
		<div class="stadium" id="estadio_leones"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" class="formEstadio">
				<p>Caribes de Oriente vs Leones del Caracas</p>
				<input type="text" value="Leones del Caracas" id="equipo_1" hidden name="equipo_1"></input>
				<input type="text" value="Caribes de Oriente" id="equipo_2" hidden name="equipo_2"></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden name="hora"></input>
				<p>Estadio Universitario de Caracas</p>
				<input type="text" value="Estadio Universitario de Caracas" id="lugar" hidden name="lugar"></input>
				<p id="precioZona">Precio</p>
				<input type="text" value="200" id="precio" hidden name="precio"></input>
				<hr>
					<p id="zonaAsiento">Zona Asiento</p>
					<input type="text" name="zonaElegida" id="zonaElegida" hidden >
					<input type="text" name="asientoElegido" id="asientoElegido" hidden >
					<input type="text" hidden id="ticketId" name="ticketId" required></input>
				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required maxlength="9"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required maxlength="12"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
						<div class="errorText">error</div>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit" id="imprimir">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
					<div id="response"></div>
				</div>
			</form>
		</div>
		<div class="leyenda">
			<table class="tablaLeyenda tablaLeyendaLeones">
				<tr>
					<th colspan='4'><p class="headerText">Leyenda</p></th>
				</tr>
				<tr>
					<td><div class="SillaSuperior"></div></td>
					<td>Sillas Superiores</td>
					<td><div class="SillaInferior"></div></td>
					<td>Sillas Inferiores</td>
				</tr>
				<tr>
					<td><div class="TribunaLateralA"></div></td>
					<td>Tribuna Lateral A</td>
					<td><div class="TribunaLateralB"></div></td>
					<td>Tribuna Lateral B</td>
				</tr>
				<tr>
					<td><div class="TribunaLateralC"></div></td>
					<td>Tribuna Lateral C</td>
					<td><div class="Grada"></div></td>
					<td>Grada</td>
				</tr>
				<tr>
					<td><div class="Terreno"></div></td>
					<td>Terreno</td>
					<td><div class="Palco"></div></td>
					<td>Palco</td>
				</tr>
			</table>	
		</div>
</div>

<div class="containerJuego4">
		<div class="stadium" id="estadio_bravos"></div>
		<div class="ticket">
			<p class="headerText">Datos del juego - Ticket</p>
			<form method="post" action="" class="formEstadio">
				<p>Tigres de Aragua vs Bravos de Margarita</p>
				<input type="text" value="Bravos de Margarita" id="equipo_1" hidden name="equipo_1"></input>
				<input type="text" value="Tigres de Aragua" id="equipo_2" hidden name="equipo_2"></input>
				<p>06:00 PM</p>
				<input type="text" value="06:00pm" id="hora" hidden name="hora"></input>
				<p>Stadium Nueva Esparta</p>
				<input type="text" value="Stadium Nueva Esparta" id="lugar" hidden name="lugar"></input>
				<p id="precioZona">Precio</p>
				<input type="text"  id="precio" hidden name="precio"></input>
				<hr>
					<p id="zonaAsiento">Zona Asiento</p>
					<input type="text" name="zonaElegida" id="zonaElegida" hidden >
					<input type="text" name="asientoElegido" id="asientoElegido" hidden >
					<input type="text" hidden id="ticketId" name="ticketId" ></input>
				<hr>
				<p class="headerText">Datos del Cliente</p>

				<div class="contenedorCampo">
					<label for="cedula">C.I.: </label>
						<input type="text" class="inputText" name="cedula"id="cedula" placeholder="Cédula" onkeypress="validar_cedula()" required maxlength="9"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="nombre">Nombre:</label>
						<input type="text" class="inputText" name="nombre" id="nombre" placeholder="Nombre" onkeypress="validar_nombre()" maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="apellido">Apellido:</label>
						<input type="text" class="inputText" name="apellido" id="apellido" placeholder="Apellido" onkeypress="validar_nombre()" required maxlength="20"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="telefono">Teléfono:</label>
						<input type="tel" class="inputText" name="telefono" id="telefono" placeholder="Teléfono" onkeypress="validar_telefono()" required maxlength="12"></input>
						<div class="errorText">error</div>
				</div>
				<div class="contenedorCampo">
					<label for="correo">Correo:</label>
						<input type="email" class="inputText" name="correo" id="correo" placeholder="Correo" required></input>
						<div class="errorText">error</div>
				</div>
				<div class="buttonContainer">
					<button class="button" type="submit" id="imprimir">Imprimir</button>
					<button class="button" type="reset">Reiniciar</button>
					<div id="response"></div>
				</div>
			</form>
		</div>
		<div class="leyenda">
			<table class="tablaLeyenda tablaLeyendaBravos">
				<tr>
					<th colspan='4'><p class="headerText">Leyenda</p></th>
				</tr>
				<tr>
					<td><div class="Grada"></div></td>
					<td>Grada</td>
					<td><div class="SillaInferior"></div></td>
					<td>Sillas Inferiores</td>
				</tr>
				<tr>
					<td><div class="LateralInferior"></div></td>
					<td>Lateral Inferior</td>
					<td><div class="Vip"></div></td>
					<td>Vip</td>
				</tr>
				<tr>
					<td><div class="LateralSuperior"></div></td>
					<td>Lateral Superior</td>
					<td><div class="SillaSuperior"></div></td>
					<td>Sillas Superiores</td>
				</tr>
			</table>	
		</div>
</div>


</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="js/jquery-2.2.1.js"></script>
	<meta charset="utf-8">
	<meta http-equiv="refresh" content="30">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="shortcut icon" href="favicon.ico"/>
	<script type="text/javascript" src="js/main.js"></script>
	<title>Administración Reserva Estadio</title>
</head>
<body>
	<div class="container">
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
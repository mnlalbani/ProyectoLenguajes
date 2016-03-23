//Validación formulario
function validar_nombre(){
	if(document.getElementById('nombre').value.length > 19){
		alert('Nombre no puede ser mayor a 20 caracteres');
		document.getElementById('nombre').value = "";
		return false;
	}
		if ((event.keyCode < 97 || event.keyCode > 122) && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode != 32) && (event.keyCode!=241)) {
			event.returnValue = false;
		}
		return false;
}

function validar_cedula(){
	if(document.getElementById('cedula').value.length > 7){
		alert('Cédula no puede ser mayor a 8 dígitos');
		document.getElementById('cedula').value = "";
		return false;
	}
	if (event.keyCode < 48 || event.keyCode > 57 ){
		event.returnValue = false;
	}
	return false;
}

function validar_telefono(){
	if (document.getElementById('telefono').value.length > 10) {
		alert('Teléfono no puede ser mayor a 11 dígitos');
		document.getElementById('telefono').value = "";
		return false;
	}
	if (event.keyCode < 48 || event.keyCode > 57) {
		event.returnValue = false;
	}
	return false;
}
//Fin validación formulario

//Imprimir
function imprimir(){
			var cedula = document.getElementById("cedula").value;
			var nombre = document.getElementById("nombre").value;
			var apellido = document.getElementById("apellido").value;
			var telefono = document.getElementById("telefono").value;
			var correo = document.getElementById("correo").value;
			var equipos = document.getElementById("equipo_1").value +' vs '+ document.getElementById('equipo_2').value;
			var hora = document.getElementById("hora").value;
			var lugar = document.getElementById("lugar").value;
			var precio = document.getElementById("costo").value;

			alert("Datos de Juego Y Ticket \n "+equipos+"\n"+hora+"\n"+lugar+"\n"+precio+" \nCliente: \nC.I: "+cedula+"\nNombre: "+nombre+"\nApellido: "+apellido+"\nTelefono: "+telefono+"\nCorreo: "+correo);
}
//Fin imprimir
$(document).ready(function(){
	$('.container').load('juego.php .containerJuego1'); //carga el juego 1 al abrir la aplicación
	$('#juego1 a').attr('class','active'); //agrega la clase 'active' al elemento 1 del nav

  $('#juego1 a').click(function(){
   		$('.container').load('juego.php .containerJuego1');
   		$(this).attr('class', 'active');
   		$('#juego2 a').attr('class', 'inactive');
   		$('#juego3 a').attr('class', 'inactive');
   		$('#juego4 a').attr('class', 'inactive');
   		$('#administracion a').attr('class', 'inactive');
   		return false;
   });

   $('#juego2 a').click(function(){
   		$('.container').load('juego.php .containerJuego2');
   		$(this).attr('class', 'active');
   		$('#juego1 a').attr('class', 'inactive');
   		$('#juego3 a').attr('class', 'inactive');
   		$('#juego4 a').attr('class', 'inactive');
   		$('#administracion a').attr('class', 'inactive');
   		return false;
   });
   $('#juego3 a').click(function(){
   		$('.container').load('juego.php .containerJuego3');
   		$(this).attr('class', 'active');
   		$('#juego1 a').attr('class', 'inactive');
   		$('#juego2 a').attr('class', 'inactive');
   		$('#juego4 a').attr('class', 'inactive');
   		$('#administracion a').attr('class', 'inactive');
   		return false;
   });
   $('#juego4 a').click(function(){
   		$('.container').load('juego.php .containerJuego4');
   		$(this).attr('class', 'active');
   		$('#juego1 a').attr('class', 'inactive');
   		$('#juego2 a').attr('class', 'inactive');
   		$('#juego3 a').attr('class', 'inactive');
   		$('#administracion a').attr('class', 'inactive');
   		return false;
   });
   $('#administracion a').click(function(){
   		$('.container').load('juego.php .containerAdministracion');
   		$(this).attr('class', 'active');
   		$('#juego1 a').attr('class', 'inactive');
   		$('#juego2 a').attr('class', 'inactive');
   		$('#juego3 a').attr('class', 'inactive');
   		$('#juego4 a').attr('class', 'inactive');
   		return false;
   });
});

$(document).ajaxComplete(function(){
    $('form').attr('autocomplete', 'off');  //agrega el atributo autcomplete='off' a todos los formularios luego de ser cargados por ajax  
    
});
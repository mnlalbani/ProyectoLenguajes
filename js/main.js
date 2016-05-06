//Validación formulario
function validar_nombre(){
      var x = event.which || event.keyCode;
		if ((x < 97 || x > 122) && (x < 65 || x > 90) && (x != 32) && (x!=241)) {
			event.returnValue = false;
		}
		return false;
}
function validar_cedula(){
   var x = event.which || event.keyCode;
	if (x < 48 || x > 57 ){
		event.returnValue = false;
	}
	return false;
}

function validar_telefono(){
   var x = event.which || event.keyCode;
	if (x < 48 || x > 57) {
		event.returnValue = false;
	}
	return false;
}
//Fin validación formulario
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

   $('#aguilasCardenales').unbind('submit');
   $('#aguilasCardenales').on('submit',function(e){
      e.preventDefault();
      var details = $('#aguilasCardenales').serialize();
      $.post('php/registroTicket.php',details,function(data){
         $("form").trigger("reset");
         var arr = JSON.parse(data);
         if (arr.success == true) {
            $('#response').html(arr.message);
         }
         else{
            $('#response').html(arr.errors);
         }
      });
   });

      var op;
   $('button').unbind('click');
   $('button').on('click',function(){
      op = $(this).val();
      //console.log(op);
   })
   $('#formAdministracion').unbind('submit');
   $('#formAdministracion').on('submit',function(e){
      e.preventDefault();
      var details = $('#formAdministracion').serialize();
      details += "&op="+ op;
      console.log(op);
      console.log(details);
      $.post('php/administracionTicket.php',details,function(data){
         $("form").trigger("reset");
         $('#response').html(data);
      });
   });


   $('#gResumen').unbind('click');
   $('#gResumen').on('click',function(){
      console.log("hola");
      $('.container').load('juego.php .containerResumen');
   });

   

   //Muestra de Errores de longitud en formulario
   $('input').unbind('change keyup paste click');
   $('input').on('change keyup paste click',function(){
      if (($(this).val().length) == ($(this).attr('maxlength'))) {
         $(this).addClass('inputText-error');
         $(this).closest('div', '.contenedorCampo').find('div','.errorText').css('visibility','visible').text('No puede ser mayor a '+($(this).attr('maxlength') - 1)+' caracteres');
         $('#imprimir').prop('disabled',true);
         return false;
      }
      if (($(this).val().length) < ($(this).attr('maxlength'))) {
         $(this).removeClass('inputText-error');
         $(this).closest('div', '.contenedorCampo').find('div','.errorText').css('visibility','hidden');
         $('#imprimir').prop('disabled',false);
         return false;
      }      
   });
});
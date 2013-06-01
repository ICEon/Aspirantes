function Reacciona(campo) { 
setTimeout(function(){
		$('div.reg').hide();
var b = document.getElementById('campo').value;
b = b.toUpperCase();
$('div.reg:contains('+b+')').show();
		}, 500);
}

function guardarOpciones(Q, P, S, T, C){



	datos = "Quien="+Q+"&Primera="+P+"&Segunda="+S+"&Tercera="+T+"&Cuarta="+C;
	$.ajax({
		type: "POST",
		url: "http://cbtis16.net46.net/guardar.php",
		data: datos
	}).done(function(msg) {

alert ("Opciones Guardadas");




	});

}



function loginConn(reg){

	datos = "registro="+reg;
	$.ajax({
		type: "POST",
		url: "http://cbtis16.net46.net/buscar.php",
		data: datos
	}).done(function(msg) {

var n=msg.lastIndexOf("}")+1;
msg = msg.slice(0,n);
alert (msg);
var Datos = JSON.parse (msg);

$('#devic table td').eq(1).text(Datos['Nombre']);
$('#devic table td').eq(3).text(Datos['ApellidoP']);
$('#devic table td').eq(5).text(Datos['ApellidoM']);
$('#devic table td').eq(7).text(Datos['Secundaria']);
$('#devic table td').eq(9).text(Datos['POpcion']);
$('#devic table td').eq(11).text(Datos['SOpcion']);
$('#devic table td').eq(13).text(Datos['TOpcion']);
$('#devic table td').eq(15).text(Datos['COpcion']);

	});
}
$(document).ready(function(e) {




    document.addEventListener("deviceready", function(){
			$('.Send').tap(function(){
		var formulario = $(this).parents('form');

	switch(formulario.attr('name'))
	{
		
			case 'encontrar':

			var registro = formulario.children('input:eq(0)').val();
				loginConn(registro);
	
				break;	
				
			case 'opciones':

                var Quien =  $("#registro").val();

		var Primera = $("#POpcion").val();
				var Segunda = $("#SOpcion").val();
						var Tercera = $("#TOpcion").val();
								var Cuarta = $("#COpcion").val();
								

				guardarOpciones(Quien, Primera, Segunda, Tercera, Cuarta);

				break;	

		}
	});


			




		
	});
});

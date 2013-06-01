function Reacciona(campo) { 
setTimeout(function(){
		$('div.reg').hide();
var b = document.getElementById('campo').value;
b = b.toUpperCase();
$('div.reg:contains('+b+')').show();
		}, 500);
}

function guardar(Q,P,S,T,C){

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

//var n=msg.lastIndexOf("}")+1;
msg = msg.slice(0,25);
alert (msg);


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
							
                var Quien = document.getElementById("Registro").value;
				var Primera = document.getElementByName("POpcion").value;
				var Segunda = document.getElementByName("SOpcion").value;
				var Tercera = document.getElementByName("TOpcion").value;
				var Cuarta = document.getElementByName("COpcion").value;
				
				guardar(Quien, Primera,Segunda,Tercera,Cuarta);
	
				break;	

		}
	});


			




		
	});
});

$(document).ready(function (){
	$("button").click(function(){

		$.get('datos3.json',function(datos){
			console.log(datos);
			if ($("#informe").is(":empty")) {
				$.each(datos, function(index, obj){
					$("#informe").append(obj.nombre + ' ' + obj.apellido + '<br/>');
				});
			}
		});
	});
});
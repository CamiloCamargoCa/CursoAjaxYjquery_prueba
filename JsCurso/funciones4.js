$(document).ready(function(){
$("button").click(function(){
	$.getJSON("datos4.json",function(datos){
		console.log(datos);
		$.each(datos.empleados,function(index, obj){
				$("ul").append("<li>"+obj.nombre+" : "+obj.salario+"</li>");
			});
		});
	});
});
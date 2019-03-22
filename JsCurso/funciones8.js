$(document).ready(function(){
	$("input[type=submit]").click(function(event){
		event.preventDefault();
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();

		$.post("servidor8.php",{
			nombre:nombre,
			apellido:apellido
		},function(respuesta){
			$("#info").text(respuesta);
		}).done(function(){
			$("#mensaje").text("Ejecución Exitosa!");
		}).fail(function(){
			$("#mensaje").text("Ocurrio un error!");
		}).always(function(){
			console.log("Ejecución finalizada");
		});
	});
});
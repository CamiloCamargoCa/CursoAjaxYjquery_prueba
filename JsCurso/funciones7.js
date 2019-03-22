$(document).ready(function(){
	$("button").click(function(){
		var usuario = $("#nombre").val();
		$.get("servidor7.php",{nombre:usuario},function(respuesta){
			$("#info").text(respuesta);
		})
	});
});
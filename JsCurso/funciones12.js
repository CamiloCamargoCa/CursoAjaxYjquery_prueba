$(document).ready(function(){
	$("#registrar").click(function(){
		var usuarioNombre = $("#nombre").val();
		var usuarioCorreo = $("#correo").val();
		var usuarioContrasena = $("#contrasena").val();
	
		$.ajax({
			url:"servidor12.php",
			type:"POST",
			data:{nombre:usuarioNombre,correo:usuarioCorreo,contrasena:usuarioContrasena},
			success:function(dato){
				$("#info").text(dato);
			}
		});
	});
});
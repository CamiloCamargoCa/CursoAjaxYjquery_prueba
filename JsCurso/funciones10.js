$(document).ready(function(){
	$("#mostrar").click(function(){
		$.ajax({
			url:"servidor10.php",
			type:"GET",
			dataType:"json",
			success:function(datos){
				console.log(datos);
				$.each(datos,function(indice, persona){
					$("table").append("<tr><td>" +
						persona.id + " " +
						persona.name + " " +
						persona.email + " " +
						persona.password + 
						"</td></tr>");
				});
			}
		});
	});
});
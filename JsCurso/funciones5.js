$(document).ready(function(){
	$("button").click(function(){
		$.getJSON("datos3.json",function (datos){

			var personas = [];
			var edadMenor;

			$.each(datos, function(index, obj){
				personas.push(obj.edad);
				edadMenor = personas[0];

				$.each(personas, function(index, edad){
					if (edad < edadMenor) {
						edadMenor = edad;
					}
				});
			});
			$("#info").text("la edad menor es "+edadMenor);
		});
	});
});
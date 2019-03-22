$(document).ready(function(){
	$("button").click(function(){
		$.ajax({
			url:"datos3.json",
			type:"GET",
			dataType:"json",
			success: function(datos){
				console.log(datos);
				if ($("#info").is(":empty")) {

				$.each(datos, function(index, obj){
					$("#info").append(obj.nombre+" "+obj.apellido+"</br>");
				});
			}
			},
			error:function(xhr,status,error){
				console.log(xhr);
				console.log(status);
				console.log(error);
			}
		})
	});
});
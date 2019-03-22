<?php 

$host = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "clientes";
$tabla = "users";

$con = mysqli_connect($host,$usuario,$password,$baseDatos);

if (mysqli_connect_errno()) {
	echo "Error con la conexion ".mysqli_connect_error();
}else{
	//echo "conectado";
}

$resultado = mysqli_query($con,"SELECT * FROM users");
while($fila = mysqli_fetch_assoc($resultado)){
	$array[]=$fila;
}

echo json_encode($array);
mysqli_close($con);

?>
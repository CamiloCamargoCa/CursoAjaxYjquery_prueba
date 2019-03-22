<?php 

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'Clientes';

$con = mysqli_connect($host,$user,$pass,$db);

if (mysqli_connect_errno()) {
	echo "Error con la conexion ".mysqli_connect_error();
}else{
	//echo "conectado";
}












 ?>
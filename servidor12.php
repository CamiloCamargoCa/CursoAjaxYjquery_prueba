<?php 

require "conexion.php";

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

if (isset($nombre) && isset($correo) && isset($contrasena)) {

$resultado = mysqli_query($con,"INSERT INTO users values('','$nombre','$correo','$contrasena')");	
echo "Usuario ".$nombre." ya fue registrado";
mysqli_close($con);
}

?>
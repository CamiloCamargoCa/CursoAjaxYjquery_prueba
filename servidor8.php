<?php 

if (isset($_POST['nombre']) && isset($_POST['apellido'])) {
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	echo "usuario ".$nombre." ".$apellido." fue registrado";
}





?>
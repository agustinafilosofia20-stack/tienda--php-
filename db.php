<?php
// Mostrar errores temporalmente para depurar
error_reporting(E_ALL);
ini_set('display_errors', 1);

// ----------------------
// DATOS DE CONEXIÓN – REEMPLAZÁ ESTO CON TUS DATOS
// ----------------------
$host = "sql302.infinityfree.com"; // Ej: sql123.infinityfree.com
$user = "if0_41083930"; // Ej: if0_12345678
$pass = "Tienda202677"; // Ej: MiPass!23
$db = "if0_41083930_dat"; // Ej: if0_12345678_tienda

// ----------------------
// CREAR CONEXIÓN
// ----------------------
$conexion = new mysqli($host, $user, $pass, $db);

// ----------------------
// REVISAR ERRORES DE CONEXIÓN
// ----------------------
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
} else {
    echo "Conexión correcta!";
}
?>


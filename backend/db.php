<?php
$host = "localhost";
$usuario = "root";
$contrasena = "Samuel21_";
$bd = "dual_fidiana";

try {
    // Usando PDO para la conexión con MySQL
    $pdo = new PDO("mysql:host=$host;dbname=$bd;charset=utf8", $usuario, $contrasena);
    // Establecer el modo de error de PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
    exit;
}

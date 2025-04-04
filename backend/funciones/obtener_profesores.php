<?php
require_once 'db.php';

$stmt = $pdo->query("SELECT * FROM profesor"); // ajusta el nombre de la tabla si es necesario
$datos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($datos);

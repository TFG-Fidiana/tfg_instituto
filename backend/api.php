<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Incluir archivo de conexión a la base de datos
require_once 'db.php';

// Obtener el método y la ruta de la solicitud
$metodo = $_SERVER['REQUEST_METHOD'];
$ruta = $_GET['ruta'] ?? '';

switch ("$metodo:$ruta") {
    // Obtener todos los profesores
    case "GET:profesores":
        require 'funciones/obtener_profesores.php';
        break;

    // // Crear un nuevo profesor
    // case "POST:profesor":
    //     require 'funciones/crear_profesor.php';
    //     break;

    // // Eliminar un profesor
    // case "DELETE:profesor":
    //     require 'funciones/eliminar_profesor.php';
    //     break;

    default:
        echo json_encode(["error" => "Ruta no encontrada"]);
        break;
}

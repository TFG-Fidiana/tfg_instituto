// import Login from './components/Login'
// import "./css/App.css";
import React, { useState, useEffect } from 'react';

function App() {
  const [profesores, setProfesores] = useState([]);

  // Obtener los profesores cuando se monta el componente
  useEffect(() => {
    fetch('http://localhost:8000/api.php?ruta=profesores')
      .then((res) => res.json())
      .then((data) => {
        setProfesores(data); // Guardar los datos de los profesores en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los profesores:", error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Profesores</h1>
      
      {/* Tabla para mostrar los profesores */}
      <table border="1" style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Usuario</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Habilitado</th>
          </tr>
        </thead>
        <tbody>
          {/* Iteramos sobre los profesores y mostramos sus datos */}
          {profesores.length > 0 ? (
            profesores.map((profesor) => (
              <tr key={profesor.id_profesor}>
                <td>{profesor.id_profesor}</td>
                <td>{profesor.nombre}</td>
                <td>{profesor.apellidos}</td>
                <td>{profesor.usuario}</td>
                <td>{profesor.email}</td>
                <td>{profesor.telefono}</td>
                <td>{profesor.habilitado == 1 ? "Si" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay profesores disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

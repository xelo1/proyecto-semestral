import React, { useState } from 'react';
import axios from "axios"


const MaterialCrear = () => {
  const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState('');

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Crear un objeto con los datos del formulario
          const nuevoArticulo = {
              nombre,
              descripcion,
              stock
          };
  
          // Enviar una solicitud POST al backend
          const response = await axios.post('http://localhost:3000/api/articulo', nuevoArticulo);
  
          // Manejar la respuesta del servidor
          if (response.status === 200 || response.status === 201) {
              console.log('Artículo creado:', response.data);
              // Opcional: Redirigir o mostrar un mensaje de éxito
          }
      } catch (error) {
          console.error('Error al crear el artículo:', error);
          // Opcional: Manejar errores (mostrar mensaje al usuario, etc.)
      }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        <button type="submit">Crear Artículo</button>
    </form>
);

};


export default MaterialCrear;

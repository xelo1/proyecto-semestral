import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const MaterialCrear = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/inventario'); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !stock) {
      setError(true);
      return;
    }
    setError(false);
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
    <Container>
      <Paper style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', boxShadow: '10px 10px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" style={{ textAlign: 'center' }}>Crear Artículo</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
              <TextField
                error={error && !nombre}
                label="Nombre"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                helperText={error && !nombre ? "Campo requerido" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={error && !descripcion}
                label="Descripción"
                fullWidth
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                helperText={error && !descripcion ? "Campo requerido" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={error && !stock}
                label="Stock"
                fullWidth
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                helperText={error && !stock ? "Campo requerido" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Crear Artículo
              </Button>
              
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Button
  variant="contained"
  color="primary"
  onClick={handleVolver}
  style={{ marginTop: '20px' }} // Agrega un margen superior de 20px
>
  Volver a inventario
</Button>

    </Container>
  );
};

export default MaterialCrear;

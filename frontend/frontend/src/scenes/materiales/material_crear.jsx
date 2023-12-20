import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const MaterialCrear = ({ onMaterialCreate }) => {
  const [nombreMat, setNombreMat] = useState('');
  const [tipoMat, setTipoMat] = useState('');
  const [cantidad, setCantidad] = useState('');

  const navigate = useNavigate();

  const handleCrearClick = () => {
    // Validación básica, puedes mejorarla según tus necesidades
    if (nombreMat.trim() === '' || tipoMat.trim() === '' || cantidad.trim() === '') {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Llama a la función proporcionada por el padre con los datos del nuevo material
    onMaterialCreate({
      nombre_mat: nombreMat,
      tipo_mat: tipoMat,
      cantidad: parseInt(cantidad, 10), // Convierte la cantidad a un número entero
    });

    // Reinicia los campos después de crear un nuevo material
    setNombreMat('');
    setTipoMat('');
    setCantidad('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginLeft: 20, width: '80%' }}>
      <TextField
        label="Nombre Material"
        variant="outlined"
        value={nombreMat}
        onChange={(e) => setNombreMat(e.target.value)}
      />
      <TextField
        label="Tipo Material"
        variant="outlined"
        value={tipoMat}
        onChange={(e) => setTipoMat(e.target.value)}
      />
      <TextField
        label="Cantidad"
        variant="outlined"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={handleCrearClick}
      >
        Crear
      </Button>
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          display: 'flex',
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/inventario')}
        >
          Volver
        </Button>
      </Box>
    </Box>
  );
};

export default MaterialCrear;

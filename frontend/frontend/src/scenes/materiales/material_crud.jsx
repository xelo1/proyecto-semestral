import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useEffect , useState} from 'react';

const MaterialCrud = () => {
  const navigate = useNavigate();

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/articulos')
      .then(response => {
        console.log("Respuesta de la API:", response.data);
        const articulosConId = response.data.map(articulo => ({
          ...articulo,
          id: articulo._id,
        }));
        setArticulos(articulosConId);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleEditarClick = (id) => {
    // Implementa la lógica para editar un artículo según su ID
  };

  const handleDeleteClick = (id) => {
    axios.delete(`/api/inventario/borrar/${id}`)
      .then(() => {
        // Actualiza el estado de artículos después de la eliminación
        setArticulos((prevArticulos) => prevArticulos.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nombre_mat',
      headerName: 'Nombre Material',
      width: 150,
      editable: true,
    },
    {
      field: 'tipo_mat',
      headerName: 'Tipo Material',
      width: 150,
      editable: true,
    },
    {
      field: 'cantidad',
      headerName: 'Cantidad Material',
      type: 'number',
      width: 300,
      editable: true,
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      width: 300,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditarClick(params.row.id)}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDeleteClick(params.row.id)}
          >
            Eliminar
          </Button>
        </Box>
      ),
    },
  ];

  // Agrega la propiedad 'key' a cada objeto en el array 'articulos'
  const rowsWithKeys = articulos.map((row) => ({ ...row, key: row.id }));

  return (
    <Box sx={{ height: 400, width: '80%', margin: '0 auto' }}>
      <Box sx={{ 
        backgroundColor: 'white',
        boxShadow: '10px 10px 10px #aaa',  
        borderRadius: 1 
      }}>
        <h1>Inventario POLPAICO</h1>
      </Box>
      <Box sx={{ 
        backgroundColor: 'white',
        boxShadow: '10px 10px 10px #aaa',  
        borderRadius: 2 
      }}>
        <DataGrid
          rows={rowsWithKeys}
          columns={columns}
          pageSize={5}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>
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
          onClick={() => navigate('/crear_inventario')}
        >
          Agregar Nuevo Articulo
        </Button>
      </Box>
    </Box>
  );
};

export default MaterialCrud;

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useEffect , useState} from 'react';
const MaterialCrud = () => {
  const navigate = useNavigate();
  const [articulos, setArticulos] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/api/articulos')
      .then(response => {
        console.log("Respuesta de la API:", response.data);
        const articulosConId = response.data.articulos.map(articulo => ({
          ...articulo,
          id: articulo._id,
        }));
        setArticulos(articulosConId); 
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

// useEffect(() => {
//     clienteAxios
//       .get("/api/mostrarInv")
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           const inventario = response.data.map((element) => ({
//             ...element,
//             id: element.id,
//             total: element.precio_unitario * element.cant_mat,
//           }));
//           setInventario([...inventario, { id: "total", total: inventario.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0) }]);
//           setTotal(inventario.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0));
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);                                   Este useEffect es para consumir la API


  const handleEditarClick = (id) => {
    // Navigate to the form page with the selected ID
  };

  const handleDeleteClick = (params) => {
    //     if (params.row && params.row.id) {
//       const id = params.row.id;
//       clienteAxios
//         .delete(`/api/inventario/borrar/${id}`)
//         .then((response) => {
//           // eliminar el elemento de la tabla en el estado
//           setInventario(inventario.filter((row) => row.id !== params.row.id));
//         })
//         .catch((error) => {                       Api para borrar cosas
//           console.error(error);
//         });
//     }
  };

  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Nombre', width: 150, editable: true },
    { field: 'descripcion', headerName: 'Descripción', width: 150, editable: true },
    { field: 'stock', headerName: 'Stock', type: 'number', width: 110, editable: true },
    {
      field: 'acciones',
      headerName: 'acciones',
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

  const rows = articulos.map(articulo => ({
    id: articulo.id, // Asegúrate de que cada artículo tenga un ID único
    nombre: articulo.nombre,
    descripcion: articulo.descripcion,
    stock: articulo.stock
  }));

  return (
    <Box sx={{ height: 400, width: '80%', margin: '0 auto' }}>
      <Box sx={{ backgroundColor: 'white', boxShadow: '10px 10px 10px #aaa', borderRadius: 1 }}>
        <h1>Inventario POLPAICO</h1>
      </Box>
      <Box sx={{ backgroundColor: 'white', boxShadow: '10px 10px 10px #aaa', borderRadius: 2 }}>
        <DataGrid
          rows={articulos}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
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
          Crear Nuevo Material
        </Button>
      </Box>
    </Box>
  );
};

export default MaterialCrud;

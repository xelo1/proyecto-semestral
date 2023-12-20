const express = require('express');
const app = express();
const Articulo = require("../models/articulo");


// Middleware para parsear JSON en el cuerpo de la solicitud
app.use(express.json());

// const createArticulo = async (req, res) => {
//     try {
//       const { nombre, descripcion, stock } = req.body;
  
//       const newArticulo = new Articulo({nombre, descripcion, stock});
  
//       const articulo = await newArticulo.save();
  
//       return res.status(201).send(articulo);
//     } catch (error) {
//       return res.status(400).send({ message: error.message });
//     }
// };

const createArticulo = async (req, res) => {
    try {
        console.log('Cuerpo de la solicitud:', req.body); // Agrega esta línea

        const { nombre, descripcion, stock } = req.body;

        const newArticulo = new Articulo({ nombre, descripcion, stock });

        const articulo = await newArticulo.save();

        return res.status(201).send(articulo);
    } catch (error) {
        console.error('Error en la creación del artículo:', error); // Agrega esta línea
        return res.status(400).send({ message: error.message });
    }
};

module.exports = {
    createArticulo
    // createTratamiento,
    // getTratamientos,
    // updateTratamiento,
    // deleteTratamiento,
    // buscarPorNombreTratamiento,
  };
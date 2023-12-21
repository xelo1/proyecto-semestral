const express = require('express');
const app = express();
const Articulo = require("../models/articulo");

let idCounter = 1; // Inicia el contador en 1

// Middleware para parsear JSON en el cuerpo de la solicitud
app.use(express.json());

const createArticulo = async (req, res) => {
    try {
        console.log('Cuerpo de la solicitud:', req.body);

        const { nombre, descripcion, stock } = req.body;

        // Asigna el valor actual del contador como identificador
        const id = idCounter++;

        const newArticulo = new Articulo({ id, nombre, descripcion, stock });

        const articulo = await newArticulo.save();

        return res.status(201).send(articulo);
    } catch (error) {
        console.error('Error en la creación del artículo:', error);
        return res.status(400).send({ message: error.message });
    }
};

const getArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.find().exec();
        console.log(articulos);
        if (articulos.length === 0) {
            return res.status(404).send({ message: "No se han encontrado articulos" });
        }

        return res.status(200).send(articulos);

    } catch (error) {
        return res.status(400).send({ message: "No se realizó la búsqueda" });
    }
};
const deleteArticulo = async (req, res) => {
    try {
        const { id } = req.params;

        // Utiliza el método findByIdAndRemove para encontrar y eliminar el artículo por su _id
        const articuloEliminado = await Articulo.findByIdAndRemove(id).exec();

        if (!articuloEliminado) {
            return res.status(404).send({ message: "Artículo no encontrado" });
        }

        return res.status(200).send({ message: "Artículo eliminado correctamente", articulo: articuloEliminado });

    } catch (error) {
        console.error('Error al eliminar el artículo:', error);
        return res.status(500).send({ message: "Error interno del servidor" });
    }
};


module.exports = {
    createArticulo,
    getArticulos,
    deleteArticulo
    // Resto de funciones del controlador...
};

const Articulo = require("../models/articulo");

const createArticulo = async (req, res) => {
    try {
        const { nombre, descripcion, stock } = req.body;

        // Encuentra el último documento y obtén su ID
        const lastArticulo = await Articulo.findOne().sort({ id: -1 }).exec();
        const id = lastArticulo ? lastArticulo.id + 1 : 1;

        const newArticulo = new Articulo({ id, nombre, descripcion, stock });
        const articulo = await newArticulo.save();

        return res.status(201).send({ message: "Artículo creado exitosamente", data: articulo });
    } catch (error) {
        console.error('Error en la creación del artículo:', error);
        return res.status(400).send({ message: "Error en la creación del artículo", error: error.message });
    }
};

const getArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.find().exec();

        if (articulos.length === 0) {
            return res.status(404).send({ message: "No se encontraron artículos", data: [] });
        }

        return res.status(200).send({ message: "Artículos encontrados exitosamente", data: articulos });
    } catch (error) {
        console.error('Error al obtener artículos:', error);
        return res.status(500).send({ message: "Error interno del servidor al obtener artículos", error: error.message });
    }
};

const deleteArticulo = async (req, res) => {
    try {
        // Obtén el valor del parámetro id
        const idParam = req.params.id;

        // Verifica si el valor de idParam está presente
        if (!idParam) {
            return res.status(400).send({ message: "Se requiere un ID para realizar la eliminación", data: null });
        }

        // Remueve el prefijo ":" si está presente
        const id = idParam.startsWith(":") ? idParam.slice(1) : idParam;

        // Parsea el valor del parámetro id como un número antes de usarlo en la consulta
        const idAsNumber = parseInt(id, 10);

        // Verifica si el valor parseado es un número válido
        if (isNaN(idAsNumber)) {
            return res.status(400).send({ message: "El ID proporcionado no es un número válido", data: null });
        }

        const articuloEliminado = await Articulo.findOneAndRemove({ id: idAsNumber }).exec();

        if (!articuloEliminado) {
            return res.status(404).send({ message: "Artículo no encontrado", data: null });
        }

        return res.status(200).send({ message: "Artículo eliminado correctamente", data: articuloEliminado });
    } catch (error) {
        console.error('Error al eliminar el artículo:', error);
        return res.status(500).send({ message: "Error interno del servidor al eliminar el artículo", error: error.message });
    }
};

module.exports = {
    createArticulo,
    getArticulos,
    deleteArticulo
};

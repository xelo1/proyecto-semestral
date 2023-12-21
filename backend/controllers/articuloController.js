const Articulo = require("../models/articulos");


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

// const createArticulo = async (req, res) => {
//     try {
//         console.log('Cuerpo de la solicitud:', req.body); // Agrega esta línea

//         const { nombre, descripcion, stock } = req.body;

//         const newArticulo = new Articulo({ nombre, descripcion, stock });

//         const articulo = await newArticulo.save();

//         return res.status(201).send(articulo);
//     } catch (error) {
//         console.error('Error en la creación del artículo:', error); // Agrega esta línea
//         return res.status(400).send({ message: error.message });
//     }
// };

const createArticulo = async (req,res) => {
    try{
        const {nombre, descripcion, stock } = req.body
    const newArticulo = new Articulo({
        nombre,
        descripcion,
        stock
    })

    const articulo = await newArticulo.save();

    return res.status(201).send(articulo);
    }catch(error){
        return res.status(400).send({ message: error.message });
    }

}

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

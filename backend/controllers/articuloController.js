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
const getArticulos= async (req,res) => {

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

}
const deleteArticulo = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID recibido para eliminar:", id);
        const articulo = await Articulo.findByIdAndDelete(id);

        if (articulo) {
            res.status(200).send({ message: "Artículo eliminado con éxito" });
        } else {
            res.status(404).send({ message: "Artículo no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar el artículo:", error);
        res.status(500).send({ message: "Error al eliminar el artículo" });
    }
}

module.exports = {
    createArticulo,
    getArticulos,
    deleteArticulo
};

const Articulo = require("../models/articulo");

const createArticulo = async (req, res) => {
    try {
      const { nombre, descripcion, stock } = req.body;
  
      const newArticulo = new Articulo({nombre, descripcion, stock});
  
      const articulo = await newArticulo.save();
  
      return res.status(201).send(articulo);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
};
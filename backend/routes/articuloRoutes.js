const express = require("express");
const articuloController = require("../controllers/articuloController");
const api = express.Router();

api.post("/articulo", articuloController.createArticulo);
api.get("/articulos", articuloController.getArticulos);
api.delete("/borrar/:id", articuloController.deleteArticulo);


module.exports = api;

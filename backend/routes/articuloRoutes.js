const express = require("express");
const articuloController = require("../controllers/articuloController");
const api = express.Router();

api.post("/articulo", articuloController.createArticulo);
// api.get("/tratamientos", tratamientoController.getTratamientos);
// api.put("/tratamiento/:id", tratamientoController.updateTratamiento);
// api.delete("/Tratamiento/:id", tratamientoController.deleteTratamiento);
// api.get("/tratamientoPorRut/:rut", tratamientoController.buscarPorNombreTratamiento);



module.exports = api;
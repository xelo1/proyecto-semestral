const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const articuloSchema = new Schema({

    //Pasamos la estructura JSON que define el documento
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      requiered: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  });
  
  module.exports = mongoose.model("articulos", articuloSchema);
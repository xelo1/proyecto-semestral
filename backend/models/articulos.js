const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articulosSchema = new Schema({

    //Pasamos la estructura JSON que define el documento
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    stock: {
      type: Number,
      required: true,
    },
  });

  module.exports = mongoose.model("articulos", articulosSchema);

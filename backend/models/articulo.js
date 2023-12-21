const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true, // Asegura que cada id sea único
    },
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("articulos", articuloSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
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
        required: true
    }
});

module.exports = mongoose.model("Articulo", articuloSchema);

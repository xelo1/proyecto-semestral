const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();



app.listen(port, () => {
console.log(`Servidor escuchando en http://localhost:${port}`);
});
app.use(express.json());
dotenv.config();

const articuloRoutes = require("./routes/articuloRoutes");
app.use("/api", articuloRoutes);

app.listen(port, () => {
console.log(`Servidor escuchando en http://localhost:${port}`);
});

mongoose.set('strictQuery', false);

const usuario = "benja98"
const password = "C4TMHb0G6MOmznU1"
const dbName = "tienda"

const uri = `mongodb+srv://benja98:C4TMHb0G6MOmznU1@benjaminjara.zbzg5fq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

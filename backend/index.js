const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(cors());

const articuloRoutes = require("./routes/articuloRoutes");
app.use("/api", articuloRoutes);


mongoose.set('strictQuery', false);
const usuario = "benja98";
const password = "C4TMHb0G6MOmznU1";
const dbName = "tienda";

const uri = `mongodb+srv://${usuario}:${password}@benjaminjara.zbzg5fq.mongodb.net`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('conectado a mongodb'))
  .catch(e => console.log('error de conexión', e));



  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

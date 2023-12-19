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
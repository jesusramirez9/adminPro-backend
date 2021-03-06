const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar cors
app.use(cors());

// base de datos

dbConnection();

//rutas

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en ' + process.env.PORT);
})
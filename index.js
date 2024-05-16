const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Crear el servidor de express
const app = express();

// Configuracion cors
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Configuracion Body-parser
app.use(bodyParser.json());
//app.use(bodyparser.urlencoded({ extended: false }));

// Rutas
app.use('/api/contact', require('./routes/contact'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto: ' + 3000);
});
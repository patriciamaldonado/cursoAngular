const express = require('express');
const cors = require('cors');
const { dbConecction } = require('./db/config');
require('dotenv').config();


// console.log(process.env)

// Crear el servidor/ aplicación de express
const app = express();

// Conexion BD

dbConecction();

// Directorio público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());


//Rutas 
app.use('/api/auth', require('./routes/auth'));

// Levantar aplicacion de express indicando el puerto
app.listen(process.env.PORT), () =>{
    console.log("Servidor corriendo en ");
}
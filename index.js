require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConnection} = require('./database/config');


//Crear el servidor express
const app = express();

//Configurar CORS
app.use(cors()); 

//Base de datos
dbConnection();


//aDy3K60LyHoA05vh
//mean_user

// Rutas
app.get('/', (req, res) => {

    //res.status(400).json({
    res.status(200).json({
        ok:true,
        msg: 'Hola Mundo'
    })

});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);    
});



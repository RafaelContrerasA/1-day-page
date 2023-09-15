//Importacion express para manejo
const express = require('express');
//Manejo de rutas mediante Router
const router = express.Router();
//Manejo de controladores
const inicioController = require('../controllers/inicioController');

router.get('/', inicioController.render);


//exportacion del enrutador para definir las rutas en el app.js
module.exports=router;
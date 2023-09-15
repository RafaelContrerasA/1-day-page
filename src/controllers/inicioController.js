const { json } = require("body-parser");
const { route } = require("../routes/rutas");

const controller = {};

controller.render= (req,res) => {
    const actividad = 'Acceso al menu principal';
    res.render('inicio');
}

module.exports = controller;
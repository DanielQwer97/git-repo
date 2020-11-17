const express = require('express');
const routes = express.Router();

// Importar el controlador
const personasController = require("../Controllers/personasController")


//Rutas


//GET

routes.get("/" , personasController.listarpersonas);

routes.get("/:id", personasController.obtenerpersonasindv);


module.exports = routes;
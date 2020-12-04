const express = require('express');
const LibrosController = require('../Controllers/LibrosController');
const routes = express.Router();



//Rutas

//GET

routes.get("/" , LibrosController.ObtenerLibros);

//POST
routes.post("/", LibrosController.Agregarlibro)


module.exports = routes;
const express = require('express');
const routes = express.Router();

// Importar el controlador
const personasController = require("../Controllers/personasController")


//Rutas


//GET

routes.get("/" , personasController.listarpersonas);

routes.get("/:id", personasController.obtenerpersonasindv);

//POST
routes.post("/", personasController.crear)

//PUT
routes.put('/:id', personasController.editar)

//DELETE
routes.delete('/:id', personasController.eliminar)

module.exports = routes;
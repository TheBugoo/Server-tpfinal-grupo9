//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const propietarioCtrl = require('./../controllers/propietario.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', autCtrl.verifyToken, propietarioCtrl.getPropietarios);
router.post('/', autCtrl.verifyToken, propietarioCtrl.createPropietario);
router.get('/:id', autCtrl.verifyToken, propietarioCtrl.getPropietario);
router.put('/:id', autCtrl.verifyToken, propietarioCtrl.editPropietario);
router.delete('/:id', autCtrl.verifyToken, propietarioCtrl.deletePropietario);

//exportacion del modulo de rutas
module.exports = router;
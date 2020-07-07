//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const localCtrl = require('./../controllers/local.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', autCtrl.verifyToken, localCtrl.getLocales);
router.post('/', autCtrl.verifyToken, localCtrl.createLocal);
router.get('/habilitado', autCtrl.verifyToken, localCtrl.getLocales);
router.get('/:id', autCtrl.verifyToken, localCtrl.getLocal);
router.put('/:id', autCtrl.verifyToken, localCtrl.editLocal);
router.delete('/:id', autCtrl.verifyToken, localCtrl.deleteLocal);

//exportacion del modulo de rutas
module.exports = router; 
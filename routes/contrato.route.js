//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const contratoCtrl = require('./../controllers/contrato.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/',autCtrl.verifyToken, contratoCtrl.getContratos); 
router.post('/',autCtrl.verifyToken, contratoCtrl.createContrato);
router.get('/:id',autCtrl.verifyToken, contratoCtrl.getContrato);
router.put('/:id',autCtrl.verifyToken, contratoCtrl.editContrato);
router.delete('/:id',autCtrl.verifyToken, contratoCtrl.deleteContrato);

//exportacion del modulo de rutas
module.exports = router;
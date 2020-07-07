const express = require("express");
const router = express.Router();

//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', autCtrl.verifyToken, usuarioCtrl.getUsuarios);
router.post('/', autCtrl.verifyToken, usuarioCtrl.createUsuario);
router.post('/login', usuarioCtrl.loginUsuario);
router.delete('/:id', autCtrl.verifyToken, usuarioCtrl.deleteUsuario);

//exportacion del modulo de rutas
module.exports = router;

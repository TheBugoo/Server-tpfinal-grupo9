//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const novedadCtrl = require('./../controllers/novedad.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', autCtrl.verifyToken, novedadCtrl.getNovedades);
router.get('/pendiente', autCtrl.verifyToken, novedadCtrl.getNovedadesProcesadas);
router.post('/', autCtrl.verifyToken, novedadCtrl.createNovedad);
router.get('/:id', autCtrl.verifyToken, novedadCtrl.getNovedad);
router.put('/:id', autCtrl.verifyToken, novedadCtrl.editNovedad);
router.delete('/:id', autCtrl.verifyToken, novedadCtrl.deleteNovedad);

//exportacion del modulo de rutas
module.exports = router;
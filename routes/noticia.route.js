//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', noticiaCtrl.getNoticias);
router.get('/vigente', noticiaCtrl.getNoticiasVigente);
router.post('/', autCtrl.verifyToken, noticiaCtrl.createNoticia);
router.get('/:id', noticiaCtrl.getNoticia);
router.put('/:id', autCtrl.verifyToken, noticiaCtrl.editNoticia);
router.delete('/:id', autCtrl.verifyToken, noticiaCtrl.deleteNoticia);

//exportacion del modulo de rutas
module.exports = router; 
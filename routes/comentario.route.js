//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

const comentCtrl = require("../controllers/comentario.controller");

// definiendo rutas
router.get("/", comentCtrl.getComentarios);
router.post("/", comentCtrl.createComentario);
router.delete("/:id", comentCtrl.deleteComentario);

//exportacion del modulo de rutas
module.exports = router;
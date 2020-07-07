const Comentario = require('../models/comentario');

const comentarioCtrl = {}

comentarioCtrl.getComentarios = async (req, res) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
};
   
comentarioCtrl.createComentario = async (req, res) => {
    const comentarionuevo = new Comentario(req.body);
    await comentarionuevo.save(); 
    res.json({
        'status': 'Comentario guardado'
    }); 
};
comentarioCtrl.deleteComentario = async (req, res) => {
    await Comentario.findByIdAndRemove(req.params.id);
    res.json({ status: "Comentario Eliminado" });
};
module.exports = comentarioCtrl; 
const Noticia = require('../models/noticia');

const noticiaCtrl = {}

noticiaCtrl.getNoticias = async (req, res) => {
    const noticias = await Noticia.find().populate('usuario')
    res.json(noticias);
  };
   
noticiaCtrl.createNoticia = async (req, res) => {
    const noticiacreada = new Noticia(req.body);
    await noticiacreada.save();
    res.json({
        'status': 'Noticia guardada'
    }); 
}

noticiaCtrl.editNoticia = async (req, res) => {
    const { id } = req.params;
    const noticia = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        usuario: req.body.usuario,
        vigente: req.body.vigente,
    };
    await Noticia.findByIdAndUpdate(id, { $set: noticia }, { new: true });
    res.json({ status: "Noticia Actualizada" });
};
noticiaCtrl.getNoticia = async (req, res) => {
    const noticias = await Noticia.findById(req.params.id).populate("usuario");
    res.json(noticias);
}
noticiaCtrl.deleteNoticia = async (req, res) => {
    await Noticia.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Noticia  eliminada'
    })
}
noticiaCtrl.getNoticiasVigente = async (req, res) => {
    const noticias = await Noticia.find({ vigente: true }).populate("usuario");
    res.json(noticias);
}
module.exports = noticiaCtrl;
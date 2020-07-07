const Novedad = require('../models/novedad');
const novedadCtrl = {}

novedadCtrl.getNovedad = async (req, res) => {
    novedad = await Novedad.findById(req.params.id).populate("usuario");
    res.json(novedad);
}
novedadCtrl.createNovedad = async (req, res) => {
    const novedad = new Novedad(req.body);

    await novedad.save();
    res.json({
        'status': 'Novedad saved'
    });
}
novedadCtrl.editNovedad = async (req, res) => {
    const { id } = req.params;
    const novedad = {
        usuario: req.body.usuario,
        texto: req.body.texto,
        estado: req.body.estado,
    };
    await Novedad.findByIdAndUpdate(id, { $set: novedad }, { new: true }); 
    res.json({ status: "Novedad Actualizado" });
};
novedadCtrl.getNovedades = async (req, res) => {
    const novedades = await Novedad.find().populate("usuario");
    res.json(novedades);
}
novedadCtrl.getNovedadesProcesadas = async (req, res) => {
    var novedad = new Novedad();
    const novedades = await Novedad.find({ estado: "Pendiente" }).populate("usuario");
    res.json(novedades);
}
novedadCtrl.deleteNovedad = async (req, res) => {
    await Novedad.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Novedad  removed'
    })
}

module.exports = novedadCtrl;
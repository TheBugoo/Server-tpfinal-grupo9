const Local = require('../models/local');
const localCtrl = {}

localCtrl.getLocales = async (req, res) => {
    locales = await Local.find();
    res.json(locales);
}
localCtrl.createLocal = async (req, res) => {
    console.log("entro create Local");
    const local = new Local(req.body);
    await local.save();
    res.json({
        'status': 'Local saved'
    });
}
localCtrl.getLocal = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
}
localCtrl.editLocal = async (req, res) => {
    const { id } = req.params;
    const local = {
        superficie: req.body.superficie,
        imagen: req.body.imagen,
        alquilado: req.body.alquilado,
        costoMes: req.body.costoMes,
        descripcion: req.body.descripcion,
    }
    await Local.findByIdAndUpdate(id, { $set: local }, { new: true });
    res.json({ status: "Local Actualizado" });
}
localCtrl.deleteLocal = async (req, res) => {
    await Local.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Local removed'
    })
}
localCtrl.getLocalesHablitado = async (req, res) => {
    locales = await Local.find({ alquilado: false });
    res.json(locales);
}
module.exports = localCtrl;
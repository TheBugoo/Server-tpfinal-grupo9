const Contrato = require('../models/contrato');

const contratoCtrl = {}
contratoCtrl.getContrato = async (req, res) => {
    contrato = await Contrato.findById(req.params.id);
    res.json(contrato);
}
contratoCtrl.createContrato = async (req, res) => {
    const contrato = new Contrato(req.body);

    await contrato.save();
    res.json({
        'status': 'Contrato  saved'
    });
}
contratoCtrl.editContrato = async (req, res) => {
    const { id } = req.params;
    const contrato = {
        fecha: req.body.fecha,
        propietario: req.body.propietario,
        locales: req.body.fechalocales,
        costoTotalAlq: req.body.costoTotalAlq,
    };
    await Contrato.findByIdAndUpdate(id, { $set: contrato }, { new: true });
    res.json({ status: "Contrato Actualizado" });
};
contratoCtrl.getContratos = async (req, res) => {
    const contratos = await Contrato.find().populate("locales").populate("propietario");
    res.json(contratos);
}
contratoCtrl.deleteContrato = async (req, res) => {
    await Contrato.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Contrato  removed'
    })
}

module.exports = contratoCtrl;
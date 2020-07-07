const Propietario = require('../models/propietario');

const propietarioCtrl = {}

propietarioCtrl.getPropietarios = async (req, res) => {
    propietarios = await Propietario.find();
    res.json(propietarios);
}
propietarioCtrl.createPropietario = async (req, res) => {
    console.log("entro create propietario");
    const propietario = new Propietario(req.body);
    await propietario.save();
    res.json({
        'status': 'Propietario saved'
    });
}
propietarioCtrl.getPropietario = async (req, res) => {
    const propietario = await Propietario.findById(req.params.id);
    res.json(propietario);
}
propietarioCtrl.editPropietario = async (req, res) => {
    const { id } = req.params;
    const propietario = {
        apellido: req.body.apellido,
        nombres: req.body.nombres,
        dni: req.body.dni,
        email: req.body.email,
        telefono: req.body.telefono,
    }
    await Propietario.findByIdAndUpdate(id, { $set: propietario }, { new: true });
    res.json({ status: "Propietario Actualizado" });
}
propietarioCtrl.deletePropietario = async (req, res) => {
    await Propietario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Propietario removed'
    })
}

module.exports = propietarioCtrl;
const mongoose = require('mongoose');
const Local = require('./local');
const Propietario = require('./propietario');
const { Schema } = mongoose;

const ContratoSchema = new Schema({
    fecha: { type: Date, required: true },
    propietario: { type: Schema.Types.ObjectId, ref: Propietario },
    locales: [{ type: Schema.Types.ObjectId, ref: Local }],
    costoTotalAlq: { type: String, required: true },
})

module.exports = mongoose.model('Contrato', ContratoSchema);
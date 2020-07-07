const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocalSchema = new Schema({

    superficie: { type: Number, required: true },
    imagen: { type: String, required: true },
    alquilado: { type: Boolean, required: true },
    costoMes: { type: Number, required: true },
    descripcion: { type: String, required: true },

})

module.exports = mongoose.model('Local', LocalSchema);
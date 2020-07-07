const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComentarioSchema = new Schema({
    texto: { type: String, required: true },
    fecha: { type: Date, required: true }

})

 
module.exports = mongoose.model('Comentario', ComentarioSchema);
const Usuario = require ('./../models/usuario')
const { json } = require('express');
const jwt = require('jsonwebtoken');

const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};
usuarioCtrl.createUsuario = async (req, res)=>{
    //en req.body se espera que vengan los datos de usuario a crear
    const usuario = new Usuario (req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario Created'
    });
}
usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Usuario  eliminada'
    })
}

usuarioCtrl.loginUsuario = async (req, res)=>{
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        usuario: req.body.usuario,
        password: req.body.password
    } 
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {

       //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'})
        };
        if (!user) {
            res.json({
                status: 0,
                message: "not found" })
        } else {
            const unToken = jwt.sign({ id: user._id }, "secretkey");
            res.json({
                status: 1,
                message: "success",
                username: user.username,
                perfil: user.perfil,
                usuario: user.usuario,
                _id: user._id,
                token: unToken,
             });
        }
    })
}
//exportacion del modulo controlador
module.exports= usuarioCtrl;

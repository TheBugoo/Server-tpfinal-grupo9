//importamos el manejador de token
const jwt = require('jsonwebtoken');
const authCtrl = {}

authCtrl.verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.json({ message: 'Unauthorized request.' })
    }
    //se espera formato -> Bearer XXXX , interesa el token en pos(1) del array
    const token = req.headers.authorization.split(' ')[1];
    if (token === null) {
        res.json({ message: 'Unauthorized request.' })
    }
    const payload = jwt.verify(token, "secretkey");
    req.userId = payload.id;
    next();
} 

//exportamos el manejador de token
module.exports = authCtrl;
'use strinc'
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, KEY } = require('../config/global');
const jwt = require('jsonwebtoken');

function encrypt(req, res, next) {
    const salt = bcrypt.genSaltSync( SALT_ROUNDS, );
    const hash = bcrypt.hashSync( req.body.password, salt );
    req.body.password = hash;
    next();
}

//Funcion que permite o niega el acceso a un end point
async function verifyToken(req, res, next) {
    try {
        const token = req.query.token;
        jwt.verify(token, KEY);
        next();
    } catch (error) {
        return res.status(400).json({msj:'Token no válido!'});
    }
}

module.exports = {
    encrypt,
    verifyToken
}
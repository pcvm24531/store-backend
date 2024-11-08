'use strinc'
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/global');

function encrypt(req, res, next) {
    const salt = bcrypt.genSaltSync( SALT_ROUNDS, );
    const hash = bcrypt.hashSync( req.body.password, salt );
    req.body.password = hash;
    next();
}


module.exports = {
    encrypt
}
'use strict'
const bcrypt = require('bcrypt');
const userModel = require('../user/user.model');

async function auth( req, res ) {
    try {
        const {username, password} = req.body;
        const user = await userModel.findByUsername(username);
        //Verificamos si no obtuvimos respuesta
        if( !user ) return res.status(404).json({'msg':'Not Found'});

        const userIsValid = await bcrypt.compare(password, user[0].password);
        
        if( !userIsValid ) return res.status(400).json({'msg':'Bad Request'});
        
        return res.status(200).json(user[0]);
    } catch (error) {
        return error;
    }
}

module.exports = {
    auth
}
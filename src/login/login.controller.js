'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../user/user.model');
const {COURSE, KEY} = require('../config/global');

async function auth( req, res ) {
    try {
        const {username, password} = req.body;
        const user = await userModel.findByUsername(username);
        //Verificamos si no obtuvimos respuesta array ||  object
        if( !user || Object.keys(user).length === 0 ) return res.status(404).json({'msg':'Usuario no encontrado'});
        
        const userIsValid = await bcrypt.compare(password, user[0].password);
        if( !userIsValid ) return res.status(400).json({'msg':`El usuario: ${username} o Contraseña: ${password} son incorrectos.`});

        if(userIsValid){
            const token = createToken();
            return res.status(200).json({token: token});
        }
    } catch (error) {
        return error;
    }
}

function createToken() {
    const token = jwt.sign(
        {course: COURSE},
        KEY,
        {expiresIn: 60*10}//60 segudos por 2
    );
    return token;
}

module.exports = {
    auth
}

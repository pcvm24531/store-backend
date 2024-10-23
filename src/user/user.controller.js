'use strict'

const db = require('./user.db');

async function save(req, res) {  
    console.log(req.body);    
    const newUser = req.body;
    const userSave = await db.save(newUser);
    if( !newUser ) return res.status(400).json({'msj':"Bad Request"});
    return res.status(200).json(userSave);
}
async function get(req, res) {
    const users = await db.get();
    if(!users) return res.status(404).json({'msg':'No se encontro resultados!'});
    return res.status(200).json( users );
}
function update(req, res) {
    return res.status(200).json( {msg:'Update User'} )
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete User'});
}

module.exports = {
    save,
    get,
    update,
    remove
}
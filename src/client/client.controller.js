'use strict'

const model = require('./client.model');

async function save(req, res) {
    const newClient = await model.save( req.body );
    if ( !newClient ) return res.status(400).json({'msj':'Bad Request'});
    return res.status(200).json(newClient);
}
async function getAll(req, res) {
    const getAllClients = await model.getAll();
    if( !getAllClients ) return res.status(400).json({'msj':'Bad Request'});
    return res.status(200).json(getAllClients);
}
async function getById(req, res) {
    const client = await model.getById( req.params.id );
    if( !client ) return res.status(400).json( {'msj':'Bad Request'} );
    return res.status(200).json(client);
}
function update(req, res) {
    return res.status(200).json({msg:'Update Client'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Client'});
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
};
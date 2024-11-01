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
async function update(req, res) {
    const client = await model.put( req.params.id, req.body );
    if ( !client ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(200).json(client);
}
async function remove(req, res) {
    const client = await model.remove( req.params.id );
    if( !client ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(200).json(client);
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
};
'use strict'

const model = require('./client.model');

async function save(req, res) {
    try {
        const newClient = await model.save( req.body );
        if ( !newClient ) return res.status(400).json({'msj':'Bad Request'});
        return res.status(200).json(newClient);
    } catch (error) {
        return res.status(400).json({'error':error});
    }
}
async function getAll(req, res) {
    try {
        const getAllClients = await model.getAll();
        if( !getAllClients ) return res.status(400).json({'msj':'Bad Request'});
        return res.status(200).json(getAllClients);
    } catch (error) {
        return res.status(400).json({'error':error});
    }
}
async function getById(req, res) {
    try {
        const client = await model.getById( req.params.id );
        if( !client ) return res.status(400).json( {'msj':'Bad Request'} );
        return res.status(200).json(client);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}
async function update(req, res) {
    try {
        const client = await model.put( req.params.id, req.body );
        if ( !client ) return res.status(400).json({'msg':'Bad Request'});
        return res.status(200).json(client);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}
async function remove(req, res) {
    try {
        const client = await model.remove( req.params.id );
        if( !client ) return res.status(400).json({'msg':'Bad Request'});
        return res.status(200).json(client);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
};
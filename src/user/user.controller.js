'use strict'

const model = require('./user.model');

async function save(req, res) {
    try {
        req.body.photo = `/photos/${req.file.filename}`;//Capturamos el nobre de la foto
        const userSave = await model.save(req.body);
        if( !userSave ) return res.status(400).json({'msj':"Bad Request"});
        return res.status(200).json(userSave);
    } catch (error) {
        return res.status(400).json(error);
    }
}
async function get(req, res) {
    try {
        const users = await model.getAll();
        if(!users) return res.status(404).json({'msg':'No se encontro resultados!'});
        return res.status(200).json( users );
    } catch (error) {
        return res.status(400).json(error);
    }
}
async function getById(req, res) {
    try {
        const user = await model.getById( req.params.id );
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(error);
    }
}
async function update(req, res) {
    try {
        const user = await model.put( req.params.id, req.body );
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(error);
    }
}
async function remove(req, res) {
    try {
        const user = await model.remove(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(error);
    }
}


module.exports = {
    save,
    get,
    update,
    remove,
    getById
}
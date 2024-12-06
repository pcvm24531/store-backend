'use strict'

const model = require( './product.model' );

async function save(req, res) {
    try {
        req.body.image = `/photos/${req.file.filename}`;//Capturamos el nombre del file
        const productSave = await model.save(req.body);
        if (!productSave) return res.status(400).json({'msj':'Bad Request'});
        return res.status(201).json(productSave);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}

async function get(req, res) {
    try {
        const products = await model.getAll();
        if(!products) return res.status(400).json({'msg':'Bad Request'});
        return res.status(200).json( products );
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}

async function getById(req, res) {
    try {
        const product = await model.getById( req.params.id );
        if( !product ) return res.status(400).json({'msg':'Bad Request'});
        return res.status(200).json( product );
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}
async function update(req, res) {
    try {
        const product = await model.update( req.params.id, req.body );
        if( !product ) return res.status(400).json( {'msg':'Bad Request'} );
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}
async function remove(req, res) {
    try {
        const product = await model.remove( req.params.id );
        if ( !product ) return res.status(400).json({'msg':'Bad Request'});
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({'msj':error});
    }
}

module.exports = {
    save,
    get,
    getById,
    update,
    remove
};
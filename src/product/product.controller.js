'use strict'

const model = require( './product.model' );

async function save(req, res) {
    req.body.image = `/photos/${req.file.filename}`;//Capturamos el nombre del file
    const productSave = await model.save(req.body);
    if (!productSave) return res.status(400).json({'msj':'Bad Request'});
    return res.status(201).json(productSave);
}

async function get(req, res) {
    const products = await model.getAll();
    if(!products) return res.status(400).json({'msg':'Bad Request'});
    return res.status(200).json( products );
}

async function getById(req, res) {
    const product = await model.getById( req.params.id );
    if( !product ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(200).json( product );
}
async function update(req, res) {
    const product = await model.update( req.params.id, req.body );
    if( !product ) return res.status(400).json( {'msg':'Bad Request'} );
    return res.status(200).json(product);
}
async function remove(req, res) {
    const product = await model.remove( req.params.id );
    if ( !product ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(200).json(product);
}

module.exports = {
    save,
    get,
    getById,
    update,
    remove
};
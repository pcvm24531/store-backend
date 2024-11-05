'use strict'

const model = require('./sale.model');

async function save(req, res) {
    const saveSale = await model.save( req.body );
    if( !saveSale ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(201).json(saveSale);
}
function get(req, res) {
    return res.status(200).json({msg:'Get Sale'});
}
function update(req, res) {
    return res.status(200).json({msg:'Update Sale'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Sale'});
}

module.exports = {
    save,
    get,
    update,
    remove
}
'use strict'

const model = require('./sale.model');

async function save(req, res) {
    const saveSale = await model.save( req.body );
    if( !saveSale ) return res.status(400).json({'msg':'Bad Request'});
    return res.status(201).json(saveSale);
}
async function get(req, res) {
    const sales = await model.getAll();
    if( !sales ) return res.status(400).json({'msg':'Bad request'});
    return res.status(200).json(sales);
}
async function getById(req, res) {
    const sale = await model.getById(req.params.id);
    if( !sale ) return res.status(400).json({'msg':'Bad Request.'});
    return res.status(200).json(sale);
}
function update(req, res) {
    return res.status(200).json({msg:'Update Sale'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Sale'});
}

module.exports = {
    save,
    getById,
    update,
    remove,
    get
}
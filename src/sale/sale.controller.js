'use strict'

const model = require('./sale.model');

async function save(req, res) {
    try {
        const saveSale = await model.save( req.body );
        if( !saveSale ) return res.status(400).json({'msg':'Bad Request'});
        return res.status(201).json(saveSale);
    } catch (error) {
        return res.status(404).json({'msg':error});
    }
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
async function updateStatus(req, res) {
    const update = await model.update(req.params.id, req.params.statusSale);
    if( !update ) return res.status(400).json({'msg':'Bad Request.'});
    return res.status(200).json(update);
}

module.exports = {
    save,
    getById,
    get,
    updateStatus
}
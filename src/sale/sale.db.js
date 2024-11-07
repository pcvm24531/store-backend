'use strict'

const mongoose = require('mongoose');
const schema = require('./sale.schema');

const DOCUMENT = 'sale';
let sale = mongoose.model( DOCUMENT, schema.saleSchema );

async function save( data ) {
    return await sale.create( data );
}
async function getAll(){
    return await sale.find();
}
async function getById(id) {
    return await sale.findById(id);
}
async function updateStatusSale(id, status) {
    try {
        const cancel = await sale.updateOne( 
            {_id: id}, 
            {$set: {status: status} } 
        );
        return getById(id);
    } catch (error) {
        console.log(`Error: ${error}`);
        throw new Error('Error al actualizar la venta.');
    }
    
}

module.exports = {
    save,
    getAll,
    getById,
    updateStatusSale
}
'use strict'

const mongoose = require('mongoose');
const schema = require('./sale.schema');

const DOCUMENT = 'sale';
let sale = mongoose.model( DOCUMENT, schema.saleSchema );

async function save( data ) {
    try {
        return await sale.create( data );
    } catch (error) {
        return error;
    }
}
async function getAll(){
    try {
        return await sale.find();
    } catch (error) {
        return error;
    }
}
async function getById(id) {
    try {
        return await sale.findById(id);
    } catch (error) {
        return error;
    }
}
async function updateStatusSale(id, status) {
    try {
        const cancel = await sale.updateOne( 
            {_id: id}, 
            {$set: {status: status} } 
        );
        return getById(id);
    } catch (error) {
        return error;
    }
    
}

module.exports = {
    save,
    getAll,
    getById,
    updateStatusSale
}
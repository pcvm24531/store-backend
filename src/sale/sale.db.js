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

module.exports = {
    save,
    getAll,
    getById
}
'use strict'

const mongoose = require('mongoose');
const schema = require('./product.schema');

const DOCUMENT = 'product';
let product = mongoose.model( DOCUMENT, schema.productSchema );

async function save( data ) {
    return await product.create( data );
}

async function getAll() {
    return await product.find();
}

async function getById(id) {
    return await product.findById(id);
}

async function update( id, data ) {
    await product.replaceOne( {_id: id}, data );
    return getById(id);
}

async function remove( id ) {
    return await product.findByIdAndDelete( id );
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}
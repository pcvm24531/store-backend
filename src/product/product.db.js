'use strict'

const mongoose = require('mongoose');
const schema = require('./product.schema');

const DOCUMENT = 'product';
let product = mongoose.model( DOCUMENT, schema.productSchema );

async function save( data ) {
    try {
        return await product.create( data );
    } catch (error) {
        throw new Error("file.db error:"+error);
    }    
}

async function getAll() {
    try {
        return await product.find();
    } catch (error) {
        throw new Error("file.db error:"+error);
    }
}

async function getById(id) {
    try {
        const result = await product.findById(id);
        if(!result) return {status:400, message:'No hay datos para el ID'};
        return {status:200, result};
    } catch (error) {
        return {status:500, message:'Error:'+error.message};
    }   
}

async function update( id, data ) {
    try {
        await product.replaceOne( {_id: id}, data );
        return getById(id);
    } catch (error) {
        throw new Error("file.db error:"+error);
    }
}

async function remove( id ) {
    try {
        return await product.findByIdAndDelete( id );
    } catch (error) {
        throw new Error("file.db error:"+error);
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}
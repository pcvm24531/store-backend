'use strict'

const mongoose = require('mongoose');
const schema = require('./product.schema');

const DOCUMENT = 'product';
let product = mongoose.model( DOCUMENT, schema.productSchema );

async function save( data ) {
    try {
        const result = await product.create( data );
        if( !result ) return {
            status: 400,
            message:'No se ha podido guardar los datos'
        };
        return {status:200, result};
    } catch (error) {
        throw new Error("file.db error:"+error);
    }    
}

async function getAll() {
    try {
        const result = await product.find();
        if(!result) return {status: 400, message:"No se ha podido obtener los datos"}
        return {status: 200, result };
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
        const result = await product.replaceOne( {_id: id}, data );
        if(!result) return{status:400, message:"No se ha podido guardar los datos"};
        const product = getById(id);
        return {status:200, product };
    } catch (error) {
        throw new Error("file.db error:"+error);
    }
}

async function remove( id ) {
    try {
        const result = await product.findByIdAndDelete( id );
        if(!result) return {status: 400, message:'No se puede eliminar el producto'};
        return {status: 200, result};
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